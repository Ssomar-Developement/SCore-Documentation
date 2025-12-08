# StringSetting

Class: `com.ssomar.score.utils.strings.StringSetting`

## `extractSettingsAndRebuildCorrectly(List<String> args, int startIndex, List<String> startToIgnore)`

Reference Format: `xxxxx{Var:{var1:value1,var2:value2,...},Usage:1, Test:[hello,hhhh]}`

## `extractSettings(String input, List<String> startToIgnore)`

Input: `xxxxfrikd:{Var:{var1:value1,var2:"value2,  et"},Usage:1, Test:[hello,hhhh]} other_arg 145`
Output: `xxxxfrikd: other_arg 145`

## `getSettings(String input)`

:::info
This method was used to support Variables, Usage, and Durability for
`DROPEXECUTABLEITEM` block and entity command
:::

Reference Format: `Usage:10,Variables:{keg:beer},Durability:59`

Input: `Var:{var1:value1,var2:"value2,  et"},Usage:1, Test:[hello,hhhh]`  
Output: 
```
Usage -> 1
Var -> {var2=value2,  et, var1=value1}
 Test -> [hello, hhhh]
```