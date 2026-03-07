# JavaScript Concepts I Learned

While working on this project, I learned several important JavaScript concepts. Here is a short explanation of each one in simple terms.

---

## 1️⃣ Difference between `var`, `let`, and `const`

In JavaScript, we use `var`, `let`, and `const` to declare variables.

**var**

* It is the older way of declaring variables.
* It is **function scoped**.
* It can be **redeclared and updated**.
* Because of these behaviors, it can sometimes cause unexpected bugs.

Example:

```javascript
var name = "John";
var name = "Alex"; // allowed
```

**let**

* Introduced in ES6.
* It is **block scoped**.
* It **can be updated**, but **cannot be redeclared** in the same scope.

Example:

```javascript
let age = 20;
age = 21; // allowed
```

**const**

* Also introduced in ES6.
* It is **block scoped**.
* Its value **cannot be reassigned** after declaration.

Example:

```javascript
const country = "Bangladesh";
// country = "India" ❌ not allowed
```

---

## 2️⃣ What is the Spread Operator (`...`)?

The spread operator (`...`) is used to **expand elements of an array or object**.

It helps copy or merge data easily.

Example with arrays:

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];
```

Result:

```
[1, 2, 3, 4]
```

Example with objects:

```javascript
const user = { name: "Oshin", age: 22 };

const updatedUser = { ...user, role: "Developer" };
```

---

## 3️⃣ Difference between `map()`, `filter()`, and `forEach()`

These methods are used to work with arrays.

### `map()`

* Creates a **new array**
* Transforms each element

Example:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);
```

Result:

```
[2, 4, 6]
```

---

### `filter()`

* Creates a **new array**
* Keeps only the elements that match a condition

Example:

```javascript
const numbers = [1, 2, 3, 4];

const even = numbers.filter(n => n % 2 === 0);
```

Result:

```
[2, 4]
```

---

### `forEach()`

* Loops through an array
* **Does not return a new array**

Example:

```javascript
const numbers = [1, 2, 3];

numbers.forEach(n => {
  console.log(n);
});
```

---

## 4️⃣ What is an Arrow Function?

Arrow functions are a **shorter way to write functions** in JavaScript.

Normal function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short version:

```javascript
const add = (a, b) => a + b;
```

Arrow functions make the code **shorter and cleaner**.

---

## 5️⃣ What are Template Literals?

Template literals allow us to **insert variables inside strings easily**.

They use **backticks** (`` ` ``) instead of quotes.

Example:

```javascript
const name = "Oshin";
const message = `Hello, my name is ${name}`;
```

Result:

```
Hello, my name is Oshin
```

This is easier than using string concatenation.

---

These concepts helped me write cleaner and more modern JavaScript while building this project.
