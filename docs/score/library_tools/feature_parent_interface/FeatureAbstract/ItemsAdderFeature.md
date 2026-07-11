# ItemsAdderFeature

> For now, this will be the reference to be used when studying FeatureAbstract classes. Don't think I have to write one page per these
> if you can just reverse engineer the others after understanding how this one works
> 
> - Special70

## Connections of Child Methods
- Yellow nodes are overrides of the parent class
```mermaid
flowchart LR
    updateItemAdder["updateItemAdder()<br/><br/>Handles adding lore<br/>to the item icon in<br/>the ingame editor"]

    updateItemParentEditor["updateItemParentEditor()"] --> updateItemAdder
    shiftLeftClicked["shiftLeftClicked()"] --> updateItemAdder
    shiftRightClicked["shiftRightClicked()"] --> updateItemAdder
    leftClicked["leftClicked()"] --> updateItemAdder
    rightClicked["rightClicked()"] --> updateItemAdder

    updateItemAdder --> getSortItemsAdder
    getSortItemsAdder["getSortItemsAdder()<br/><br/>Utilizes ItemsAdder api<br/>to get loaded IA items"]

    nextItemAdder["nextItemAdder()"] --> getSortItemsAdder
    prevItemAdder["prevItemAdder()"] --> getSortItemsAdder

    getItemAdder["getItemAdder()"]

    shiftLeftClicked --> getItemAdder
    shiftRightClicked --> getItemAdder
    leftClicked --> getItemAdder
    rightClicked --> getItemAdder

    classDef override fill:#a6a116
    class leftClicked,rightClicked,updateItemParentEditor,shiftLeftClicked,shiftRightClicked override
```

## Deployment of the feature's itemstack to an editor
```mermaid
flowchart TD
    start["Start<br/><br/>initAndUpdateItemParentEditor() is called in the FeatureEditorInterface<br/><br/>(For example, the trade editor of CustomPiglinTrades where you configure the Required Object type, Delay of Trade, etc)"]
    --> initAndUpdateIPE["initAndUpdateItemParentEditor()"]
    --> initIPE["initItemParentEditor()<br/><br/>Visit the code implementation of this method. For this guide, Go to initItemParentEditor() of ItemsAdderFeature.java"]
    --> overrideInitIPE["Create a new itemstack with the editor material value and then build the initial lore value such as '&8>> &6SHIFT : &eBOOST SCROLL'"]
    --> addItemToGUI["With the pointer towards the editor, run createItem() to place it there."]
```
