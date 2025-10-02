---
sidebar_position: 1
---

# PLANT_IN_SQUARE

Class Name: `com.ssomar.score.commands.runnable.block.commands.PlantInSquare`

## Grab the values of the command's arguments
(This command has yet to receive the latest method for custom command arguments)
```java
int radius = (int) sCommandToExec.getSettingValue("radius");
boolean takeFromInventory = (boolean) sCommandToExec.getSettingValue("takeFromInv");
boolean acceptEI = (boolean) sCommandToExec.getSettingValue("acceptEI");
List<String> specifiedCropTypes = Arrays.asList(
        (
            (String) sCommandToExec.getSettingValue("cropType")
        ).toUpperCase().split(","));
boolean isCube = (boolean) sCommandToExec.getSettingValue("isCube");
```

## Check what block got clicked to determine what crop to plant
- Create a `validCropsToPlace` variable to store the list of crops that could be planted based on the clicked block
- Refer to `com.ssomar.score.utils.ToolsListMaterial` for its private `List<Material>` variables

## Compute the required resources to plant the crops
```java
int resourcesNeeded = (radius*2+1)* (radius*2+1);
if(radius == 0) resourcesNeeded = 1;
```

## Iterate through `validCropsToPlace` 
### If `specifiedCropTypes.isEmpty()`, add all crops valid for that block to `cropsToPlace`
- Because in the PLANT_IN_SQUARE command, it's optional to specify what crops to place
### If `specifiedCropTypes` contains a crop from `validCropsToPlace`, add that crop to `cropsToPlace`
- In case the user wants to specify what crop to only place, this condition checks for it.

## Create a `Map<Integer, ItemStack> resources` variable

## If `takeFromInventory` is true:

### Iterate through the player's entire inventory
- It is written by creating an `int slot` variable and increasing the number as it does a for loop on `p.getInventory().getContents()`

### If the following conditions are met:
- Item in that slot is not null
- The item is the material needed to place said crop
- `acceptEI` is `True` || The item in that slot is not an EI

Then add that itemstack to the Hashmap to list down available resources to note how many could you place
to make sure it consumes/places the correct amount of crops in case of various situations

If the resources needed is met, break the loop

## Else, randomly select a crop from the `cropsToPlace` to build contents of `resources` variable
- The code on the else statement simply generates a hashmap of randomized resources

## [FOR DEBUG] If `resources.isEmpty()`, print the contents ingame via `SsomarDev.testMsg()`

## If radius == 0: Plant one crop
- Check resources then get one amount from itemstack. If its null, return. Else, plant it down

## Iterate in a `xz` square area
- x : -radius < x < radius
- y : -radius < x < radius

### If `isCube` is `True`, iterate through the `y` axis as well.

### Get a valid item from the `resources` Hashmap

### If resources ran out, kill the entire iteration

### Then get the Block instance of the clicked block

### Run the plant() method

:::info
#### private void plant(Material mode, Block farm, ItemStack item)
- If the checked block does not match the clicked block:
    - If the clicked block is Material.JUNGLE_LOG/Material.JUNGLE_WOOD and the checked block is AIR:
        - if the checked block is not empty, return;
        - run `plantCocoa()`
- Else:
    - If the crop to place is Material.COCOA, return
    - Get the Block instance above the checked block
    - If the block above isn't empty, return;
    - Then set the block type of the block above according to the crop-to-be-placed
    - Then get the instance of the selected crop and subtract the amount by 1
:::

:::info
#### private void plantCocoa(Block farm, ItemStack item)
- Create a 2d object array to setup values for checking NSWE directions
- Iterate the values through a for loop
    - Get the type of each block in the NSWE directions
    - If it's a JUNGLE_WOOD/LOG:
        - Set the checked block to COCOA
        - Set the block direction accordingly
        - Remove 1 amount from the itemstack
        - break;
:::

