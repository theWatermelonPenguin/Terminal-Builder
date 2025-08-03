# The Commands Block

## Quick Facts

- The Commands block defines all user-typed commands and their corresponding responses.
- Commands are listed as an array of objects with prompt-response pairs.

## What is it?

This block lets you specify what users can type (`prompt`) and what the terminal should reply with (`response`).

## How to use it

Add each command as an object with a `prompt` string and the matching `response` string.

## Properties

| Property | Type | Description | Required |
| --- | --- | --- | --- |
| `prompt` | string | The command text the user types | Yes |
| `response` | string | The terminal’s response to the prompt | Yes |

## Example
```yaml
commands:
  - prompt: "hello"
    response: "hi there!"
  - prompt: "whoami"
    response: "you are a guest user"
  - prompt: "whereami"
    response: "you are here"
  - prompt: "what is this"
    response: "this is terminal builder"
```