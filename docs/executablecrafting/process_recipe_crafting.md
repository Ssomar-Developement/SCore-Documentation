---
sidebar_position: 1
---

# Crafting Process Recipe

Refer to `vayk.executablecrafting.events.CraftingTableListener`

## onInventoryClick()
The method itself

:::tip
The next following headers are all about checks.
Feel free to read one at a time and then forget since retaining it in your
mind is obsolete for now.
:::

### Check conditions

#### Check if inventory is `CraftingInventory`
- Use the .getInventory() method to get the Inventory instance of the event
then check if that instance is an instance of CraftingInventory. Otherwise, return

#### Then typecast it as CraftingInventory
- CraftingInventory is a class of bukkit.
```
Interface to the crafting inventories
```

#### Check if the slot of the event is 0
- To make sure that the method only processes the result slot which is 0

#### Then get the result of the craft

#### If result is null/AIR, return
:::tip
Checks are about done over here so start
retaining information from here on
:::

<hr />

### Get matrix details of the recipe 
Then it gets checked if its a 2x2 or not
```java
boolean is2x2Grid = (craftingGrid.length == 4);
```

### Then get the instance of RecipeCrafting to check if it has a recipe related to it
- `inventory.getMatrix()` returns the matrix container in an array of ItemStack objects.
Then it searches through the `RecipeCrafting` instance if such recipe is loaded in the /ExecutableCrafting/recipes/ folder.
- `RecipeCrafting` is a class from ExecutableCrafting that handles the .yml files loaded in the recipes folder and more.

#### If no such recipe is found, return

### 📝 Note down the details of the RecipeCrafting instance
:::info
Note down the details of the RecipeCrafting instance
:::

### 📝 Note down if the event is done via `Shift+Click`
:::info
Note down the boolean value of isShiftClick
:::

### 📝 Note down if the recipe is shapeless
:::info
Note down the boolean value of isShapeless
:::

### 📝 Note down the amount of crafted item
- From the source code, .getAmount() is assumed to be the way to properly get the amount.
- There seems to be something that's failing the method above which caused the developer to use this code when dealing
with shift+click crafts:
```java
if (isShiftClick) craftedAmount = customRecipe.isValidGrid(craftingGrid, is2x2Grid, true)*craftedAmount;
```

### 📝 Note down the item that ended up in the cursor
:::info
Note down the ItemStack value of clickedItem
:::

### If clicked item is not air and shift click is not performed

#### If the following conditions are met, cancel event and return.
The purpose of this if statement is to block 

- Clicked item is not similar to the custom recipe's supposed item
- Clicked item's stack count is beyond 64
- Clicked item's amount + crafted amount is greater than 64
    - Sample Scenario: Cursor has 33 stone and resulting craft has 32 stone. That leads to 65 stone in total

### Start Processing the recipe

#### If shapeless, utilize `processShapelessRecipe()` method
##### Return if processing fails


To be continued in writing....


