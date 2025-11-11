---
sidebar_position: 2
---

# Building an ItemStack from an EI Item Config

Class: `com.ssomar.executableitems.executableitems.ExecutableItem`  
Method: `public ItemStack buildItem(int quantity, Optional<Player> playerOpt, Optional<Integer> usageOpt, Optional<ItemStack> itemStackOpt, Map<String, String> variables, Map<String, Object> settings)`

Upon reading the code of this method, it answers some specific questions you may have.

:::info
## Q: What code handles the item meta of the ItemStack?  
### A: When creating a new ExecutableItemObject and running the build() method, it will run the refresh() method
```java
ExecutableItemObject ei = new ExecutableItemObject(item, this, ownerUUID, usage);
item = ei.build();
```

Method: `com.ssomar.executableitems.executableitems.ExecutableItemObject#refresh`
```java
@Override
public ItemStack refresh(List<ResetSetting> resetSettings) {
    // Applies the usage settings to the itemstack
    if (resetSettings.contains(ResetSetting.USAGE))
        this.internalData.setUsage(config.getUsageFeatures().getUsage().getValue().get());

    // Sets the item's material type
    if (SCore.is1v20v5Plus() && resetSettings.contains(ResetSetting.MATERIAL)) {
        item.setType(config.getMaterial().getValue().get());
    }

    // Start building the item meta with the values provided by the item config
    // If you're looking for the code that's responsible for example, goat horn instrument, check the refreshMeta() method's code
    DynamicMeta meta = new DynamicMeta(item.getItemMeta());
    this.refreshMeta(meta, resetSettings);

    /* No meta refreshs */
    if (resetSettings.contains(ResetSetting.DURABILITY)) {
        if (SCore.is1v13Less()) this.refreshDurability1v13less();
    }
    this.refreshPotionSettings();
    this.refreshNbtTags();
    //}
    return item;
}
```
If you want to investigate the code that's responsible for inserting item meta
to the ItemStack of the spawned/given ei item, this is the place.