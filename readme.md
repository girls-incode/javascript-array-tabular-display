
# Display Javascript Arrays in tabular format

Case 1 | Case2 | Case 3 | Case 4 |
-------|------ | ------ | -------|
![Case1](https://github.com/girls-incode/javascript-array-tabular-display/blob/master/javascript-es6-arrays-strings-tabular-display-4.jpg) | ![Case2](https://github.com/girls-incode/javascript-array-tabular-display/blob/master/javascript-es6-arrays-strings-tabular-display-1.jpg) | ![Case3](https://github.com/girls-incode/javascript-array-tabular-display/blob/master/javascript-es6-arrays-strings-tabular-display-2.jpg) | ![Case3](https://github.com/girls-incode/javascript-array-tabular-display/blob/master/javascript-es6-arrays-strings-tabular-display-3.jpg)

#### Print an array of numbers in a tabular format, similar to tables displayed in bash/terminals.
Each cell of the table contains only one number from the array and 'bordered' as bellow:
```
+-+
|7|
+-+
```
```
+-----+
|12345|
+-----+
```
The 4 corners of the cell are represented by the "+" sign, vertical border by "-" and horizontal ones by "|" character. 
The width of the cell has the size of the longest number in the array. Adjacent cells share an edge:
```
+---+---+---+---+
|  9| 30| 82|123|
+---+---+---+---+
```
The numbers in cells are aligned to the right, the unused area being filled with spaces.
```
+-----+-----+-----+-----+
|    4|   35|   80|  123|
+-----+-----+-----+-----+
|12345|   44|    8|    5|
+-----+-----+-----+-----+
|   24|    3|   22|   35|
+-----+-----+-----+-----+
```

Write a function

**function print(A, C)**

That given a non-empty array A of N integers and an integer C, prints a string 
in the above format. The numbers in the table keep the same order as the ones in the array. 

### Example:
```
A = [6, 88, 12, 454, 6, 70, 3, 12346]
C = 11

+-----+-----+-----+-----+-----+-----+-----+-----+
|    6|   88|   12|  454|    6|   70|    3|12346|
+-----+-----+-----+-----+-----+-----+-----+-----+

A = [6, 88, 12, 454, 123468, 70, 3, 1, 52, 7]
C = 4

+------+-----+-----+-----+
|     6|   88|   12|  454|
+------+-----+-----+-----+
|123468|   70|    3|    1|
+------+-----+-----+-----+
|    52|    7|
+------+-----+

A = [1, 22, 40, 765, 5, 99, 2, 56789, 19, 0, 13, 30]
K = 4

+-----+-----+-----+-----+
|    1|   22|   40|  765|
+-----+-----+-----+-----+
|    5|   99|    2|56789|
+-----+-----+-----+-----+
|   19|    0|   13|   30|
+-----+-----+-----+-----+
```