# Refreshing Variable Value in Item Lore

Key Phrases:
- Why are there chinese symbols in variables in item lore?

Explanation by Ssomar

Its to know where are the placeholders in the lore to refresh them cleanly.

Example you have config the lore:
```
Hello
Your rank is %rank%
```
-----------------

Once the item is built you have:
```
Hello
Your rank is King
```
-----------------

Then if you want to refresh the lore you dont know where the placeholder is so you have to replace fully from the config. But imagine the user has also another plugin that modifies the lore, you will erase it !

So what does refreshable tag is :
```
Hello
Your rank is §意§物King§意§物
```
§意§物 is hidden visualy because its considered as color codes.
```
But The plugin know what it has to modify.
§意§物 is mapped to %rank
It will search §意§物XXXXXXX§意§物 , and recalculate the value 
```