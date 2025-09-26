---
sidebar_position: 2
---

# Placement Method Call (continueToPlace()) For EB

Class File: `com.ssomar.executableblocks.events.mechanics.PlaceEBPListener.java`

:::info[Method full description: `public void continueToPlace(ExecutableBlockObject nEBO, BlockPlaceEvent e, Player p, Block b)`]

Only used by the `onBlockPlaceEvent()` method
:::



## Create an `ExecutableBlock` object from the `ExecutableBlockObject` method argument

### If config's whitelisted worlds list is not empty and the placed block's world is not in the list, cancel the event and return
- It refers to the `whitelistedWorlds: []` option in ExecutableBlocks's `config.yml`

- Send the string written at `notWhitelistedWorld` of EB's locale file as a message towards the player who placed the block.
- Cancel the event

## Create a `PlayerLimit.PlayerLimitResult` object

### If the player can't place more blocks, cancel the event and return
:::warning
As of this writing, the logic that adds up the placement limit tally isn't
written down yet
:::
- Send the string written at `playerLimit` of EB's locale file as a message towards the player who placed the block.
- Cancel the event

## Create an `Optional<ExecutableBlockPlaced>` object
Code line: `Optional<ExecutableBlockPlaced> eBP = nEBO.createExecutableBlockPlaced(b.getLocation(), false, OverrideMode.KEEP_EXISTING, p, null, new InternalData().setOwnerUUID(p.getUniqueId()));`
:::warning
`.createExecutableBlockPlaced()` lacks documentation. Please add information when possible
:::

### If ExecutableBlockPlaced isn't present, return;

## Note down the event for activator purposes
:::warning
This needs more documentation since the code isn't direct about it at first glance
:::

### If event is cancelled, remove the ExecutableBlock placed and return