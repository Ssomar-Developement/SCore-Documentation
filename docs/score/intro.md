---
sidebar_position: 1
---

# Tutorial Intro

This page for now will provide information for the most basic and general things

## Get Plugin Instance
:::info
Utilize this static variable to be able to use `.getLogger().info()` for example
```java 
SCore.plugin
```
:::

## What to do when making a pull request / commit?
- Make sure that your features are bug free
    - Try coming up with all the possible ways to break it or predict odd user inputs
- If you're debugging, turn off `enableDebug` before making your PR
```java
public class SsomarDev {

    /* This setting is turned to false when building the plugin for production */
    private static boolean enableDebug = false;


    // version 1 of the testmsg
    public static void testMsg(String message, boolean isActiveDebug) {
       testMsg(message, isActiveDebug,null);
    }

    /**
     * Currently used by Special70. Do whatever you want as its mainly used for checking code flows.
     * @param message
     * @param groupType
     */
    public static void testMsg(String message, boolean isActiveDebug, DebugMsgGroups groupType) {
        if (enableDebug) {
            if(isActiveDebug){
                try {
                    Bukkit.getPlayer("Ssomar").sendMessage(message);
                } catch (Exception ignored) {}

                try {
                    Bukkit.getPlayer("Moccains").sendMessage(message);
                } catch (Exception ignored) {}
            }

            if(groupType != null) {
                if (!forceGroupWhitelist().contains(groupType)) return;
                testMsg(message, true, null);
            }
        }
    }

    // Used to force enable specific debug groups - let empty on GitHub
    public static Set<DebugMsgGroups> forceGroupWhitelist(){
        Set<DebugMsgGroups> whitelist = new HashSet<>();
        //whitelist.add(DebugMsgGroups._1);
        return whitelist;
    }

    /**
     * Used to group up specific debug messages to allow the dev to enable/disable at will.
     * <br/>
     * Details for each enum is written in SCore Documentation. Contact Special70 for further details
     */
    public enum DebugMsgGroups {
        _1
    }

}
```
- Never immediately push your changes to the main branch unless you're absolutely
sure that it's safe to push without Ssomar's second thoughts
- If you added critical changes such as new functions/variables to SCore and used it at ExecutableItems for example, you have to add the modified jar to the pull request. But of course,
explain in detail of what you added to the SCore jar.

## Side Note: Notification after compilation
- SCore takes a bit over a minute to compile and it's boring as shit. Run this (Assuming you have windows) to make your computer notifies you. IDK why intellij doesn't have this <br/>
```
mvn clean package install -PSpecial70; if ($?) { Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('Compilation Done. Start moving') }
```