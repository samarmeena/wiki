---
id: SetSVarFloat
title: SetSVarFloat
description: Set a float server variable.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!

:::

## Description

Set a float server variable.

| Name        | Description                      |
| ----------- | -------------------------------- |
| varname[]   | The name of the server variable. |
| float_value | The float to be set.             |

## Returns

1: The function executed successfully.

0: The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarFloat("Version", 0.37);
// will print version that server has
printf("Version: %f", GetSVarFloat("Version"));
```

## Related Functions

- [SetSVarInt](SetSVarInt): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [SetSVarString](SetSVarString): Set a string for a server variable.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar): Delete a server variable.
