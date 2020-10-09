---
id: GetVehicleRotation
title: GetVehicleRotation
description: Get the rotation of a vehicle on the XYZ axis.
tags: ["vehicle"]
---

:::warning

This function was added in SA-MP 0.3b and will not work in earlier versions!

:::

## Description

Returns a vehicle's rotation on all axes as a quaternion.

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the rotation of.                                        |
| &Float:w  | A float variable in which to store the first quaternion angle, passed by reference.  |
| &Float:x  | A float variable in which to store the second quaternion angle, passed by reference. |
| &Float:y  | A float variable in which to store the third quaternion angle, passed by reference.  |
| &Float:z  | A float variable in which to store the fourth quaternion angle, passed by reference. |

## Returns

This function does not return any specific values.

## Notes

:::tip

- There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the Z angle)
- To use this function you must define it.
- This function works accurately only on occupied vehicles. The reason is that [GetVehicleRotationQuat](GetVehicleRotationQuat) starts returning an invalid quaternion after an unoccupied vehicle's position has been updated by a player.

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [GetVehicleRotation](GetVehicleRotation): Get the rotation of a vehicle on the XYZ axis.
