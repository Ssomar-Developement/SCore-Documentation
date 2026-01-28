# Plugin Commands

Class: `com.ssomar.score.commands.score.CommandsClass`

This is where you'd want to go if you want to configure SCore's commands.

## How to add new commands?
### Add an entry to the variable

Variable: `com.ssomar.score.commands.score.CommandsClass#commands`

Example:
```java

private final String[] commands = new String[]{"clear", "cooldowns", "hardnesses", "hardnesses-create", "hardnesses-delete", "inspect-loop", "particles", "particles-info", "projectiles", "projectiles-create", "projectiles-delete", "reload", "run-entity-command", "run-block-command", "run-player-command", "variables", "variables-create", "variables-define", "variables-delete", "webhook", "no-translated"};

```

### Add the case block of your custom command at the runCommand method

Method: `com.ssomar.score.commands.score.CommandsClass#runCommand`

```java
    switch (command.toLowerCase()) {
        case "no-translated":
        SendMessage.sendMessageNoPlch(sender, "&4[SCore] &cNo translated text sent in your console. &7(You can send it to Ssomar in the suggestions channel on the discord).");
                Utils.sendConsoleFlatMsg(SCore.plugin, FeatureSettingsSCore.getAllNonTranslated());
        break;
        case "clear":
        ClearCommand.clearCmd(SCore.plugin, sender, args);
                break;
```

:::info
If you skip the above step, the changes you did in this step will not work.
:::

### Optional : Add tab-complete for your command

Method: `com.ssomar.score.commands.score.CommandsClass#onTabComplete`

```java
            if (args.length >= 2) {
                switch (args[0].toLowerCase()) {
                    case "cooldowns":
                        if (args.length == 2) {
                            arguments.add("clear");
                        } else if (args.length == 3 && args[1].equalsIgnoreCase("clear")) {
                            List<String> cooldowns = CooldownsManager.getInstance().getAllCooldownIds();
                            if (cooldowns.isEmpty()) arguments.add("No cooldowns to clear");
                            else arguments.addAll(cooldowns);
                        } else if (args.length == 4 && args[1].equalsIgnoreCase("clear")) {
                            arguments.add("[UUID]");
                        }
                        break;
```