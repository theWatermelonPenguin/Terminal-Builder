# The Output Block

## Quick Facts

- The Output block is **required** for Terminal Builder to run.
- It must be the **first block** in the `terminal.json` file.

## What is it?

The Output block defines where and how your terminal interface appears.

## How to use it

Choose one of the three output modes (as the top-level key):

- `"web"` – outputs in the browser.
- `"window"` – outputs in an Electron window.
- `"console"` – outputs to the system console (e.g., Windows PowerShell).

Only one mode is allowed per configuration file.

## Properties

| Property | Type   | Description                         | Required             |
|----------|--------|-------------------------------------|----------------------|
| `title`  | string | Title shown on the browser/window   | Yes                  |
| `theme`  | string | Color theme for the terminal UI     | No (defaults to `"green"`) |

## Example

```json
{
  "web": {
    "title": "My terminal title",
    "theme": "green"
  }
  // You can also use "window" or "console" as the output key
}
