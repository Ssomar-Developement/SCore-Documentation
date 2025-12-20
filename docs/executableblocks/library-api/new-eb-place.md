# Executable Block Placed API
- This page is dedicated in explaining some EB APIs to great detail.

If you intend to create a new ExecutableBlockPlaced, here's a sample code from `PlaceEBPListener.java`:
```java
    public void continueToPlace(ExecutableBlockObject nEBO, BlockPlaceEvent e, Player p, Block b) {
        Optional<ExecutableBlockPlaced> eBP = nEBO.createExecutableBlockPlaced(b.getLocation(), false, OverrideMode.KEEP_EXISTING, p, null, new InternalData().setOwnerUUID(p.getUniqueId()));
```

Reference to that method: `com.ssomar.executableblocks.executableblocks.ExecutableBlockObject#createExecutableBlockPlaced`