---
sidebar_position: 3
---

# When Broken

:::note
When you import via ItemsAdder and you get confused to why nothing is dropping,
it's not due to Executable Plugins' code, it's just how it was written in the config of that ItemsAdder item
:::

Class Name: `com.ssomar.executableblocks.executableblocks.placedblocks.ExecutableBlockPlaced`

Method: `public void breakBlock(@Nullable Player player, boolean drop, @Nullable Event sourceEvent, BreakMethod breakMethod)`

This method is usually called to properly remove "actual" blocks of ExecutableBlocks. Other creations such as ItemsAdder, MyFurniture and etc are handled differently.

## If the object itself is null, return

## If the player isn't null and doesn't have the permission, return

## Record block location

## Call the event
:::warning
ExecutableBlockBreakEvent lacks documentation
:::

## If the event is cancelled, return

............