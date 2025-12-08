---
sidebar_position: 2
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