---
sidebar_position: 1
---

# buildItem() Methods and Overloads

Class: `com.ssomar.executableitems.executableitems.ExecutableItem`

- This method is the primary tool for building an ExecutableItem itemstack. This method has several
overloaded methods that may cater to your needs if you need to create an ExecutableItem itemstack.

- `buildItem(int quantity, Optional<Player> playerOpt)`
    - Requires `item amount`, `owner of ei`
- `buildItem(int amount, @Nullable InternalData overrideInternalData)`
    - Requires `item amount`, `usage, variables, owner uuid details inside InternalData`
- `buildItem(int amount, Optional<Integer> usage, Optional<Player> creator)`
    - Requires `item amount`, `ei usage`, `owner of ei`
- `buildItem(int quantity, Optional<Player> playerOpt, Map<String, Object> settings)`
    - Requires `item amount`, `ei owner`, `map of an item settings`
:::info
How to properly provide values to the settings argument? Here's an example:

```java
String itemData = (String) sCommandToExec.getSettingValue("itemdata");
Map<String, Object> settings = new HashMap<>();
settings = StringSetting.getSettings(itemData);
```

You pass a string value like: `Usage:10,Variables:{foo:bar},Durability:20` to `StringSetting.getSettings()`
and the getSettings() value will create a hashmap valid for this method overload.
:::
- `buildItem(int quantity, Optional<Integer> usageOpt, Optional<Player> playerOpt, Map<String, String> variables)`
    - Requires `item amount`, `ei usage`, `owner of ei`, `key value pair of custom values for the item's variables`
- `buildItem(int quantity, Optional<Player> playerOpt, Optional<Integer> usageOpt, Optional<ItemStack> itemStackOpt, Map<String, String> variables)`
    - Requires `item amount`, `ei owner`, `ei usage`, `optional itemstack`, `key value pair of custom values for the item's variables`
:::info
As of this writing, idk what the 4th argument is for.  
- Special70
:::
- `ItemStack buildItem(int quantity, Optional<Player> playerOpt, Optional<Integer> usageOpt, Optional<ItemStack> itemStackOpt, Map<String, String> variables, Map<String, Object> settings)`
    - Requires `item amount`, `ei owner`, `ei usage`, `optional itemstack`, `variables`, `settings`
    - This is the main method of buildItem()