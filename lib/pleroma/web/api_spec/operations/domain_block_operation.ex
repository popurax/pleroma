# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ApiSpec.DomainBlockOperation do
  alias OpenApiSpex.Operation
  alias OpenApiSpex.Schema
  alias Pleroma.Web.ApiSpec.Helpers

  def open_api_operation(action) do
    operation = String.to_existing_atom("#{action}_operation")
    apply(__MODULE__, operation, [])
  end

  def index_operation do
    %Operation{
      tags: ["domain_blocks"],
      summary: "Fetch domain blocks",
      description: "View domains the user has blocked.",
      security: [%{"oAuth" => ["follow", "read:blocks"]}],
      operationId: "DomainBlockController.index",
      responses: %{
        200 =>
          Operation.response("Domain blocks", "application/json", %Schema{
            description: "Response schema for domain blocks",
            type: :array,
            items: %Schema{type: :string},
            example: ["google.com", "facebook.com"]
          })
      }
    }
  end

  def create_operation do
    %Operation{
      tags: ["domain_blocks"],
      summary: "Block a domain",
      description: """
      Block a domain to:

      - hide all public posts from it
      - hide all notifications from it
      - remove all followers from it
      - prevent following new users from it (but does not remove existing follows)
      """,
      operationId: "DomainBlockController.create",
      requestBody: domain_block_request(),
      security: [%{"oAuth" => ["follow", "write:blocks"]}],
      responses: %{
        200 => Operation.response("Empty object", "application/json", %Schema{type: :object})
      }
    }
  end

  def delete_operation do
    %Operation{
      tags: ["domain_blocks"],
      summary: "Unblock a domain",
      description: "Remove a domain block, if it exists in the user's array of blocked domains.",
      operationId: "DomainBlockController.delete",
      requestBody: domain_block_request(),
      security: [%{"oAuth" => ["follow", "write:blocks"]}],
      responses: %{
        200 => Operation.response("Empty object", "application/json", %Schema{type: :object})
      }
    }
  end

  defp domain_block_request do
    Helpers.request_body(
      "Parameters",
      %Schema{
        type: :object,
        properties: %{
          domain: %Schema{type: :string}
        },
        required: [:domain]
      },
      required: true,
      example: %{
        "domain" => "facebook.com"
      }
    )
  end
end
