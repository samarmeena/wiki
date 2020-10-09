---
id: IsObjectMoving
title: IsObjectMoving
description: Checks if the given objectid is moving.
tags: []
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## Description

Checks if the given objectid is moving.

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| objectid | The objectid you want to check if is moving. |

## Returns

1 if the object is moving, 0 if not.

## Examples

```c
if (IsObjectMoving(objectid))
{
	StopObject(objectid);
}
```

## Related Functions

- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [OnObjectMoved](../callbacks/OnObjectMoved): Called when an object stops moving.
