# Debug Codes

This page is for listing details of a debug message and where to find them via `SHIFT+CTRL+F`

(The ID represents the chronological order in which each debug message was written (e.g., 0001, 0002, 0003, …).)

If you're curious to why this page exists, its to easily go to the place of the SsomarDev.testMsg() method calls and Ssomar wrote it in away where it's difficult to find :/

:::info
Debug codes are written like this:

Example: `#c0012`

- `#` : The starting character. This will greatly narrow down words when using ctrl+shift+f
- `<symbol>` : Indicates what plugin is this from.
    - `s` : SCore
    - `i` : ExecutableItems
    - `b` : ExecutableBlocks
    - `e` : ExecutableEvents
    - `m` : MyFurniture
    - `c` : ExecutableCrafting
- `<number>` : Will be written in 4-character length. The number signifies the chronological order of when it was written down. Nothing complicated other than assigning unique ids.

When possible, please color regular method call debug message in gold to track if the method is actually being called.
:::

:::caution
If you have plans to change any of the entries here, perform due care in updating it both
in the source code and documentation.
:::

## SCore
`#s0001` - PlantInSquare.java => run() => On Comment "//#2" : About how PLANT_IN_SQUARE is used on an unsupported block<br/>
`#s0002` - PlantInSquare.java => run() => Lists down the resources to be used to plant the crops<br/>
`#s0003` - ItemsAdderAPI.java => breakCustomBlock() is triggered in general<br/>
`#s0004` - ItemsAdderAPI.java => breakCustomBlock() => If IA is installed && block isn't empty<br/>
`#s0005` - ItemsAdderAPI.java => breakCustomBlock() => If custom block is not null<br/>
`#s0006` - ItemsAdderAPI.java => breakCustomBlock() => If custom block is instance of ArmorStand<br/>
`#s0007` - ItemsAdderAPI.java => breakCustomBlock() => If the armorstand has a name and is named "ItemsAdder_furniture"<br/>
`#s0008` - ItemsAdderAPI.java => breakCustomBlock() => Said ArmorStand has no name<br/>
`#s0009` - ItemsAdderAPI.java => breakCustomBlock() => Said ArmorStand has a different name other than "ItemsAdder_furniture"<br/>
`#s0010` - SafeBreak.java => breakBlockWithEvent() is triggered in general<br/>
`#s0011` - SafeBreak.java => breakBlockWithEvent() => player is not null<br/>
`#s0012` - SafeBreak.java => breakBlockWithEvent() => Player instance is obtained just fine<br/>
`#s0013` - SafeBreak.java => breakBlockWithEvent() => Player is null<br/>


## ExecutableBlocks
`#b0001` - PlaceEBPListener.java => onBlockPlaceEvent() => If the ExecutableBlock's Creation Type is either ExecutableItems or ItemsAdder when right-clicking a block (in attempts to place it) <br/>
`#b0002` - ItemsAdderEvents.java => onPlayerInteractEntityEvent() is triggered in general   <br/>
`#b0003` - ItemsAdderEvents.java => onPlayerInteractEntityEvent() is triggered with offhand <br/>
`#b0004` - PlaceEBPListener.java => onBlockPlaceEvent() is triggered in general <br/>
`#b0005` - PlaceEBPListener.java => onBlockPlaceEvent() after b.getType().isAir() condition<br/>
`#b0006` - PlaceEBPListener.java => continueToPlace() is triggered in general<br/>
`#b0007` - PlaceEBPListener.java => continueToPlace() after whitelist checks<br/>
`#b0008` - PlaceEBPListener.java => continueToPlace() after `!plr.canPlaceMoreBlocks` checks<br/>
`#b0009` - PlaceEBPListener.java => continueToPlace() after `!eBP.isPresent()` checks<br/>
`#b0010` - PlaceEBPListener.java => continueToPlace() after `e.isCancelled()` checks<br/>
`#b0011` - BreakExecutableBlockListener.java => onBlockBreakEventOraxenOrItemsAdder() if `e.isCancelled()` is confirmed <br/>
`#b0012` - PlaceEBPListener.java => onBlockPlaceEvent() is triggered in general<br/>
`#b0013` - PlaceEBPListener.java => onBlockPlaceEvent() after the non-right-click checks<br/>
`#b0014` - ItemsAdderEvents.java => onEntityDamageByEntityEvent() after breaking an IA based EB Block<br/>
`#b0015` - ItemsAdderEvents.java => onEntityDamageByEntityEvent() after failing eB.getItemsAdderFeatures().getValue().isPresent() condition<br/>
`#b0016` - ExecutableBlockPlaced.java => breakBlock() is triggered in general<br/>
`#b0017` - ExecutableBlockPlaced.java => breakBlock() is triggered in general<br/>

