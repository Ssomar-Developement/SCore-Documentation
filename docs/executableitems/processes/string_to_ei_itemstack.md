# String to EI ItemStack

If you want to create an ExecutableItem ItemStack by referencing a valid ExecutableItem via string, use this as reference

```java
import com.ssomar.executableitems.executableitems.manager.ExecutableItemsManager;

String eiId = "item_id_here";
boolean isValidID = ExecutableItemsManager.getInstance().isValidID(eiId);
if (!isValidID) return;

ItemStack replacement = ExecutableItemsManager.getInstance()
        .getExecutableItem(eiId).get()
        .buildItem(1, Optional.of((Player) e.getWhoClicked()));
```
