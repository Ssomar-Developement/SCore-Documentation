---
sidebar_position: 1
---

# Placement Checks (onBlockPlaceEvent()) For EB

Class File: `com.ssomar.executableblocks.events.mechanics.PlaceEBPListener.java`

:::info[Method full description: `public void onBlockPlaceEvent(BlockPlaceEvent e)`]
Q: What am I supposed to see here? <br />
A: A series of checks upon placing any block
:::

## Based on BlockPlaceEvent, get Player and Block instance

```java

        Player p = e.getPlayer();
        Block b = e.getBlockPlaced();
```

## If placed block is air
- `if(b.getType().isAir())`
### If `firstPlace` List array contains the placed block's location, return
- ItemAdder generates multiple BlockPlaceEvent, we need to take only the first one
### Else, add `b` Location to the array and remove it after 2 ticks
:::warning
This needs further explanation to why it's like this.
In the current state of the source code, Ssomar wrote no comments :/
:::

## Clone the held item into an ItemStack variable (`is`)
- The held item is the item that got placed
:::info
TODO ItemsAdder doesnt return the offhand item when it simulate the placing of a furniture.
:::
:::info
clone otherwise it can cause dupe when the plugin try to init variables  - and here no need to have the real itemstack
:::

## Create an `ExecutableBlockObject` instance based on the held item's itemstack 
- Yes, when you run `e.getPlayer().getInventory().getItem(e.getHand()).clone()`, it returns the itemstack of the block
you placed that caused the event.
- `n` in the variable refers to `new`

## If the `ExecutableBlockObject` is not valid, return
:::warning
This needs further explanation to why it's valid.
In the current state of the source code, Ssomar wrote no comments :/
:::

## Create a `List<CreationType>` arraylist
:::info
CreationType is an enum that belongs to SCore
mainly contains enums that allow the user to decide how the EB will be made in a way
such as importing from ei, ia or nexo
:::

## If the `.getCreationType()` value is either from ItemsAdder or ExecutableItems

### If the block type of the placed block is air, return
:::warning
This needs further explanation to why it's like this.
In the current state of the source code, Ssomar wrote no comments :/
:::

### Set .setCancelled() to false and place the EB after 2 ticks
- here the event is cancelled , probably by items adder, we need to turn it back to false

## Else, place the EB as normal.