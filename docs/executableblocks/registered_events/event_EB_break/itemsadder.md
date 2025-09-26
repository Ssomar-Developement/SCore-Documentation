---
sidebar_position: 1
---

# ItemsAdderEvents

Class File: `com.ssomar.executableblocks.events.mechanics.ItemsAdderEvents.java`

## onEntityDamageByEntityEvent(EntityDamageByEntityEvent e)
WIP

## onPlayerInteractEntityEvent(PlayerInteractAtEntityEvent e)
:::info
This is the event that gets triggered when breaking an ItemsAdder furniture. For blocks, find methods that uses `BlockBreakEvent`
:::
`@EventHandler(priority = EventPriority.NORMAL, ignoreCancelled = true)`

### Get Entity details

### IF target entity is not ArmorStand or damager is not Player, return;

### Get Player, Block and Location data

### Get Optional Placed ExecutableBlock

#### If placed ExecutableBlock is not present, return;

### Finally, get the details of ExecutableBlockPlaced and ExecutableBlock data

#### If the damager of the EB-ItemsAdder doesn't have permission, cancel the event and return

### If ExecutableItems is installed and the EB-ItemsAdder has entries in onlyBreakableWithEI:

#### Check if the item in hand is AIR, start checking the item in offhand instead

#### If the item in the checked hand is still AIR or the held item is not in the list of ei that can be used to break the EB-ItemsAdder block, cancel the event and return;

### If the damaged EB-ItemsAdder really is not from ItemsAdder or ExecutableItems, return;
:::info
The reason why ExecutableItems is here is because there is an edge case where someone will hold an ItemsAdder furniture and run `/ei create` then create an ExecutableBlock by importing from ExecutableItems, which causes the plugin to have some lapse in judgement.
:::

### Get Information about PLAYER_LEFT_CLICK_ON event

#### If the event is cancelled, return

### Get Information about PLAYER_ALL_CLICK_ON event

#### If the event is cancelled, return

:::warning
EventInfo class lacks documentation, so no detailed explanation could be provided for now
:::

### Run eBP.remove() to remove this specific ExecutableBlock from the records.
- You can check the remove() method of ExecutableBlockPlaced and removeExecutableBlockPlaced() method of ExecutableBlocksPlacedManager for detailed information but the summary is that it unregisters the ExecutableBlock from that specific x,y,z,world location