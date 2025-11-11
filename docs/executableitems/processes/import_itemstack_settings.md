---
sidebar_position: 1
---

# Import ItemStack Settings to EI

This page is all about what happens in the plugin when you hold an item with unique 
features and run `/ei create`

<hr/>

First, visit `com.ssomar.executableitems.commands.CommandsClass` and in `runCommand()`, find the switch case statement
then the case `"create"` to find the relevant code for `/ei create`

Then get the itemstack from the player's item in hand to run `ItemStackToExecutableItemConverter.convert()`

Go to `com.ssomar.executableitems.executableitems.ItemStackToExecutableItemConverter` and read the code of the `convert()` method.

For this part of the convert method,
```java
for(FeatureInterface feature : result.getFeatures()) {
    if(feature instanceof FeatureForItem){
        FeatureForItem featureForItem = (FeatureForItem) feature;
        featureForItem.loadFromItemMeta(FeatureForItemArgs.create(meta, material));
    }
}
```
If you visit the `getFeatures()` method's origin, you'd be sent to `com.ssomar.executableitems.executableitems.ExecutableItem`
and as you scroll down, you'd see the `Features` instance variables. With that, you'd be able to view what unique item details
are currently supported for import.