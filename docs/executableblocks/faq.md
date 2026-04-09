---
sidebar_position: 1
---

# FAQ

:::info
## Q: How to remove placed ExecutableBlocks via code?
Class File: `com.ssomar.score.utils.safebreak.SafeBreak`
Method: `public static boolean breakEB(@Nullable Player player, Block block, boolean drop)`

Method code as of writing:
```java
public static boolean breakEB(@Nullable Player player, Block block, boolean drop) {
    //SsomarDev.testMsg("DEBUG SAFE BREAK 10", DEBUG);

    if (SCore.hasExecutableBlocks) {
        // SsomarDev.testMsg("DEBUG SAFE BREAK has EB", DEBUG);
        Optional<ExecutableBlockPlacedInterface> eBPOpt = ExecutableBlocksAPI.getExecutableBlocksPlacedManager().getExecutableBlockPlaced(block);
        if (eBPOpt.isPresent()) {
            ExecutableBlockPlaced eBP = (ExecutableBlockPlaced) eBPOpt.get();
            //SsomarDev.testMsg("DEBUG SAFE BREAK has EB 2", DEBUG);
            eBP.breakBlock(player, drop, null, ExecutableBlockPlaced.BreakMethod.CUSTOM);
            return true;
        }
    }
    return false;
}
```

How to use?  
Example:
```java
breakEB(null, block, false);
```
:::
## &nbsp;<hr/>&nbsp;

:::info
## Q: Where to find the code that's responsible for dropping blocks?

### A: Go to `com.ssomar.executableblocks.executableblocks.placedblocks.ExecutableBlockPlaced#dropBlock`
:::

## &nbsp;<hr/>&nbsp;

:::info 
## Q: How to access the config details of an ExecutableBlock instance?

### A: (Explanation)

#### For ExecutableBlockObject
```java
// Step 1: Create an ExecutableBlockObject instance
ItemStack is = e.getPlayer().getInventory().getItem(e.getHand()).clone();
ExecutableBlockObject nEBO = new ExecutableBlockObject(is);

// Step 2: Access config details via getConfig()
Optional<Material> suspiciousBlockLoot = nEBO.getConfig().getSuspiciousBlockLoot().getValue();

```

#### For ExecutableBlock
```java
// Replace args[0] with a string that references a valid EB ID
ExecutableBlock executableBlock;
Optional<ExecutableBlock> oOpt = ExecutableBlocksManager.getInstance().getLoadedObjectWithID(args[0]);
if (!oOpt.isPresent()) {
    getSm().sendMessage(player, "&c" + ExecutableBlocks.plugin.getNameWithBrackets() + " &cInvalid block id: &6" + args[0] + " &7&o/eb place {EB_ID} {x} {y} {z} {world}");
    return;
} else executableBlock = oOpt.get();
```
Reference: `com.ssomar.executableblocks.commands.CommandsClass#runCommand`


:::
