---
sidebar_position: 4
---

# EB Front Editor

Class: `com.ssomar.executableblocks.executableblocks.editor.ExecutableBlockEditor`  
Method: `load()`

## Go to SCore's source code

### Add an enum at `FeatureSettingsSCore`
Class: `com.ssomar.score.features.FeatureSettingsSCore`
Example:
```java
itemAdvancedComponents(getFeatureSettings("itemAdvancedComponents")),
ifGameMode(getFeatureSettings("ifGameMode", SavingVerbosityLevel.SAVE_ONLY_WHEN_DIFFERENT_DEFAULT)),
suspiciousBlockLoot(getFeatureSettings("suspiciousBlockLoot"))
```

### Then add an enum like this:
Enum File: `com.ssomar.score.features.lang.FeatureSettingsSCoreEN`
Example:
```java
    ifNotEntityInRegion("ifNotEntityInRegion", "If entity is not in region", new String[]{}, Material.ANVIL),
    suspiciousBlockLoot("suspiciousBlockLoot", "Suspicious Block Loot", new String[]{"&7The loot the ExecutableBlock will have","when brushed."}, Material.BRUSH)
```

### Compile the SCore jar
- Just in case you forget, run `mvn clean package install`

## Then go to ExecutableBlocks and paste the newly made jar to the resources folder
- As of this writing, just rename the newly made jar as `Score.jar` for less complications

## Then go to ExecutableBlocks project and go to `com.ssomar.executableblocks.executableblocks.editor.ExecutableBlockEditor`

### In the `load()` method, add the new feature like this: 
Example:
```java

        if (creationType.equals(CreationType.BASIC_CREATION)) {
            newExecutableBlock.getSuspiciousBlockLoot().initAndUpdateItemParentEditor(this, 18);
        }

        newExecutableBlock.getActivators().initAndUpdateItemParentEditor(this, 26);

        newExecutableBlock.getOnlyBreakableWithEI().initAndUpdateItemParentEditor(this, 20);
        newExecutableBlock.getDropBlockIfItIsBroken().initAndUpdateItemParentEditor(this, 21);
```

## Then go to `com.ssomar.executableblocks.executableblocks.ExecutableBlocks` and go to reset() and add your feature
Example:
```java
        this.directionalFeatures = new DirectionalFeatures(this);
        this.chiseledBookshelfFeatures = new ChiseledBookshelfFeatures(this);
        this.suspiciousBlockLoot = new MaterialFeature(this, Optional.of(Material.STONE), FeatureSettingsSCore.suspiciousBlockLoot);
```
:::info
Congratulations! You have now implemented an option to ExecutableBlocks Front Page GUI!  
If you want to utilize the value of the option in the ExecutableBlocks editor, here's an example:
`nEBO.getConfig().getSuspiciousBlockLoot().getValue()`

On practice:
```java
Optional<ExecutableBlockPlaced> eBP = nEBO.createExecutableBlockPlaced(b.getLocation(), false, OverrideMode.KEEP_EXISTING, p, null, new InternalData().setOwnerUUID(p.getUniqueId()));
Optional<Material> suspiciousBlockLoot = nEBO.getConfig().getSuspiciousBlockLoot().getValue();
    // suspicious sand/gravel got added in minecraft 1.20
    if((b.getType() == Material.SUSPICIOUS_SAND || b.getType() == Material.SUSPICIOUS_GRAVEL) && SCore.is1v20Plus() && nEBO.getConfig().getSuspiciousBlockLoot().getValue().isPresent()) {
        BrushableBlock brushable = (BrushableBlock) b.getState();
        Material material = suspiciousBlockLoot.get();
        ItemStack item = new ItemStack(material, 1);

        brushable.setItem(item);   // set the hidden item
        brushable.update(true, false); // save changes to the world
    }
```
:::