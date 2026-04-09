# Executable Block Config Access

This page is about how you can create an instance of ExecutableBlock or ExecutableBlockObject and then get the setting values of it
to adjust your logic accordingly.

### Accessing `ExecutableBlock` details

### Accessing `ExecutableBlockObject` details

An `ExecutableBlockObject` represents a valid ExecutableBlock ItemStack. To view its contents, provide the constructor with an ItemStack
```java
ItemStack item = player.getInventory().getItemInMainHand();
ExecutableBlockObject eb = new ExecutableBlockObject(item);
```

But try to make sure you use the .isValid() method as not every ItemStack is a valid ExecutableBlock.
```java
if (eb.isValid()) {}
```
<details>

<summary>Sample Usage in `com.ssomar.executableblocks.commands.CommandsClass#runCommand`</summary>

```java

            case "inspect":
                if (player != null) {
                    ItemStack item = player.getInventory().getItemInMainHand();
                    ExecutableBlockObject eb = new ExecutableBlockObject(item);
                    if (eb.isValid()) {
                        eb.loadExecutableBlockInfos();

                        getSm().sendMessage(sender, getSPlugin().getNameDesign() + " &aItem information :");

                        getSm().sendMessage(sender,"&6>> &eBlock usage: &6" + eb.getUsage());

                        UUID ownerUUID = eb.getInternalData().getOwnerUUID();
                        if (ownerUUID != null) {
                            getSm().sendMessage(sender,"&6>> &eBlock owner (UUID): &6" + ownerUUID);
                            try {
                                getSm().sendMessage(sender,"&6>> &eBlock owner (name): &6" + Bukkit.getOfflinePlayer(ownerUUID).getName());
                            } catch (Exception ignored) {}
                        } else {
                            getSm().sendMessage(sender,"&6>> &eBlock owner (UUID): &cNo owner");
                            getSm().sendMessage(sender,"&6>> &eBlock owner (name): &cNo owner");
                        }

                        getSm().sendMessage(sender,"&6>> &eBlock id: &6" + eb.getConfig().getId());

                        for (VariableReal vR : eb.getInternalData().getVariableRealsList()) {
                            getSm().sendMessage(sender,"&6>> &eVar &a" + "SCORE-" + vR.getConfig().getVariableName().getValue().get().toUpperCase() + ": &6" + vR.getValue());
                        }

                    } else
                        getSm().sendMessage(sender,"&c" + ExecutableBlocks.plugin.getNameWithBrackets() + " &cError no info for this block, it's not an EB");
                }
                break;
```

</details>
