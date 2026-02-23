# Activator Options

## `mustBeAProjectileLaunchWithTheSameEI`

Where to find?
- `com/ssomar/executableitems/listeners/EventsManager.java:176`

Code snippet:
```java
boolean mustBeAProjectileLaunchWithTheSameEI = false;
for (Object obj : activator.getFeatures()) {
    FeatureInterface feature = (FeatureInterface) obj;
    if (feature instanceof BooleanFeature && feature.getName().equals("mustBeAProjectileLaunchWithTheSameEI")) {
        mustBeAProjectileLaunchWithTheSameEI = ((BooleanFeature) feature).getValue();
        break;
    }
}
if (mustBeAProjectileLaunchWithTheSameEI) {
    if (eInfo.getProjectileProvenance().isPresent()) {
        SsomarDev.testMsg("Projectile provenance: " + eInfo.getProjectileProvenance().get(), DEBUG);
        if (!eInfo.getProjectileProvenance().get().equals(config.getId())) continue;
        else {
            /* To work with only one item and not more even if it has the EI time in his inventory */
            oneProvenanceItemActivated = true;
        }
    } else continue;
}
```