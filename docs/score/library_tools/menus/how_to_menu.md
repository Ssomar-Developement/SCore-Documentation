# How To:

## Find The Class that holds the Editor

There's no direct way to find it because it's scattered and placed together with other classes under the same context.  
  
For example: `com.ssomar.score.variables`, you can find `com.ssomar.score.variables.VariablesEditor#VariablesEditor`.  
  
These projects used to only be maintained by Ssomar so not much documentation has been done and the architecture may be confusing.

## Open an Editor

Reference Code: `com.ssomar.score.commands.score.CommandsClass`

```java
import com.ssomar.score.sobject.menu.NewSObjectsManagerEditor;
import com.ssomar.score.variables.VariablesEditor;

NewSObjectsManagerEditor.getInstance().startEditing(player, new VariablesEditor());
```

With `startEditing()`, you can open up any editor that's an inheritor of `SObjectsEditorAbstract`.
As of this writing in May 25 2026, in the scope of SCore's codebase, here are the direct children of `SObjectsEditorAbstract`:
- `com.ssomar.score.variables.VariablesEditor`
- `com.ssomar.score.projectiles.SProjectilesEditor`
- `com.ssomar.score.sobject.menu.SObjectsWithFileEditor`
- `com.ssomar.score.sobject.menu.SObjectsNoFileEditor`
- `com.ssomar.score.hardness.hardness.HardnessesEditor`

## Creating a deployable Editor

For this section, we will try to use the code for `/ei show`

`com.ssomar.executableitems.commands.CommandsClass`
```java
NewSObjectsManagerEditor.getInstance().startEditing(player, new ExecutableItemsEditor());
```

`com.ssomar.executableitems.editor.ExecutableItemsEditor`
```java
package com.ssomar.executableitems.editor;

import com.ssomar.executableitems.ExecutableItems;
import com.ssomar.executableitems.executableitems.ExecutableItem;
import com.ssomar.executableitems.executableitems.ExecutableItemLoader;
import com.ssomar.executableitems.executableitems.manager.ExecutableItemsManager;
import com.ssomar.score.features.FeatureSettingsSCore;
import com.ssomar.score.sobject.menu.SObjectsWithFileEditor;

public class ExecutableItemsEditor extends SObjectsWithFileEditor<ExecutableItem> {


    public ExecutableItemsEditor() {
        super(ExecutableItems.plugin, FeatureSettingsSCore.EXECUTABLEITEM, "/items", ExecutableItemsManager.getInstance(), ExecutableItemLoader.getInstance());
    }

    @Override
    public void initSettings() {

    }
}
```