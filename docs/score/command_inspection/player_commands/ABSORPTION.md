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
- Add the object to the `absorptionList` of `AbsorptionManager`

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