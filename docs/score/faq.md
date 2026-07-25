---
sidebar_position: 1
---

# FAQ

This page is devoted to assisting developers and maintainers in finding classes.
things will probably be sought after.

:::info
## Q: Lombok is properly set-up in this project but I still get variable errors

### A: Run install command in maven plugin of your editor. There are other issues non-lombok related (ex: IntelliJ)
> No clue why but when this happened to me, I had an improperly written class file that needed fixing. This confused me greatly because I was really sure I had lombok set-up properly but I guess that incorrectly written class file made it happen?? -Special70
:::

## &nbsp;<hr/>&nbsp;

:::info
## Q: Where to find what's responsible for parsing placeholders in cmds?

### A: Go to [this page](./execution_flows/command_execution.md)
:::
## &nbsp;<hr/>&nbsp;
:::info
## Q: Where to find the class that's responsible for executing commands used by `AROUND`,`NEAREST`,`ALL_PLAYERS`,`HITSCAN_PLAYERS`,`IF` for example?

### A: Go to `com.ssomar.score.commands.runnable.CommmandThatRunsCommand` and review methods such as `runPlayerCommands()`
:::
## &nbsp;<hr/>&nbsp;
:::info
## Q: What classes are responsible for executing commands in items for example?

### A: Go to [this guide](./execution_flows/command_execution.md) for details
:::
## &nbsp;<hr/>&nbsp;
:::info
## Q: How to deal with the invalid math placeholder errors?

### A: Tell users to enable `Disable-Warnings: true` at PlaceholderAPI's config.yml; This is something SCore can't fix as the problem is not in SCore's side
:::
## &nbsp;<hr/>&nbsp;
:::info
## Q: Where to find the latest build version of SEvents?

### A: Visit https://jitpack.io/#Ssomar-Developement/SEvents
:::