# Adding EI PAPI Placeholders

Class: `com.ssomar.executableitems.usedapi.PlaceholderAPIExecutableItemsExpansion`

Code Snippet:

```java
public class PlaceholderAPIExecutableItemsExpansion extends PlaceholderExpansion {

    private final ExecutableItems plugin;

    public PlaceholderAPIExecutableItemsExpansion(ExecutableItems plugin) {
        this.plugin = plugin;
    }

    @Override
    public String getAuthor() {
        return "Ssomar";
    }

    @Override
    public String getIdentifier() {
        return "ExecutableItems";
    }

    @Override
    public String getVersion() {
        return "1.0.0";
    }

    @Override
    public boolean persist() {
        return true; // This is required or else PlaceholderAPI will unregister the Expansion on reload
    }

    @Override
    public String onRequest(OfflinePlayer player, String params) {
        //System.out.println("params: "+params);

        if(player.getPlayer() != null) {
            // %executableitem_checkamount...
            Optional<String> checkAmountPlaceholder = ManagerWithBuildable.checkObjectAmountInInvPlaceholder(ExecutableItemsManager.getInstance(), player.getPlayer().getInventory(), params);
            if (checkAmountPlaceholder.isPresent()) return checkAmountPlaceholder.get();
            // %executableitem_checkvar...
            Optional<String> checkVarValPlaceholder = ManagerWithBuildable.getObjectVariableValueInInvPlaceholder(ExecutableItemsManager.getInstance(), player.getPlayer().getInventory(), params);
            if (checkVarValPlaceholder.isPresent()) return checkVarValPlaceholder.get();
        }

        return null;
    }
}
```

To create these placeholders, you must first make the logic at SCore's code at `com.ssomar.score.sobject.manager.ManagerWithBuildable`. 
