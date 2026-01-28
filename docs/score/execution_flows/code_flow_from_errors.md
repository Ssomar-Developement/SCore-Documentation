---
sidebar_position: 1
---

# [!] Code Flows From Errors

:::info
This page exists just for me to view where code is being executed. I could have made a dedicated page but right now, I'm not motivated
to do it.
- Special70
:::

## When clicking a folder
```log
[17:15:39 WARN]: java.lang.NullPointerException
[17:15:39 WARN]:        at com.ssomar.score.utils.strings.StringConverter.replaceHexCodes(StringConverter.java:189)
[17:15:39 WARN]:        at com.ssomar.score.utils.strings.StringConverter.decoloredString(StringConverter.java:106)
[17:15:39 WARN]:        at com.ssomar.score.sobject.menu.SObjectsWithFileEditor.goToFolder(SObjectsWithFileEditor.java:183)
[17:15:39 WARN]:        at com.ssomar.score.sobject.menu.NewSObjectsManagerEditor.allClicked(NewSObjectsManagerEditor.java:34)
[17:15:39 WARN]:        at com.ssomar.score.editor.NewGUIManager.clicked(NewGUIManager.java:145)
[17:15:39 WARN]:        at com.ssomar.score.editor.NewGUIManager.clicked(NewGUIManager.java:75)
[17:15:39 WARN]:        at com.ssomar.score.editor.NewEditorInteractionsListener.manage(NewEditorInteractionsListener.java:164)
[17:15:39 WARN]:        at com.ssomar.score.editor.NewEditorInteractionsListener.onInvClick(NewEditorInteractionsListener.java:145)
[17:15:39 WARN]:        at com.destroystokyo.paper.event.executor.asm.generated.GeneratedEventExecutor25.execute(Unknown Source)
[17:15:39 WARN]:        at org.bukkit.plugin.EventExecutor.lambda$create$1(EventExecutor.java:69)
[17:15:39 WARN]:        at co.aikar.timings.TimedEventExecutor.execute(TimedEventExecutor.java:80)
[17:15:39 WARN]:        at org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:66)
[17:15:39 WARN]:        at org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:520)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.PlayerConnection.a(PlayerConnection.java:2288)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.PacketPlayInWindowClick.a(SourceFile:33)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.PacketPlayInWindowClick.a(SourceFile:10)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.PlayerConnectionUtils.lambda$ensureMainThread$0(PlayerConnectionUtils.java:15)
[17:15:39 WARN]:        at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
[17:15:39 WARN]:        at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.SystemUtils.a(SystemUtils.java:108)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.MinecraftServer.b(MinecraftServer.java:1018)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.DedicatedServer.b(DedicatedServer.java:439)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.MinecraftServer.a(MinecraftServer.java:940)
[17:15:39 WARN]:        at net.minecraft.server.v1_13_R2.MinecraftServer.run(MinecraftServer.java:837)
[17:15:39 WARN]:        at java.base/java.lang.Thread.run(Thread.java:834)
```

