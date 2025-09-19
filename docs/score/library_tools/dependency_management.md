---
sidebar_position: 1
---

# Dependency Management

## Add an enum of the api of your choice
If you wish to add api from other plugins, first you have to add a line in 
Dependency.java under the package `com.ssomar.score.usedapi` like:

```java
    WORLD_GUARD("WorldGuard"),
```
inside the `Dependency` enum. Check the class file Dependency.java to look
at other samples. 
  
Make sure that the string you provide is the id of the plugin when it loads.


## Add a static boolean variable in SCore.java
Then in SCore.java under the package `com.ssomar.score`, add a static boolean like:

```java
public static boolean hasWorldGuard = false;
```

## Add a method call in SCore.java loadDependency() method

Reference your newly created boolean variable inside the `loadDependency()` method
and write it like this:

```java
hasWorldGuard = Dependency.WORLD_GUARD.hookSoftDependency();
```

Basically `<api_variable> = Dependency.<api_enum>.hookSoftDependency();`  
Check the `loadDependency()` method's code for more examples.

## Use the static variable in your logic

Now that you have your chosen api implemented as a soft dependency, you can
now use it to integrate it to your logic like:

```java
    if (getCondition().getValue(request.getSp())) {
        Player player = request.getPlayer();
        if (SCore.hasTowny) {
            if (!TownyToolAPI.playerIsInHisTown(player, player.getLocation())) {
                runInvalidCondition(request);
                return false;
            }
        }
    }
    return true;
```