---
sidebar_position: 1
---

# Event Handlings

Refer to `vayk.executablecrafting.events.FurnaceListener`

## getSupposedOwnerOf(Block block)
- WIP

## onBurnEvent(FurnaceBurnEvent event) 
- WIP

## onFurnaceSmelt(FurnaceSmeltEvent event)

:::info
To understand it better, check the function's argument properties

FurnaceSmeltEvent extends BlockCookEvent
```
Called when an ItemStack is successfully smelted in a furnace-like block such as a 
org.bukkit.block.Furnace, org.bukkit.block.Smoker, or org.bukkit.block.BlastFurnace.
```
:::

## onFurnaceSmelt(FurnaceStartSmeltEvent event)

:::info
To understand it better, check the function's argument properties

FurnaceStartSmeltEvent extends InventoryBlockStartEvent
```
Called when any of the furnace-like blocks start smelting.
Furnace-like blocks are org.bukkit.block.Furnace, org.bukkit.block.Smoker,
and org.bukkit.block.BlastFurnace.
```
:::