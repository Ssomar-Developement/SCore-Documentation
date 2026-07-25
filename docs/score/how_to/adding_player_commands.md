---
sidebar_position: 10
---

# ✍ Adding Player Commands


<details>

<summary>Sample Player Command : AddItemlore.java</summary>

```java

public class AddItemlore extends PlayerCommand {

    public AddItemlore() {
        CommandSetting slot = new CommandSetting("slot", 0, Integer.class, 0);
        slot.setSlot(true);
        CommandSetting text = new CommandSetting("text", 1, String.class, "New lore");
        text.setAcceptUnderScoreForLongText(true);
        CommandSetting insertIndex = new CommandSetting("insertIndex", 2, Integer.class, -1);
        List<CommandSetting> settings = getSettings();
        settings.add(slot);
        settings.add(text);
        settings.add(insertIndex);
        setNewSettingsMode(true);
    }

    @Override
    public void run(Player p, Player receiver, SCommandToExec sCommandToExec) {
        ItemStack item;
        ItemMeta itemmeta;
        ArrayList<String> list;

        int slot = (int) sCommandToExec.getSettingValue("slot");
        int insertIndex = (int) sCommandToExec.getSettingValue("insertIndex");
        String text = (String) sCommandToExec.getSettingValue("text");

        List<String> args = sCommandToExec.getOtherArgs();
        StringBuilder message = new StringBuilder(text);
        message.append(" ");
        for (String s : args) {
            //SsomarDev.testMsg("cmdarg> "+s);
            message.append(s).append(" ");
        }
        message = new StringBuilder(message.substring(0, message.length() - 1));

        if (slot == -1) item = receiver.getInventory().getItemInMainHand();
        else item = receiver.getInventory().getItem(slot);

        if (item == null || item.getType() == Material.AIR) return;
        if(!item.hasItemMeta()){
            item.setItemMeta(new ItemStack(item.getType()).getItemMeta());
        }

        itemmeta = item.getItemMeta();

        list = (ArrayList<String>) itemmeta.getLore();
        if(list == null) list = new ArrayList<>();
        if(!message.toString().isEmpty()) {
            if (insertIndex == -1) {
                list.add(StringConverter.coloredString(message.toString()));
            } else {
                list.add(insertIndex, StringConverter.coloredString(message.toString()));
            }
        }
        itemmeta.setLore(list);
        item.setItemMeta(itemmeta);
    }

    @Override
    public List<String> getNames() {
        List<String> names = new ArrayList<>();
        names.add("ADD_ITEM_LORE");
        names.add("ADD_LORE");
        names.add("ADDLORE");
        return names;
    }

    @Override
    public String getTemplate() {
        return "ADD_ITEM_LORE slot:-1 text:My_new_lore_line insertIndex:0";
    }

    @Override
    public ChatColor getColor() {
        return null;
    }

    @Override
    public ChatColor getExtraColor() {
        return null;
    }
}
```

</details>

## Go to `com.ssomar.score.commands.runnable.player.commands` 

Then create the class file of your custom command

## Then extend it to PlayerCommands

Example:
```java
public class TestDev extends PlayerCommand {}
```

## Setup arguments for your custom command and put it in the class constructor

Example:
```java
public AddTemporaryAttribute() {
    CommandSetting attribute = new CommandSetting("attribute", 0, String.class, "SCALE");
    CommandSetting amount = new CommandSetting("amount", 1, Double.class, 1);
    CommandSetting operation = new CommandSetting("operation", 2, String.class, "ADD_NUMBER");
    CommandSetting timeinticks = new CommandSetting("timeinticks", 3, Long.class, 20);
    List<CommandSetting> settings = getSettings();
    settings.add(attribute);
    settings.add(amount);
    settings.add(operation);
    settings.add(timeinticks);
    setNewSettingsMode(true);
}
```
Properties of `CommandSettings()`
- First argument is the tag's name. Its used like this in practice: 
    - `ADD_TEMPORARY_ATTRIBUTE attribute:ATTACK_DAMAGE`
