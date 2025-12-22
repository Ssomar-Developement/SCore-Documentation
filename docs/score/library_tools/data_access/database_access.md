---
sidebar_position: 1
---

# Database Access

## How to add a dedicated class for your table to query from?

Package: `com.ssomar.score.data`
### In the data package, create a new class
For better understanding, check other classes that ends with `Query` but it's mostly
just utilizing the `Connect` object to connect to the MySQL database.

Here's a basic example when making a new query class:
```java
public class AbsorptionQuery {
    // table details
    private static final String TABLE_ID = "temp_absorptions";
    // column names
    private static final String COL_PLAYER_UUID = "player_uuid";
    private static final String COL_ABSORPTION_AMOUNT = "absorption";
    private static final String COL_EXPIRY_TIME = "expiry_time";
    // create table query
    private static final String CREATE_TABLE = "CREATE TABLE IF NOT EXISTS " + TABLE_ID
            + " (id int NOT NULL, "
            + COL_PLAYER_UUID + " TEXT NOT NULL, "
            + COL_ABSORPTION_AMOUNT + " INT NOT NULL, "
            + COL_EXPIRY_TIME + " DATETIME NOT NULL)"
            ;
}
```

Here's a basic example for creating a new table via query
```java
public static void createNewTable(Connection conn) {
    Statement statement = null;
    try {
        statement = conn.createStatement();
        statement.execute(CREATE_TABLE);
    } catch (SQLException e) {
        SCore.plugin.getLogger().severe("ERROR WHILE CREATING TABLE "+TABLE_ID+" IN DATABASE: "+e.getMessage());
    } finally {
        if (statement != null) {
            try {
                statement.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

Class: `com.ssomar.score.data.Database`
### Go to `load()` and add a static method call for your table creation
Example:
```java
BlockCommandsQuery.createNewTable(connect());
UsePerDayQuery.createNewTable(connect());
AbsorptionQuery.createNewTable(connect());
```

:::info
## How to provide Query Class methods the Connection object?
In order to be able to pass the Connection object to the methods, use `Database.getInstance().connect()`  
  
<b>BUT MAKE SURE TO WRAP THIS METHOD CALL IN AN ASYNC RUNNABLE OR ELSE IT WILL HAVE MS COMPLICATIONS IN THE MAIN THREAD</b>
:::