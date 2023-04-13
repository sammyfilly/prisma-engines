window.SIDEBAR_ITEMS = {"enum":[["Compare","For modeling comparison expressions."],["ConditionTree","Tree structures and leaves for condition building."],["DefaultValue","Defines a default value for a `Column`."],["ExpressionKind","An expression we can compare and use in database queries."],["IndexDefinition","A definition of a database index."],["Join","A representation of a `JOIN` statement."],["JsonCompare",""],["JsonPath",""],["JsonType",""],["OnConflict","`INSERT` conflict resolution strategies."],["Order","The ordering direction"],["Query","A database query"],["SelectQuery","A database query that only returns data without modifying anything."],["SqlOp","Calculation operations in SQL queries."],["TableType","Either an identifier or a nested query."],["TypeDataLength",""],["TypeFamily",""],["Value","A value we must parameterize for the prepared statement. Null values should be defined by their corresponding type variants with a `None` value for best compatibility."]],"fn":[["aggregate_to_string","Aggregates the given field into a string."],["asterisk","A quick alias to create an asterisk to a table."],["avg","Calculates the average value of a numeric column."],["coalesce","Returns the first non-null argument"],["concat","Concat several expressions."],["count","Count of the underlying table where the given expression is not null."],["default_value","A quick alias to create a default value expression."],["json_extract","Extracts a subset of a JSON blob given a path. Two types of paths can be used:"],["json_unquote","Converts a JSON expression into string and unquotes it."],["lower","Converts the result of the expression into lowercase string."],["max","Calculates the maximum value of a numeric column."],["min","Calculates the minimum value of a numeric column."],["native_uuid","Generates the function uuid_to_bin(uuid()) returning a binary uuid in MySQL"],["row_number","A number from 1 to n in specified order"],["row_to_json","Return the given table in `JSON` format."],["sum","Calculates the sum value of a numeric column."],["text_search","Performs a full-text search. Use it in combination with the `.matches()` comparable."],["text_search_relevance","Computes the relevance score of a full-text search query against some expressions."],["upper","Converts the result of the expression into uppercase string."],["uuid_to_bin","Generates the function uuid_to_bin(uuid()) returning a binary uuid in MySQL"],["uuid_to_bin_swapped","Generates an optimized swapped UUID in MySQL 8 see `<https://dev.mysql.com/doc/refman/8.0/en/miscellaneous-functions.html#function_uuid-to-bin>`"]],"struct":[["AggregateToString","An aggregate function that concatenates strings from a group into a single string with various options."],["Average","A representation of the `AVG` function in the database."],["Coalesce","Returns the first non-null expression"],["Column","A column definition."],["CommonTableExpression","A builder for a common table expression (CTE) statement, to be used in the `WITH` block of a `SELECT` statement."],["Concat","A representation of the `Concat` function in the database."],["Count","Returns the number of rows that matches a specified criteria."],["Delete","A builder for a `DELETE` statement."],["Expression","An expression that can be positioned in a query. Can be a single value or a statement that is evaluated into a value."],["Function","A database function definition"],["Grouping","A list of definitions for the `GROUP BY` statement"],["Insert","A builder for an `INSERT` statement."],["JoinData","The `JOIN` table and conditions."],["JsonExtract",""],["JsonUnquote",""],["Lower","A represention of the `LOWER` function in the database."],["Maximum","A represention of the `MAX` function in the database."],["Minimum","A represention of the `MIN` function in the database."],["MultiRowInsert","A builder for an `INSERT` statement for multiple rows."],["Ordering","A list of definitions for the `ORDER BY` statement."],["Over","Determines the partitioning and ordering of a rowset before the associated window function is applied."],["Raw","A value written to the query as-is without parameterization."],["Row","A collection of values surrounded by parentheses."],["RowNumber","A window function that assigns a sequential integer number to each row in the query’s result set."],["RowToJson","A representation of the `ROW_TO_JSON` function in the database. Only for `Postgresql`"],["Select","A builder for a `SELECT` statement."],["SingleRowInsert","A builder for an `INSERT` statement for a single row."],["Sum","A represention of the `SUM` function in the database."],["Table","A table definition"],["TextSearch","Holds the expressions on which to perform a full-text search"],["TextSearchRelevance","Holds the expressions & query on which to perform a text-search ranking compute"],["Union","A builder for a `UNION`s over multiple `SELECT` statements."],["Update","A builder for an `UPDATE` statement."],["Upper","A represention of the `UPPER` function in the database."],["Values","An in-memory temporary table. Can be used in some of the databases in a place of an actual table. Doesn’t work in MySQL 5.7."]],"trait":[["Aliasable","An object that can be aliased."],["Comparable","An item that can be compared against other values in the database."],["Conjunctive","`AND`, `OR` and `NOT` conjunctive implementations."],["Groupable","An item that can be used in the `GROUP BY` statement"],["IntoCommonTableExpression","Conversion into a common table expression."],["IntoGroupByDefinition","Convert the value into a group by definition."],["IntoOrderDefinition","Convert the value into an order definition with order item and direction"],["IntoRaw","Converts the value into a state to skip parameterization."],["Joinable","An item that can be joined."],["Orderable","An item that can be used in the `ORDER BY` statement"]],"type":[["GroupByDefinition","Defines a grouping for the `GROUP BY` statement."],["OrderDefinition","Defines ordering for an `ORDER BY` statement."]]};