# The Input Block

## Quick Facts

- The Input block configures how user input is handled in Terminal Builder.
- It controls command prompt appearance, error messages, and input placeholders.

## What is it?

The Input block sets parameters for how users enter commands and how the terminal responds to unrecognized commands.

## How to use it

Customize the prompt prefix, placeholder text, and message shown when an unknown command is entered.

## Properties

| Property | Type | Description | Required |
| --- | --- | --- | --- |
| `prefix` | string | The prompt prefix shown before user input (e.g., `$` or `>`) | No |
| `unknownCommandMessage` | string | Message displayed when an unrecognized command is entered | No |
| `placeholder` | string | Placeholder text displayed inside the input field before typing | No |


## Example

```json
{
    "input": {
        "prefix": "$",
        "unknownCommandMessage": "Huh? Command not recognized!",
        "placeholder": "Type your command here..."
    }
}
```