
# ToolsListMaterial

Class: `com.ssomar.score.utils.ToolsListMaterial`

The purpose of this class is to be able to add flexible pointers towards valid material ids while
considering the backwards compatibility for certain materials such as how `JUNGLE_WOOD` only exists in 1.13+

## How to add new entries?
### 1) Create a new instance variable
Can be a list or a regular variable
```java
private List<Material> plantWithGrowthOnlyFarmland;
```

### 2) Go to the constructor method and add your code for declaring values
```java
plantWithGrowth = new ArrayList<>();
addWithoutProblem(plantWithGrowth, FixedMaterial.getMaterial(Arrays.asList("WHEAT", "CROPS")));
```

## How to use?
Here's a sample usage:
```java
ToolsListMaterial.getInstance().getPlantWithGrowthOnlyJungleWood();
```
With the help of Lombok getter and setter annotations, this library makes the get and set methods for you