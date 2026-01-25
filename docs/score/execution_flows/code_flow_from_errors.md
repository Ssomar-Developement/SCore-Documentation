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