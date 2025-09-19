---
sidebar_position: 1
---

# Server Property Checkers

This page is mainly for teaching you what to use when writing your logic to properly implement
features while considering backwards compatibility


<details>

<summary>Reference from SCore.java as of September 14, 2025 version. Use these public boolean methods to make the logic of your code
work properly while considering the user's server version</summary>

```java
    /* The server is folia? */
    public static boolean isFolia() {
        return isFolia || isLuminol || isPaperOrForkFor1v20lus /* Paper include threaded region of Folia in 1.20 +*/ || hasClass("io.papermc.paper.threadedregions.scheduler.AsyncScheduler");
    }

    /* The server is spigot? */
    public static boolean isSpigot() {
        return isSpigot;
    }

    /* The server is paper? */
    public static boolean isPaper() {
        return isPaper;
    }

    /* The server is mohist? */
    public static boolean isMohist() {
        return isMohist;
    }

    /* The server is purpur? */
    public static boolean isPurpur() {
        return isPurpur;
    }

    public static boolean isPufferfish() {
        return isPufferfish;
    }

    /* The server is in 1.8 ? */
    public static boolean is1v8() {
        return is1v8;
    }

    /* The server is in 1.9 ? */
    public static boolean is1v9() {
        return is1v9;
    }

    /* The server is in 1.10 ? */
    public static boolean is1v10() {
        return is1v10;
    }

    /* The server is in 1.11 ? */
    public static boolean is1v11() {
        return is1v11;
    }

    /* The server is in 1.12 ? */
    public static boolean is1v12() {
        return is1v12;
    }

    /* The server is in 1.13 ? */
    public static boolean is1v13() {
        return is1v13;
    }

    /* The server is in 1.14 ? */
    public static boolean is1v14() {
        return is1v14;
    }

    /* The server is in 1.15 ? */
    public static boolean is1v15() {
        return is1v15;
    }

    /* The server is in 1.16 ? */
    public static boolean is1v16() {
        return is1v16;
    }

    /* The server is in 1.16 ? */
    public static boolean is1v16v1() {
        return is1v16v1;
    }

    /* The server is in 1.17 ? */
    public static boolean is1v17() {
        return is1v17;
    }

    /* The server is in 1.18 ? */
    public static boolean is1v18() {
        return is1v18;
    }

    /* The server is in 1.19 ? */
    public static boolean is1v19() {
        return is1v19;
    }

    /* The server is in 1.19 ? */
    public static boolean is1v19v1() {
        return is1v19v1;
    }

    public static boolean is1v19v4() {
        return is1v19v4;
    }

    /* The server is in 1.20? */
    public static boolean is1v20() {
        return is1v20;
    }

    /* The server is in 1.20.1? */
    public static boolean is1v20v1() {
        return is1v20v1;
    }

    /* The server is in 1.20.4? */
    public static boolean is1v20v4() {
        return is1v20v4;
    }

    /* The server is in 1.20.5? */
    public static boolean is1v20v5() {
        return is1v20v5;
    }

    /* The server is in 1.20.6? */
    public static boolean is1v20v6() {
        return is1v20v6;
    }

    /* The server is in 1.21? */
    public static boolean is1v21() {
        return is1v21;
    }

    public static boolean is1v21v2() {
        return is1v21v2;
    }

    public static boolean is1v21v3() {
        return is1v21v3;
    }

    public static boolean is1v21v4() {
        return is1v21v4;
    }

    public static boolean is1v21v5() {
        return is1v21v5;
    }

    public static boolean is1v21v6() {
        return is1v21v6;
    }

    public static boolean is1v21v7() {
        return is1v21v7;
    }

    public static boolean is1v21v8() {
        return is1v21v8;
    }

    public static boolean is1v22() {
        return is1v22;
    }

    public static boolean is1v23() {
        return is1v23;
    }

    /* The server is in 1.12 or - ? */
    public static boolean is1v11Less() {
        return is1v8() || is1v9() || is1v10() || is1v11();
    }

    /* The server is in 1.12 or - ? */
    public static boolean is1v12Less() {
        return is1v8() || is1v9() || is1v10() || is1v11() || is1v12();
    }

    /* The server is in 1.13 or - ? */
    public static boolean is1v13Less() {
        return is1v8() || is1v9() || is1v10() || is1v11() || is1v12() || is1v13();
    }

    /* The server is in 1.16 or + ? */
    public static boolean is1v16Plus() {
        return is1v16() || is1v17Plus();
    }

    /* The server is in 1.17 or + ? */
    public static boolean is1v17Plus() {
        return is1v17() || is1v18Plus();
    }

    /* The server is in 1.18 or + ? */
    public static boolean is1v18Plus() {
        return is1v18() || is1v19Plus();
    }

    /* The server is in 1.19 or + ? */
    public static boolean is1v19Plus() {
        return is1v19() || is1v19v1() || is1v19v4Plus();
    }

    public static boolean is1v19v4Plus() {
        return is1v19v4() || is1v20Plus();
    }

    /* The server is in 1.20 or + ? */
    public static boolean is1v20Plus() {
        return is1v20() || is1v20v1Plus();
    }

    /* The server is in 1.20.1 or + ? */
    public static boolean is1v20v1Plus() {
        return is1v20v1() || is1v20v4Plus();
    }

    /* The server is in 1.20.4 or + ? */
    public static boolean is1v20v4Plus() {
        return is1v20v4() || is1v20v5Plus();
    }

    /* The server is in 1.20.5 or + ? */
    public static boolean is1v20v5Plus() {
        return is1v20v5() || is1v20v6Plus();
    }
    /* The server is in 1.20.6 or + ? */
    public static boolean is1v20v6Plus() {
        return  is1v20v6() || is1v21Plus();
    }

    public static boolean is1v21Plus() {
        return is1v21();
    }

    public static boolean is1v21v2Plus() {
        return is1v21v2()  || is1v21v3() || is1v21v4Plus();
    }

    public static boolean is1v22Plus() {
        return is1v22() || is1v23Plus();
    }

    public static boolean is1v23Plus() {
        return is1v23();
    }

    public static boolean is1v21v4Plus() {
        return is1v21v4() || is1v21v5Plus();
    }

    public static boolean is1v21v5Plus() {
        return is1v21v5() || is1v21v6Plus();
    }

    public static boolean is1v21v6Plus() {
        return is1v21v6() || is1v21v7Plus();
    }

    public static boolean is1v21v7Plus() {
        return  is1v21v7() || is1v21v8() || is1v22Plus();
    }

    public static boolean isVersionBetween(String version1, String version2) {
        version1 = version1.replace(".yml", "").replace("_",".");
        version2 = version2.replace(".yml", "").replace("_",".");
        int version1Int = 0;
        int version2Int = 0;

        String[] version1Split = version1.split("\\.");
        for (int i = 0; i < version1Split.length; i++) {
            version1Int += (int) (Integer.parseInt(version1Split[i].trim()) * Math.pow(100, 3 - i));
        }
        if(!version2.isEmpty()) {
            String[] version2Split = version2.split("\\.");
            for (int i = 0; i < version2Split.length; i++) {
                version2Int += (int) (Integer.parseInt(version2Split[i].trim()) * Math.pow(100, 3 - i));
            }
        }
        else version2Int = Integer.MAX_VALUE;

        String serverVersion = Bukkit.getServer().getVersion().split(":")[1].replace(")","");
        int serverVersionInt = 0;
        String[] serverVersionSplit = serverVersion.split("\\.");
        for (int i = 0; i < serverVersionSplit.length; i++) {
            serverVersionInt += (int) (Integer.parseInt(serverVersionSplit[i].trim()) * Math.pow(100, 3 - i));
        }


        /* SsomarDev.testMsg("serverVersion: "+serverVersion+" >> "+serverVersionInt, true);
        SsomarDev.testMsg("version1: "+version1+" >> "+version1Int, true);
        SsomarDev.testMsg("version2: "+version2+" >> "+version2Int, true);*/

        return serverVersionInt >= version1Int && serverVersionInt <= version2Int;

    }




    public static boolean isSpigotOrFork(){
        return isSpigot() || isPaperOrFork();
    }

    public static boolean isPaperOrFork(){
        return isPaper() || isFolia() || isMohist() || isPurpur() || isPufferfish() || isPaperOrForkFor1v20lus;
    }

```

</details>