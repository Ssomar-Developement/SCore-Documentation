---
sidebar_position: 2
---

# FAQ

:::info
## Q: Where to find activator classes?

### A: `com.ssomar.executableitems.listeners`
:::
## &nbsp;<hr/>&nbsp;
:::info
## How to setup custom activator-exclusive placeholders?

### A: Use this as reference:
Sample:
```java
eInfo.getPlaceholders().put("%experience%", String.valueOf(e.getAmount()));
```
Origin:
```java
public class PlayerExpChangeListener implements Listener {

    @EventHandler
    public void onPlayerExpChangeEvent(PlayerExpChangeEvent e) {
        EventInfo eInfo = new EventInfo(e);
        eInfo.setPlayer(Optional.of(e.getPlayer()));
        eInfo.getPlaceholders().put("%experience%", String.valueOf(e.getAmount()));
        eInfo.setOption(Option.PLAYER_EXPERIENCE_CHANGE);
        EventsManager.getInstance().activeOption(eInfo);
    }


}
```
:::

