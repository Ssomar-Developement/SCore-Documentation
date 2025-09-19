---
sidebar_position: 1
---

# MINEINCUBE

## Obtain command arguments for later use
- As of writing in September 8, 2025, these are the arguments based on the wiki:
```
Command: MINEINCUBE {radius} {drop} [generate BlockBreakEvent] {offset default false}

{radius}: Radius of how big the area of the crops you want to break (LIMIT IS 9)

{drop}: Whether the block drops loot or not

[create blockBreakEvent]: if the plugin will generate a blockBreakEvent for each broken block by the MINEINCUBE (default true)

{offset default false}: If the area of block starts to break from the block broken, or from the "center" to make the area really works the "radius" selected.
```

## Obtain ActionInfo details for later use

## Create a Runnable instance to delay code execution by 1 tick
Reason for implementation and delaying code by 1 tick is stated in source code:
```java
/**
     * THIS COMMAND MUST BE DELAYED OF AT LEAST 1 TICK
     * WHY ?
     * TO LET ALL ACTIVATORS OF THE ITEMS BE RUNNED CORRECLTY FIRST
     * BECAUSE THIS COMMAND CAN GENERATE ANOTHER EVENT SO IT CAN CREATE THIS SITUATION
     * X ( activator where this command is )
     * Y ( the new event generates by this command)
     * Y
     * Y
     * X
     * X
     * <p>
     * This situation is bad for the variables edition, example with the same situation and with a increment of the variable by one
     * X 1
     * Y 2
     * Y 3
     * Y 4
     * X 2
     * X 3
     * <p>
     * The delay help us to fix that and let us have:
     * X 1
     * X 2
     * X 3
     * Y 4
     * Y 5
     * Y 6
     **/
```

### If MINEINCUBE is caused by another MINEINCUBE, return
- If this is not stopped, your server may crash due to an explosive recursion
of block break event calls.

### Surround the rest of the logic with a try catch block
:::info
As of this writing, it is not directly stated why a try catch is required.
:::

### 📝 Note down argument values
- They will be used later



