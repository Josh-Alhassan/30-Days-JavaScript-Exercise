# BOOLEANS

A boolean data type represents one of the two values: true or false, mostly used for comparisons operators

### Truthy Values
- All numbers (positive and negative) except zero
- All strings are except "" string
- The "true" boolean

### Falsy Values
- 0
- 0n
- null
- undefined
- NaN
- the boolean "false"
- ", "", ``, empty string

## Undefined
If we declare a variable and if we do not assign a value, the value will be undefined. Also, if a *function()* is not returning a value, it will be undefined.

## Null
-> null, means no value

## Operators

### Assignment operators
An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

### Arithmetic Operators
Arithmetic operators are mathmatical operators: some examples
- Basic Arithmetic Operators (+, -, *, /)
- Modulus(%): a % b
- Exponential(**): a ** b

### Comparison Operators
We use comparison operators in programming to compare two values. We check if a value is greater or less or equal to other value.
- "==" Equal in value only - Equivalent --> *x == y*
- "===" Equal in value and data type - Exactly equal --> *x === y*
- "!=" Not equal  --> *x != y*
- ">" Greater than --> *x > y*
- "<" Less than   --> *x < y*
- ">=" Greater than or equal to --> *x >= y*
- "<=" Less than or equal to --> *x <= y*

As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==