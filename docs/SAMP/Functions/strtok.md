---
id: strtok
title: strtok
description: This (strtok) is used to search a string and find a variable typed after a " " (space), then return it as a string.
tags: []
---

:::warning

This function starts with lowercase letter.

This function is deprecated and use of it should be avoided where possible.
Better alternatives like sscanf are available for you to use.

:::

## Description

This (strtok) is used to search a string and find a variable typed after a " " (space), then return it as a string.

| Name                    | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| string[]                | -                                                                         |
| &index                  | -                                                                         |

## Returns

return result string

## Examples

```c
strtok(const string[], &index)
{
	new length = strlen(string);
	while ((index < length) && (string[index] <= ' '))
	{
		index++;
	}
 
	new offset = index;
	new result[20];
	while ((index < length) && (string[index] > ' ') && ((index - offset) < (sizeof(result) - 1)))
	{
		result[index - offset] = string[index];
		index++;
	}
	result[index - offset] = EOS;
	return result;
}
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strtok](strtok): Get the next 'token' (word/parameter) in a string.
- [strins](strins): Insert text into a string.
- [strlen](strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strval](strval): Convert a string into an integer.
- [strcat](strcat): Concatenate two strings into a destination reference.
- [strdel](strdel): Delete part of a string.
