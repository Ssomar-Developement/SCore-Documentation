---
sidebar_position: 1
---

# ABSORPTION

Package: `com.ssomar.score.commands.runnable.player.commands.absorption`

Go to: `com.ssomar.score.commands.runnable.player.commands.absorption.Absorption`
## Get the values for amount, time and current absorption of the target
```java
double absorption = (double) sCommandToExec.getSettingValue("amount");
int time = (int) sCommandToExec.getSettingValue("time");
double currentAbsorption = receiver.getAbsorptionAmount();
```

## Check argument value for `time`

### If time is less than or equals to zero, make the absorption effect indefinite

### If time is greater than zero, create a temporary absorption effect
- Get current unix time now in milliseconds
- Multiply time by 50 to convert time ticks into seconds
- Create a new absorption object by passing the receiver's uuid, absorption amount and expiration time in unix time milliseconds
- Pass the absorption object to `AbsorptionManager.getInstance().applyAbsorption()`

Go to: `com.ssomar.score.commands.runnable.player.commands.absorption.AbsorptionManager`

<hr/>

## applyAbsorption()

### If the absorption object's ScheduledTask is not null, cancel it
:::info
ScheduledTask is an interface from SCore. For this class, its empty and as of this writing, it lacks
detailed information. Probably a knowledge issue from me -Special70
:::

### Get the Player's instance based on the stored uuid of the AbsorptionObject argument

#### If the instance value is null, return

### Get current player absorption

### Get absorption expiry time and subtract it to the current time now and then divide itself by 50

### Modify the receiver's current absorption amount by increasing the amount

### Generate a random uuid for the absorption buff for sql purposes

### Insert the absorption object to the mysql records
- To ensure proper removal of the absorption in case of server restart or crash because
the old method involved saving the absorptions in memory.

### Start a runnable task in case the player is still online

#### If the absorption expires while the player is online, deduct the absorption from the player and remove the absorption from the mysql records

#### Else, wait for the player to connect once more then create a query in mysql to get the records while deleting said records

:::info
That's it. Go to `AbsorptionQuery.java` for more information of how the queries are done
:::

