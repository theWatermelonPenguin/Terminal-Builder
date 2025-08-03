# The Shared Block

## Quick Facts

- The Shared block is **optional** but recommended for defining properties common to all output modes.
- It appears as a top-level block in the `terminal.yml` file alongside `web`, `window`, and `console`.
- Properties defined in the Shared block act as defaults and are inherited by all output modes unless overridden.

## What is it?

The Shared block holds configuration settings shared across all output modes (web, window, console). It helps avoid repetition and centralizes common settings like themes or titles.

## How to use it

Add a `shared` block at the top level of your `terminal.yml` file to specify common properties. These properties will be used by all output modes unless explicitly overridden in those mode blocks.

## Properties

| Property | Type | Description | Required |
| --- | --- | --- | --- |
| `title` | string | Default title shown on all output modes | No |
| `theme` | string | Default color theme for all terminal UIs | No (defaults to `"green"`) |


## Behavior

- If a property exists in both `shared` and a specific output mode (e.g., `web`), the output mode's property takes precedence.
- If a property is missing in the output mode, the Shared block’s property will be used as a fallback.

## Example
```yaml
shared:
  title: "Shared Terminal Title"
  theme: "blue"

web:
  title: "Web Terminal"   # Overrides shared title

window:
  # Inherits title "Shared Terminal Title" and theme "blue"
```