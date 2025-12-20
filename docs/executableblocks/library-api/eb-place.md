# Executable Block Placed API
- This page is dedicated in explaining some EB APIs to great detail.

## Register New EB
If you intend to create a new ExecutableBlockPlaced, here's a sample code from `PlaceEBPListener.java`:
```java
    public void continueToPlace(ExecutableBlockObject nEBO, BlockPlaceEvent e, Player p, Block b) {
        Optional<ExecutableBlockPlaced> eBP = nEBO.createExecutableBlockPlaced(b.getLocation(), false, OverrideMode.KEEP_EXISTING, p, null, new InternalData().setOwnerUUID(p.getUniqueId()));
```

Reference to that method: `com.ssomar.executableblocks.executableblocks.ExecutableBlockObject#createExecutableBlockPlaced`

<hr/>

## Get Placed EB via Location
To check if an EB exists in that very spot, here's a sample code:
```java
        Location bLoc = LocationConverter.convert(block.getLocation(), false, true);
        Optional<ExecutableBlockPlacedInterface> eBPOpt = ExecutableBlocksPlacedManager.getInstance().getExecutableBlockPlaced(bLoc);
        if (eBPOpt.isPresent()) {
            // Write 'eb present' logic here
        } 
```
You need to use LocationConverter.convert() to be able to use getExecutableBlockPlaced() because if you use the
.getLocation() bukkit methods, there's a high chance it will return the exact x z location down to the decimals.
  
The manager is made to only accept whole numbers, which is why you really need the converter to get the proper
location values.