## On how a custom list is evaluated:
```log
[19:11:29 WARN]: com.ssomar.score.features.custom.activators.activator.SActivatorException: Error while running the activator: activator0 associated with the parent object pookiebear
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.custom.activators.activator.SActivator.runWithException(SActivator.java:49)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.listeners.EventsManager.activeOptionForPlayerForItemStack(EventsManager.java:223)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.listeners.EventsManager.activeOptionForPlayer(EventsManager.java:124)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.listeners.EventsManager.activeOption(EventsManager.java:53)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.listeners.player.custom.PlayerHitEntityEvent.onEntityDamageByEntityEvent(PlayerHitEntityEvent.java:42)
[19:11:29 WARN]:        at co.aikar.timings.TimedEventExecutor.execute(TimedEventExecutor.java:80)
[19:11:29 WARN]:        at org.bukkit.plugin.RegisteredListener.callEvent(RegisteredListener.java:71)
[19:11:29 WARN]:        at io.papermc.paper.plugin.manager.PaperEventManager.callEvent(PaperEventManager.java:54)
[19:11:29 WARN]:        at io.papermc.paper.plugin.manager.PaperPluginManagerImpl.callEvent(PaperPluginManagerImpl.java:131)
[19:11:29 WARN]:        at org.bukkit.plugin.SimplePluginManager.callEvent(SimplePluginManager.java:628)
[19:11:29 WARN]:        at org.bukkit.event.Event.callEvent(Event.java:46)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.event.CraftEventFactory.callEntityDamageEvent(CraftEventFactory.java:1059)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.event.CraftEventFactory.callEntityDamageEvent(CraftEventFactory.java:1049)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.event.CraftEventFactory.handleEntityDamageEvent(CraftEventFactory.java:979)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.event.CraftEventFactory.handleEntityDamageEvent(CraftEventFactory.java:940)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.event.CraftEventFactory.handleLivingEntityDamageEvent(CraftEventFactory.java:1103)
[19:11:29 WARN]:        at net.minecraft.world.entity.LivingEntity.handleEntityDamage(LivingEntity.java:2424)
[19:11:29 WARN]:        at net.minecraft.world.entity.LivingEntity.hurtServer(LivingEntity.java:1474)
[19:11:29 WARN]:        at net.minecraft.world.entity.boss.wither.WitherBoss.hurtServer(WitherBoss.java:513)
[19:11:29 WARN]:        at net.minecraft.world.entity.Entity.hurtOrSimulate(Entity.java:2341)
[19:11:29 WARN]:        at net.minecraft.world.entity.player.Player.attack(Player.java:1097)
[19:11:29 WARN]:        at net.minecraft.server.level.ServerPlayer.attack(ServerPlayer.java:2528)
[19:11:29 WARN]:        at net.minecraft.server.network.ServerGamePacketListenerImpl$1.onAttack(ServerGamePacketListenerImpl.java:2847)
[19:11:29 WARN]:        at net.minecraft.network.protocol.game.ServerboundInteractPacket$1.dispatch(ServerboundInteractPacket.java:29)
[19:11:29 WARN]:        at net.minecraft.network.protocol.game.ServerboundInteractPacket.dispatch(ServerboundInteractPacket.java:91)
[19:11:29 WARN]:        at net.minecraft.server.network.ServerGamePacketListenerImpl.handleInteract(ServerGamePacketListenerImpl.java:2771)
[19:11:29 WARN]:        at net.minecraft.network.protocol.game.ServerboundInteractPacket.handle(ServerboundInteractPacket.java:78)
[19:11:29 WARN]:        at net.minecraft.network.protocol.game.ServerboundInteractPacket.handle(ServerboundInteractPacket.java:14)
[19:11:29 WARN]:        at net.minecraft.network.PacketProcessor$ListenerAndPacket.handle(PacketProcessor.java:99)
[19:11:29 WARN]:        at net.minecraft.network.PacketProcessor.executeSinglePacket(PacketProcessor.java:33)
[19:11:29 WARN]:        at net.minecraft.server.MinecraftServer.runAllTasksAtTickStart(MinecraftServer.java:1184)
[19:11:29 WARN]:        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1337)
[19:11:29 WARN]:        at net.minecraft.server.MinecraftServer.lambda$spin$2(MinecraftServer.java:384)
[19:11:29 WARN]:        at java.base/java.lang.Thread.run(Thread.java:1570)
[19:11:29 WARN]: Caused by: java.lang.IllegalArgumentException: No enum constant org.bukkit.entity.EntityType.SCORE:BOSS
[19:11:29 WARN]:        at java.base/java.lang.Enum.valueOf(Enum.java:293)
[19:11:29 WARN]:        at org.bukkit.entity.EntityType.valueOf(EntityType.java:46)
[19:11:29 WARN]:        at org.bukkit.craftbukkit.legacy.FieldRename.valueOf_EntityType(FieldRename.java:219)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.types.list.ListDetailedEntityFeature.BUKKIT_CUSTOM_METHOD_org_bukkit_craftbukkit_legacy_FieldRename_valueOf_EntityType(ListDetailedEntityFeature.java)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.types.list.ListDetailedEntityFeature.extractCondition(ListDetailedEntityFeature.java:176)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.types.list.ListDetailedEntityFeature.extractWhiteListCondition(ListDetailedEntityFeature.java:189)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.types.list.ListDetailedEntityFeature.isValidEntity(ListDetailedEntityFeature.java:230)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature$3.run(ActivatorEIFeature.java:504)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.utils.scheduler.RegionisedSchedulerHook.runEntityTaskAsap(RegionisedSchedulerHook.java:97)
[19:11:29 WARN]:        at ExecutableItems_Prem-7.26.1.25.jar//com.ssomar.executableitems.executableitems.activators.ActivatorEIFeature.run(ActivatorEIFeature.java:777)
[19:11:29 WARN]:        at SCore.jar//com.ssomar.score.features.custom.activators.activator.SActivator.runWithException(SActivator.java:47)
[19:11:29 WARN]:        ... 33 more
```