# ✍ Adding Block Conditions


This page will help you in how to create entity conditions for SCore

<hr />
Target package: `src.main.java.com.ssomar.score.features.custom`
<hr />

### Go to `com.ssomar.score.features.FeatureSettingsSCore.java` to add an enum for your condition

Go add an enum for your custom condition in FeatureSettingsSCore enum. When
writing the enum for it, write it in camel case.  
Ex:
```java
ifEntityInRegion(getFeatureSettings("ifEntityInRegion",SavingVerbosityLevel.SAVE_ONLY_WHEN_DIFFERENT_DEFAULT))
```

## Go to the `block` package
This will contain the files responsible for entity conditions

## Go to the `block.condition` package
You will create your custom condition's class in this package.

## Create the custom class
Creating a custom condition requires several steps to make it work. Upon creating the class, do the following:

### Make the class extend EntityConditionFeature
To study how to create a custom entity condition, we will use the IfSheepColor.java code


<details>

<summary>Source code of IfBlockAge.java</summary>

```java title="IfBlockAge.java"
package com.ssomar.score.features.custom.conditions.block.condition;

import com.ssomar.score.features.FeatureParentInterface;
import com.ssomar.score.features.FeatureSettingsSCore;
import com.ssomar.score.features.custom.conditions.block.BlockConditionFeature;
import com.ssomar.score.features.custom.conditions.block.BlockConditionRequest;
import com.ssomar.score.features.types.NumberConditionFeature;
import com.ssomar.score.utils.strings.StringCalculation;
import lombok.Getter;
import lombok.Setter;
import org.bukkit.block.Block;
import org.bukkit.block.data.Ageable;
import org.bukkit.entity.Player;

import java.util.Optional;

@Getter
@Setter
public class IfBlockAge extends BlockConditionFeature<NumberConditionFeature, IfBlockAge> {


    public IfBlockAge(FeatureParentInterface parent) {
        super(parent,  FeatureSettingsSCore.ifBlockAge);
    }

    @Override
    public IfBlockAge getValue() {
        return this;
    }

    @Override
    public void subReset() {
        setCondition(new NumberConditionFeature(getParent(), FeatureSettingsSCore.ifBlockAge));
    }

    @Override
    public boolean hasCondition() {
        return getCondition().getValue().isPresent();
    }

    @Override
    public IfBlockAge getNewInstance(FeatureParentInterface parent) {
        return new IfBlockAge(parent);
    }

    @Override
    public boolean verifCondition(BlockConditionRequest request) {
        Optional<Player> playerOpt = request.getPlayerOpt();
        Block b = request.getBlock();
        if (b.getState().getBlockData() instanceof Ageable) {
            Ageable ageable = (Ageable) b.getState().getBlockData();
            int age = ageable.getAge();
            if (hasCondition() && !StringCalculation.calculation(getCondition().getValue(playerOpt, request.getSp()).get(), age)) {
                runInvalidCondition(request);
                return false;
            }
        }
        return true;
    }
}
```

We will be looking back at this on repeat to learn how to properly implement a custom entity condition. Let's proceed
</details>


### Select what Feature Parent Interface to use

In this page, we will use [ListUncoloredStringFeature](../library_tools/feature_parent_interface/ListUncoloredStringFeature.md) to request
the user for uncolored string entries.

### Then finalize the extend class's properties

In the parent class of our custom entity condition, it will look like this:
```java
public class IfBlockAge extends BlockConditionFeature<NumberConditionFeature, IfBlockAge> 
```
The second argument in the EntityConditionFeature generic must be the custom condition's class id.


### Create the constructor

```java
public IfBlockAge(FeatureParentInterface parent) {
    super(parent,  FeatureSettingsSCore.ifBlockAge);
}
```

### Setup the condition's logic

The interface method that you will override is named `verifCondition`

```java
    @Override
    public boolean verifCondition(BlockConditionRequest request) {
        Optional<Player> playerOpt = request.getPlayerOpt();
        Block b = request.getBlock();
        if (b.getState().getBlockData() instanceof Ageable) {
            Ageable ageable = (Ageable) b.getState().getBlockData();
            int age = ageable.getAge();
            if (hasCondition() && !StringCalculation.calculation(getCondition().getValue(playerOpt, request.getSp()).get(), age)) {
                runInvalidCondition(request);
                return false;
            }
        }
        return true;
    }
```

The method has to return `true` to consider your condition in an ei item met.  
So you'd want to add `return false` statements across your logic to "fail" your condition.

Write the condition logic inside of the hasCondition() if statement.

<details>

<summary>Sample logic written in `verifCondition()`</summary>

```java
    @Override
    public boolean verifCondition(EntityConditionRequest request) {
        if (hasCondition()) {
            
            Entity entity = request.getEntity();
            // return false automatically if entity is not sheep
            if (!(entity instanceof Sheep)) return false;
1
            boolean notValid = true;
            for (String name : getCondition().getValue(request.getSp())) {
                if (StringConverter.decoloredString(
                        String.valueOf(
                                ((Sheep) entity).getColor()
                        )
                ).equalsIgnoreCase(name)) {
                    notValid = false;
                    break;
                }
            }

            if (notValid) {
                runInvalidCondition(request);
                return false;
            }
        }

        return true;
    }
```
</details>

### Add this line in subReset()

```java
setCondition(new ListUncoloredStringFeature(getParent(), new ArrayList<>(), FeatureSettingsSCore.ifEntityInRegion, Optional.empty()));
```
Inside of the setCondition(), create a new object of your Feature Parent Interface and inside of it, just go to the interface's
code to search for its arguments in the constructor method.

### Set hasCondition() return value
Sample:
```java
    @Override
    public boolean hasCondition() {
        return !getCondition().getValue().isEmpty();
    }
```

### set the getNewInstance() method to return an instance of your custom condition
Sample:
```java
    @Override
    public IfSheepColor getNewInstance(FeatureParentInterface newParent) {
        return new IfSheepColor(newParent);
    }
```

### set the getValue() return value to `this`
Sample:
```java
    @Override
    public IfSheepColor getValue() {
        return this;
    }
```

## Add a new instance of the condition in `EntityConditionsFeature.java`
Path: `com.ssomar.score.features.custom.conditions.entity.parent.EntityConditionsFeature.java`  
Go to `reset()` method and add the condition's instance like:
```java
conditions.add(new IfEntityInRegion(this));
```

## Add a new entry in `FeatureSettingsSCoreEN.java`
Path: `com.ssomar.score.features.lang.FeatureSettingsSCoreEN.java`  
Add an entry to the `enum FeatureSettingsSCoreEN` like this:
```java
ifEntityInRegion("ifEntityInRegion", "If entity is in region", new String[]{}, Material.ANVIL)
```

## Compile
Now you can run `mvn clean package install` to test your new condition!