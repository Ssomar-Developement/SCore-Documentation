# SafeBreak

Class: `com.ssomar.score.utils.safebreak.SafeBreak`

## `breakBlockWithEvent`
- Performs a BlockBreakEvent on the provided block

```java
public static boolean breakBlockWithEvent(
        final Block block, 
        @Nullable final UUID playerUUID, 
        int slot, boolean drop, 
        boolean generateBreakEvent, 
        boolean verifSafeBreak, 
        BlockBreakEventExtension.BreakCause breakCause) {}
```

## `breakBlockNaturallyWith`
- Simulates a block break event with the provided ItemStack
  - In the context of Minecraft, you need to use the correct tool/ItemStack for the block to properly drop items

```java
public static void breakBlockNaturallyWith(
        Block block, 
        Optional<ItemStack> itemStack, 
        boolean drop) {}
```

## `breakRoseLoot`
- Reference plugin: https://www.spigotmc.org/resources/roseloot.101979/
- Simulates a block break while considering RoseLoot plugin mechanics

```java
public static boolean breakRoseloot(
        @Nullable Player player, 
        Block block, 
        boolean drop) {}
```

## `breakEB`
- Reference plugin: https://www.spigotmc.org/resources/⭐-executable-blocks-⭐-add-activators-on-your-blocks.94696/
- Simulates a block break while considering ExecutableBlock block mechanics

```java
public static boolean breakEB(
        @Nullable Player player, 
        Block block, 
        boolean drop) {}
```

## `verifSafeBreak`
- Evaluates a block if it's ok to be broken by a player or not based on the API logic of supported plugins.
- Supported plugins:
  - GriefPrevention
  - IridiumSkyblock
  - SuperiorSkyblock2
  - BentoBox
  - Lands
  - FactionsUUID
  - WorldGuard
  - Residence
  - Towny
  - ProtectionStores
  - ExcellentClaims

```java
public static boolean verifSafeBreak(
        @NotNull final UUID playerUUID,
        @NotNull Location location) {}
```

### Overloads
- `verifSafeBreak(@NotNull final UUID playerUUID, @NotNull Block block)`
