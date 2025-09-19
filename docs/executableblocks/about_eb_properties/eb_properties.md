---
sidebar_position: 2
---

# EB Properties YML

This is the yml file of an ExecutableBlock file. If you want to add new options,
add them all here.

Class: `com.ssomar.executableblocks.executableblocks.ExecutableBlock.java`  
## For block config:
Method: `public List<FeatureInterface> getFeatures()`

### Make a private instance variable
:::info
To know what options you could use, go to `com.ssomar.score.features.types` of SCore library
:::
Ex:
```java

    private ChiseledBookshelfFeatures chiseledBookshelfFeatures;

    private Hiders hiders;

    private MaterialFeature suspiciousBlockLoot;
```

### Add the new option to the `List<FeatureInterface> features` arraylist
Ex:
```java
features.add(brewingStandFeatures);
features.add(directionalFeatures);
features.add(chiseledBookshelfFeatures);
features.add(suspiciousBlockLoot);
```

### Add the feature to `reload()` and `clone()` like this:
```java
item.setBrewingStandFeatures(brewingStandFeatures);
item.setDirectionalFeatures(directionalFeatures);
item.setChiseledBookshelfFeatures(chiseledBookshelfFeatures);
item.setSuspiciousBlockLoot(suspiciousBlockLoot.clone(item));
```

### Add the feature to `load()` like this:
```java
errors.addAll(brewingStandFeatures.load(sPlugin, configurationSection, b));
errors.addAll(directionalFeatures.load(sPlugin, configurationSection, b));
errors.addAll(chiseledBookshelfFeatures.load(sPlugin, configurationSection, b));
errors.addAll(suspiciousBlockLoot.load(sPlugin, configurationSection, b));
```
:::info
More logic is written in some of the other features so if you have more plans
to this option than usual, please re-read the code of `load()` and update
this documentation accordingly.
:::

