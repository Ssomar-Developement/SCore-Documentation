---
sidebar_position: 1
---

# Intro

What is this section for?

Registered Events that are meant to do certain things. (For those who are not following, just think of it as extra things that are made simiarly to how you followed your first minecraft plugin tutorial about events)

So if you're looking for what events are being utilized aside from EB activators, this is the place.

Related Package: `com.ssomar.executableblocks.events.mechanics`

Class: `com.ssomar.executableblocks.events.EventsHandler.java`

```java
package com.ssomar.executableblocks.events;

import com.ssomar.executableblocks.ExecutableBlocks;
import com.ssomar.executableblocks.editor.EditorInteractionsListener;
import com.ssomar.executableblocks.events.mechanics.*;
import com.ssomar.executableblocks.events.mechanics.liquid.LiquidListener;
import com.ssomar.executableblocks.events.mechanics.pistons.EBPMovesListener;
import com.ssomar.score.SCore;


public class EventsHandler {

    private static EventsHandler instance;

    private ExecutableBlocks main;

    public void setup(ExecutableBlocks main) {
        this.main = main;
        setupEvents();
    }

    public void setupEvents() {
        if(SCore.hasBentoBox) main.getServer().getPluginManager().registerEvents(new BentoBoxLoadingListener(), main);


        main.getServer().getPluginManager().registerEvents(new EditorInteractionsListener(), main);

        main.getServer().getPluginManager().registerEvents(new VersionEvt(), main);

        main.getServer().getPluginManager().registerEvents(new MechanicBlockModificationEvent(), main);

        main.getServer().getPluginManager().registerEvents(new LiquidListener(), main);

        main.getServer().getPluginManager().registerEvents(new BreakExecutableBlockListener(), main);
        if(SCore.is1v18Plus())
            main.getServer().getPluginManager().registerEvents(new BreakTNTExecutableBlockListener(), main);

        main.getServer().getPluginManager().registerEvents(new CancelGravityListener(), main);

        main.getServer().getPluginManager().registerEvents(new BlockBelowEBBreakEvent(), main);

        main.getServer().getPluginManager().registerEvents(new EBPBurnsListerner(), main);

        main.getServer().getPluginManager().registerEvents(new EBPWaterListerner(), main);

        main.getServer().getPluginManager().registerEvents(new PlaceBlockAgainstDisplays(), main);

        main.getServer().getPluginManager().registerEvents(new EBPExplodesListener(), main);

        main.getServer().getPluginManager().registerEvents(new EBPMovesListener(), main);

        main.getServer().getPluginManager().registerEvents(new EBPNoMergeWithVanillaBlocksListener(), main);

        main.getServer().getPluginManager().registerEvents(new PlaceEBPListener(), main);

        main.getServer().getPluginManager().registerEvents(new BlockFadeListener(), main);

        main.getServer().getPluginManager().registerEvents(new ContainerListener(), main);

        //main.getServer().getPluginManager().registerEvents(new ChunkLoadForUpdateTitleListener(), main);

        if(SCore.isSpigot() && SCore.is1v17Plus()) {
            // FOR SPIGOT USER + 1.17 and + because the method setCookSpeedMultiplier​(double multiplier) is not available in spigot
        	main.getServer().getPluginManager().registerEvents(new FurnaceListener(), main);
        }

        main.getServer().getPluginManager().registerEvents(new FurnaceFortuneListener(), main);

        if(SCore.is1v17Plus()){
            main.getServer().getPluginManager().registerEvents(new BrewingStandListener(), main);
        }

        main.getServer().getPluginManager().registerEvents(new DisplayHitBox(), main);

        if (SCore.hasItemsAdder)
            main.getServer().getPluginManager().registerEvents(new ItemsAdderEvents(), main);

        if (SCore.hasOraxen)
            main.getServer().getPluginManager().registerEvents(new OraxenEvents(), main);
    }

    public static EventsHandler getInstance() {
        if (instance == null) instance = new EventsHandler();
        return instance;
    }
}
```