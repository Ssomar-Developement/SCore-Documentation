# Adding New Activators

Reference Commit: https://github.com/Ssomar-Developement/ExecutableItems/commit/a553158691d45ba3d9c25cf65174d8f65d151f14

## Go to Option.java and add the enum for your activator

```java
    PLAYER_EMPTY_BUCKET("PLAYER_EMPTY_BUCKET"),
```

## Create a class for your activator 

Package: `com.ssomar.executableitems.listeners.player.custom`  
(Can be elsewhere as long as its in the listeners package. But try to look at where the other classes are located at and why it's there)

Sample Code:
```java
package com.ssomar.executableitems.listeners.player.custom;

import com.ssomar.executableitems.executableitems.activators.Option;
import com.ssomar.executableitems.listeners.EventsManager;
import com.ssomar.score.SCore;
import com.ssomar.score.sobject.sactivator.EventInfo;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerBucketEmptyEvent;
import org.bukkit.inventory.ItemStack;

import java.util.Optional;

public class PlayerEmptyBucket implements Listener {
    @EventHandler
    public void playerEmptyBucket(PlayerBucketEmptyEvent e) {
        ItemStack bucket;
        if (SCore.is1v20Plus())
            bucket = e.getItemStack();
        else
            bucket = e.getPlayer().getInventory().getItem(e.getHand());

        EventInfo eInfo = new EventInfo(e);
        eInfo.setPlayer(Optional.of(e.getPlayer()));
        eInfo.setOption(Option.PLAYER_EMPTY_BUCKET);
        eInfo.setItem(Optional.of(bucket));
        EventsManager.getInstance().activeOption(eInfo);

    }
}
```

## Create a switch case for your new activator

Class: `com.ssomar.executableitems.listeners.optimize.OptimizedEventsHandler`

```java
public void read(SOption option) {
    ....
        case PLAYER_EMPTY_BUCKET:
            mainListerner = new PlayerEmptyBucket();
            break;
```

## (Optional) How to make an activator support block/entity/item commands and etc?

Go to `com.ssomar.executableitems.executableitems.activators.Option` and search for these methods:
These methods contain a List variable. Observe how the other methods are written to figure out
how to give your activators these options.

`#getOptionWithDetailedDamageCauses` - for detailed damage causes
`#getOptionWithCommand` - for detailed commands
`#getOptionWithDrops` - for "Remove Drops" option
`#getOptionWithDetailedClick` - for detailed click option 
`#getOptionWithDetailedInput` - for detailed input
`#getOptionWithDetailedEffects` - for detailed effects
`#getOptionWithoutDetailedSlots` - for detailed slots
`#getOptionWithOnlyTypeClick` - for click type
`#getOptionResultOfProjectile` - for `mustBeAProjectileLaunchWithTheSameEI`
`#getOptionWithTargetBlockSt` - for block conditions & detailed blocks & entity commands
:::info
You need these present in your activator's event call if you wish to make your activator support blocks.
Example:
```java
        eInfo.setTargetBlock(Optional.of(e.getBlock()));
        eInfo.setOldMaterialBlock(Optional.of(e.getBlock().getType()));
```
`#getOptionWithTargetItemSt` - for detailed items & item commands
`#getOptionWithTargetEntitySt` - for entity conditions & detailed entities & entity commands 
`#getOptionWithTargetPlayerSt` - for target conditions & target commands