- Second argument is for the old system used by SCore to support old formats and to let the plugin know which argument to assign it to based on index. If you're not interested in giving a position in the argument index, just type `-1`. This way, the only way to provide values to this argument is by typing the argument's prefix.
- Third argument is the expected datatype the argument will transform into. Usually when you type things in chat, it's default is `String` so in a way, you're adding strict typing to your command arguments.
- The fourth argument is the supposed default value if the user fails to provide a value to a command argument.

```java
CommandSetting slot = new CommandSetting("slot", 0, Integer.class, 0);
slot.setSlot(true);
CommandSetting text = new CommandSetting("text", 1, String.class, "New lore");
text.setAcceptUnderScoreForLongText(true);
CommandSetting insertIndex = new CommandSetting("insertIndex", 2, Integer.class, -1);
List<CommandSetting> settings = getSettings();
settings.add(slot);
settings.add(text);
settings.add(insertIndex);
setNewSettingsMode(true);
```

### Setup the custom command's name in the editor
Type one or more names the plugin will look for so it would know what words to look for to run your custom command

Example:
```java
@Override
public List<String> getNames() {
    List<String> names = new ArrayList<>();
    names.add("ADD_TEMPORARY_ATTRIBUTE");
    return names;
}
```

### Write the guide for using the command 
This will be the text that will replace the chat of plugin users when they
press the text of the custom command in the commands editor

Example:
```java
@Override
public String getTemplate() {
    return "ADD_TEMPORARY_ATTRIBUTE {attribute} {amount} {operation} {time in ticks}";
}
```

### Add other required method interfaces
As of this writing, I do not know what these do. Only Ssomar knows.

```java
@Override
public ChatColor getColor() {
    return null;
}

@Override
public ChatColor getExtraColor() {
    return null;
}
```

### Add the verify method override
:::info
This is only useful when dealing with the old custom cmd arg system. If you're using
the new arg system, just have the verify() method `return Optional.empty();`
:::
```java
@Override
public Optional<String> verify(List<String> args, boolean isFinalVerification) {
    return Optional.empty();
}
```
The purpose of this method is to prevent the command from being applied to the ingame commands editor. If you want to add constraints, you can write it like:
```java
@Override
public Optional<String> verify(List<String> args, boolean isFinalVerification) {
    if (args.size() < 1) return Optional.of(notEnoughArgs + getTemplate());

    ArgumentChecker ac = checkInteger(args.get(0), isFinalVerification, getTemplate());
    if (!ac.isValid()) return Optional.of(ac.getError());

    return Optional.empty();
}
```
But keep in mind, this restriction method does not stop direct modifications from the edit-line option

### Add the code that will be executed when you run the custom command

Example:
```java

    @Override
    public void run(@Nullable Player launcher, Player receiver, SCommandToExec sCommandToExec) {
        launcher.sendMessage(launcher.getName());
        launcher.sendMessage(receiver.getName());
        launcher.sendMessage(sCommandToExec.toString());
        
    }
```
:::info
- `launcher` = The player who executed the custom command via ei item or the `player:` specified when running `/score run-player-command`<br />
- `receiver` = The player who is the "victim" of the custom command. Usually is used in commands such as DAMAGE in targetCommands<br />
- `sCommandToExec` = Contains various information such as the values placed in the custom command's arguments<br />
:::
:::info
How to use the command argument system to pull such values?  
Example:
```java
sCommandToExec.getSettingValue("attribute");
Attribute attribute = (Attribute) sCommandToExec.getSettingValue("attribute");
```
The argument inside `.getSettingValue()` references the value provided in the arugment when writing the custom command. You also have to typecast the return value to the correct object type
:::

## Add an instance of your custom command at PlayerCommandManager.java
Package: `com.ssomar.score.commands.runnable.player`

Example:
```java
public PlayerCommandManager() {
    List<SCommand> commands = new ArrayList<>();
    commands.add(new TestDev());
    commands.add(new AddItemlore());
    .....
```
