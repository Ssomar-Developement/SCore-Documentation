# ⚙ Processing Activator Triggers

This page is dedicated into helping you on where to look and to have a deeper understanding how ItemStacks and Events make
up an ExecutableItem Activator.

## Classes involved in ExecutableItems project:
- `EventsManager#activeOptionForPlayerForItemStack` 
  - `com.ssomar.executableitems.listeners.EventsManager#activeOptionForPlayerForItemStack`
  - Activator options are present here to decide whether to execute the activator or not:
    - mustBeAProjectileLaunchWithTheSameEI
- `EventsManager#activeOptionForPlayer`
  - `com.ssomar.executableitems.listeners.EventsManager#activeOptionForPlayer`
- `EventsManager#activeOptionAllPlayer`
  - `com.ssomar.executableitems.listeners.EventsManager#activeOptionAllPlayer`
- `EventsManager#activeOption`
  - `com.ssomar.executableitems.listeners.EventsManager#activeOption`
- `run-custom-trigger command`
  - `com/ssomar/executableitems/commands/CommandsClass.java:506`
  - Custom command that executes the `CUSTOM_TRIGGER` activator
- `ActivatorEIFeature#getRunnableForAll`
  - `com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature#getRunnableForAll`
- `ActivatorEIFeature#activateOptionGlobal`
  - `com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature#activateOptionGlobal`
- `activeOption(eInfo)`
  - Found executed last on almost every class that extends the `Listener` class at package `com.ssomar.executableitems.listeners`.

```mermaid
flowchart LR

subgraph ActivatorEIFeature
    ACT_RunAll["getRunnableForAll"]
    ACT_Global["activateOptionGlobal"]
end

subgraph Commands
    CMD["run-custom-trigger"]
end

subgraph Activator Classes
    EM_Entry["activeOption(eInfo)"]
end

subgraph EventsManager
    EM_Option["activeOption"]
    EM_All["activeOptionAllPlayer"]
    EM_Player["activeOptionForPlayer"]
    EM_ItemStack["activeOptionForPlayerForItemStack"]
    EM_runWithException["runWithException"]
end

ACT_RunAll --> EM_All
ACT_Global --> EM_All
CMD --> EM_All
CMD --> EM_ItemStack

EM_Entry --> EM_Option
EM_Option --> EM_Player
EM_All --> EM_Player
EM_Player --> EM_ItemStack
EM_ItemStack --> EM_runWithException

classDef manager fill:#1e293b,color:#fff
classDef feature fill:#065f46,color:#fff
classDef command fill:#7c2d12,color:#fff

class EM_Entry,EM_Option,EM_All,EM_Player,EM_ItemStack,EM_runWithException manager
class ACT_RunAll,ACT_Global feature
class CMD command
```

Reference: `com/ssomar/executableitems/listeners/EventsManager.java:233`

<hr/>
Once all required checks across options are evaluated, `activator.runWithException(ei, updateEInfo);` is executed. 
If you're looking for the other checks such as `max use per day`, `detailed click`, the parsing of placeholders and `update item`/`refresh item` functions, visit the specific `run()`
method mentioned below. 

<details>
<summary>Detailed explanation on the rest of the code flow:</summary>

`runWithException` is a method from the abstract class `SActivator`.  
-> Class: `com.ssomar.score.features.custom.activators.activator.SActivator`

If you go back to the `activeOptionForPlayerForItemStack` method in `EventsManager` class, the for loop iterates `SActivator` objects from `config.getActivators().getActivators()`.
Somewhere in the code, the `SActivator` objects are initialized as its child class (`ActivatorEIFeature`)  
-> Class: `com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature`

With that context in mind, the code snippet below will run `run(parentObject, eventInfo)` as `com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature#run` specifically.

<hr/>
Method: `com.ssomar.score.features.custom.activators.activator.SActivator#runWithException`  
Code Snippet:
```java
public void runWithException(Object parentObject, EventInfo eventInfo) {
      try {
          try {
              run(parentObject, eventInfo);
          } catch (Exception e) {
              throw new SActivatorException("Error while running the activator: " + this.id + " associated with the parent object " + getParentObjectId(), e);
          }
      }catch (SActivatorException e) {
          e.printStackTrace();
      }
  }
```


</details>

<hr/>

Class: `com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature`

<br/><br/>
<hr/>

## (Optional for reader) What even is getting passed to runWithException() ?

Method: `com.ssomar.score.features.custom.activators.activator.SActivator#runWithException`

Parent Object: `com.ssomar.executableitems.executableitems.ExecutableItemObject`
EventInfo: 

