# Plugin Commands

Class: `com.ssomar.executableitems.commands.CommandsClass`

This is where you'd want to go if you want to configure SCore's commands.

## How to add new commands?
### Add an entry at the constructor

Example:
```java
        addCommand("refresh");
        addCommand("edit");
        addCommand("take");
```

### Add the case block of your custom command at the runCommand method

Method: `com.ssomar.executableitems.commands.CommandsClass#runCommand`

```java
            case "test":
                if (player != null) {
                    PlayerInventory inv = player.getInventory();
                    for (int i = 0; i < inv.getSize(); i++) {
                        ItemStack item = inv.getItem(i);
                        for (int x = 0; x < 10000; x++) {
                            ExecutableItemObject ei = new ExecutableItemObject(item);
                            if (ei.isValid()) {
                                ei.loadExecutableItemInfos();
                            }
                        }
                    }
                    player.sendMessage("done");
                }
                break;
```

:::info
If you skip the above step, the changes you did in this step will not work.
:::

### Optional : Add tab-complete for your command

Method: `com.ssomar.executableitems.commands.CommandsClass#getOnTabCompleteArguments`

```java
    case "refresh":
        if (args.length == 3) {
            return ExecutableItemsManager.getInstance().getLoadedObjectsWith(args[2]);
        } else if (args.length >= 4) {
            for (ResetSetting resetSetting : ResetSetting.values()) {
                arguments.add(resetSetting.name());
            }
            return arguments;
        }
        break;
```