# Plugin Commands

Class: `com.ssomar.myfurniture.commands.CommandsClass`

This is where you'd want to go if you want to configure MyFurniture's commands.

## How to add new commands?
### Add an entry to the variable

Variable: `com.ssomar.score.commands.score.CommandsClass#commands`

Example:
```java
public CommandsClass(MyFurniture main) {
    super(main);

    //addCommand("test");
    addCommand("reload");
    //addCommand("create");
    addCommand("show");
    addCommand("show-placed");
    addCommand("editor");
    addCommand("edit");
    addCommand("take");
    addCommand("drop");
    addCommand("place");
    addCommand("replace");
    addCommand("remove");
    addCommand("we-place");
    addCommand("we-replace");
    addCommand("we-remove");
    addCommand("wg-fill-region");
    addCommand("inspect");
    addCommand("clear");
    addCommand("actionbar");
    addCommand("delete");
    addCommand("delete-placed");
    /* addCommand("default_furniture"); */
    addCommand("checkevents");
    addCommand("modification");
    addCommand("pack");
    addCommand("download-default-pack");
    addCommand("run-custom-trigger");
    addCommand("remove-all-furniture-placed");
    addCommand("settings");

    giveCommand = new GiveCommand<>(MyFurniture.plugin, FurnitureManager.getInstance());
    addCommands(giveCommand.getCommands());
    giveFolderCommand = new GiveFolderCommand<>(MyFurniture.plugin, FurnitureManager.getInstance());
    addCommands(giveFolderCommand.getCommands());
    dropCommand = new DropCommand<>(MyFurniture.plugin, FurnitureManager.getInstance());
    addCommands(dropCommand.getCommands());
}
```

### Add the case block of your custom command at the runCommand method

Method: `com.ssomar.myfurniture.commands.CommandsClass#runCommand`

```java
    switch (command) {
        case "pack":
            getSm().sendMessage(sender, getSPlugin().getNameDesign() + " &7Command executed, loading in progress, check the console for more information !");
            new TexturesPackLoader().runPackCommand(args);
            getSm().sendMessage(sender, getSPlugin().getNameDesign() + " &7Command executed, process finished, check the console for more information ! (You can do /mf show)");
    
            if(GeneralConfig.getInstance().getBooleanSetting(GeneralConfig.Setting.selfHostPack.name())){
                MyFurniturePack.unregisterPack();
                MyFurniturePack.registerPack();
            }
    
            break;
```

:::info
If you skip the above step, the changes you did in this step will not work.
:::

### Optional : Add tab-complete for your command

Method: `com.ssomar.myfurniture.commands.CommandsClass#getOnTabCompleteArguments`

```java
List<String> arguments = new ArrayList<>();
if (args.length >= 2) {

        switch (args[0]) {
            case "show-placed":
                for (SortFurniturePlaced sortEBP : SortFurniturePlaced.values()) {
                    arguments.add("sort:" + sortEBP.toString());
                }
                for (FilterFurniturePlaced filterEBP : FilterFurniturePlaced.values()) {
                    arguments.add("filter:" + filterEBP.toString() + ":????");
                }
                return arguments;
```