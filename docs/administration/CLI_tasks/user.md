# Managing users

{! backend/administration/CLI_tasks/general_cli_task_info.include !}

## Create a user

=== "OTP"

    ```sh
    ./bin/pleroma_ctl user new <nickname> <email> [option ...]
    ```

=== "From Source"

    ```sh
    mix pleroma.user new <nickname> <email> [option ...]
    ```


### Options
- `--name <name>` - the user's display name
- `--bio <bio>` - the user's bio
- `--password <password>` - the user's password
- `--moderator`/`--no-moderator` - whether the user should be a moderator
- `--admin`/`--no-admin` - whether the user should be an admin
- `-y`, `--assume-yes`/`--no-assume-yes` - whether to assume yes to all questions

## List local users

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user list
    ```

=== "From Source"

    ```sh
    mix pleroma.user list
    ```


## Generate an invite link

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user invite [option ...]
    ```

=== "From Source"

    ```sh
    mix pleroma.user invite [option ...]
    ```


### Options
- `--expires-at DATE` - last day on which token is active (e.g. "2019-04-05")
- `--max-use NUMBER` - maximum numbers of token uses

## List generated invites

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user invites
    ```

=== "From Source"

    ```sh
    mix pleroma.user invites
    ```


## Revoke invite

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user revoke_invite <token>
    ```

=== "From Source"

    ```sh
    mix pleroma.user revoke_invite <token>
    ```


## Delete a user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user rm <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user rm <nickname>
    ```


## Delete user's posts and interactions

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user delete_activities <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user delete_activities <nickname>
    ```


## Sign user out from all applications (delete user's OAuth tokens and authorizations)

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user sign_out <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user sign_out <nickname>
    ```


## Deactivate or activate a user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user toggle_activated <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user toggle_activated <nickname>
    ```


## Deactivate a user and unsubscribes local users from the user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user deactivate NICKNAME
    ```

=== "From Source"

    ```sh
    mix pleroma.user deactivate NICKNAME
    ```


## Deactivate all accounts from an instance and unsubscribe local users on it

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user deactivate_all_from_instance <instance>
    ```

=== "From Source"

    ```sh
    mix pleroma.user deactivate_all_from_instance <instance>
    ```


## Create a password reset link for user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user reset_password <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user reset_password <nickname>
    ```


## Disable Multi Factor Authentication (MFA/2FA) for a user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user reset_mfa <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user reset_mfa <nickname>
    ```


## Set the value of the given user's settings

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user set <nickname> [option ...]
    ```

=== "From Source"

    ```sh
    mix pleroma.user set <nickname> [option ...]
    ```

### Options
- `--locked`/`--no-locked` - whether the user should be locked
- `--moderator`/`--no-moderator` - whether the user should be a moderator
- `--admin`/`--no-admin` - whether the user should be an admin

## Add tags to a user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user tag <nickname> <tags>
    ```

=== "From Source"

    ```sh
    mix pleroma.user tag <nickname> <tags>
    ```


## Delete tags from a user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user untag <nickname> <tags>
    ```

=== "From Source"

    ```sh
    mix pleroma.user untag <nickname> <tags>
    ```


## Toggle confirmation status of the user

=== "OTP"

    ```sh
     ./bin/pleroma_ctl user toggle_confirmed <nickname>
    ```

=== "From Source"

    ```sh
    mix pleroma.user toggle_confirmed <nickname>
    ```