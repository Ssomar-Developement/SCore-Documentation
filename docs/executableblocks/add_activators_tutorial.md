---
sidebar_position: 3
---

# Add New Activators
 How to add activators?
## Go to com.ssomar.executableblocks.executableblocks.activators
## Add an enum value at Option enum
  - Ex: 
```java

	PLAYER_SNEAK_ON ("PLAYER_SNEAK_ON"),
	PLAYER_FALL_ON ("PLAYER_FALL_ON"),
	PLAYER_BRUSH_BLOCK("PLAYER_BRUSH_BLOCK")
```

## Now add the enum value to a list
  - If the activator is going to be locked for premium, add the enum at getPremiumOptionSt()
  - Else, add the activator to getOptWithPlayer() or getOptWithTargetBlock()
    - Ex: 
    ```java
    
	public static List<SOption> getOptWithPlayer() {
		List<SOption> result = new ArrayList<>();
		result.add(PLAYER_JUMP_ON);
		result.add(PLAYER_WALK_ON);
		result.add(PLAYER_RIGHT_CLICK_ON);
		result.add(PLAYER_LEFT_CLICK_ON);
		result.add(PLAYER_ALL_CLICK_ON);
		result.add(PLAYER_BREAK);
		result.add(PLAYER_BREAK_BLOCK_ABOVE_THE_EB);
		result.add(PLAYER_BREAK_BLOCK_UNDER_THE_EB);
		result.add(PLAYER_DEATH_ON);
		result.add(PLAYER_EAT_ON);
		result.add(PLAYER_SNEAK_ON);
		result.add(PLAYER_FALL_ON);
		result.add(PLAYER_SPRINT_ON);
		result.add(PROJECTILE_HIT);
		result.add(PLAYER_PRESS_PLATE);
		result.add(PLAYER_PLACE);
		result.add(PLAYER_SCROLL_DOWN_BY_TARGETING_THE_EB);
		result.add(PLAYER_SCROLL_UP_BY_TARGETING_THE_EB);

		return result;
	}
    ```
## Go to the package com.ssomar.executableblocks.events.activators package
![](/img/com.ssomar.executableblocks.events.activators.PNG)


## Create the class file for the custom activator you're trying to make

What matters is the @EventHandler method involved since you're just going to add the activator to the `OptimizedEventsHandler.java` class

<details>
<summary>PlayerBrushBlock.java</summary>

```java
package com.ssomar.executableblocks.events.activators;

import com.ssomar.executableblocks.events.EventsManager;
import com.ssomar.executableblocks.executableblocks.activators.Option;
import com.ssomar.executableblocks.executableblocks.placedblocks.ExecutableBlocksPlacedManager;
import com.ssomar.executableblocks.executableblocks.placedblocks.LocationConverter;
import com.ssomar.score.SCore;
import com.ssomar.score.api.executableblocks.config.placed.ExecutableBlockPlacedInterface;
import com.ssomar.score.sobject.sactivator.EventInfo;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.block.Block;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.BlockDropItemEvent;

import java.util.Optional;

public class PlayerBrushBlock implements Listener {

    @EventHandler
    public void playerBlockDropItemEvent(BlockDropItemEvent e) {

        Block block = e.getBlock();
        Material m = block.getType();

        if (!m.toString().contains("SUSPICIOUS")) return;
        SCore.plugin.getLogger().info("brush trigger");

        Location bLoc = LocationConverter.convert(block.getLocation(), false, false);
        Optional<ExecutableBlockPlacedInterface> eBPOpt = ExecutableBlocksPlacedManager.getInstance().getExecutableBlockPlaced(bLoc);
        ExecutableBlockPlacedInterface eBP = eBPOpt.get();

        EventInfo eInfo = new EventInfo(e);
        eInfo.setPlayer(Optional.of(e.getPlayer()));
        eInfo.setTargetBlock(Optional.of(e.getBlock()));
        eInfo.setOldMaterialTargetBlock(Optional.of(e.getBlock().getType()));
        if (!SCore.is1v12Less()) eInfo.setOldStatesTargetBlock(Optional.of(e.getBlock().getBlockData().getAsString(true)));
        eInfo.setOption(Option.PLAYER_BRUSH_BLOCK);
        EventsManager.getInstance().activeOption(eBP, eInfo);
    }

}

```

</details>

## Go to com.ssomar.executableblocks.events.optimize.OptimizedEventsHandler.java



## Go to the read() method and add a case choice

Example:
```java

                case BREAK_BLOCK_ABOVE_THE_EB:
                    mainListerner = new BreakBlockAboveTheEBListener();
                    break;
                case PLAYER_BRUSH_BLOCK:
                    mainListerner = new PlayerBrushBlock();
                    break;
                case CROP_GROW:
                    mainListerner = new CropGrowListener();
                    break;
```

That's all! Just rebuild the jar, test it and it should appear in the activator list nice and working