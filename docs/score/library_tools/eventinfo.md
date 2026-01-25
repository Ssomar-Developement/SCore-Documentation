# EventInfo

:::warning
This documentation is wrong. I assumed incorrectly  
- Special70
:::

Class: `com.ssomar.score.sobject.sactivator.EventInfo`

Usually used by activators to store details the dev wants to keep.

Example of saving details: (Source: `com.ssomar.executableitems.listeners.projectiles.ProjectileLaunchEvent`)
```java
            EventInfo eInfo = new EventInfo(e);
            eInfo.setPlayer(Optional.of(p));
            eInfo.setProjectile(Optional.of(projectile));
            if (projectile.hasMetadata("bowForce")) {
                eInfo.setBowForce(Optional.of(projectile.getMetadata("bowForce").get(0).asFloat()));
            }
            eInfo.setVelocity(Optional.of(projectile.getVelocity()));
            eInfo.setTargetEntity(Optional.of(projectile));
            eInfo.setOption(Option.PLAYER_LAUNCH_PROJECTILE);
            EventsManager.getInstance().activeOption(eInfo);
```

Example of using details: (Source: `com.ssomar.score.commands.runnable.player.commands.Launch`)
```java
if (sCommandToExec.getActionInfo().getVelocity().isPresent()) {
    /* Take the real velocity */
    eyeVector = sCommandToExec.getActionInfo().getVelocity().get();
    double oldVelocity = eyeVector.length();
    //SsomarDev.testMsg( "velocity: " + eyeVector.length(), true);
    /* add to the real velocity the custom rotation */
    Location customLoc = eyeVector.toLocation(receiver.getWorld());
    customLoc.setPitch(newPitch);
```