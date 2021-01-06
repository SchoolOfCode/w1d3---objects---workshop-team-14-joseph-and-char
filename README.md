# Objects

Objects are key/value stores of information. You get the value out by knowing what key it is stored under.

## Task 1 - Declaring Objects

Create an HTML file named index.html and link this to a JS file named main.js. In the js file, convert the following sentences into JavaScript objects.

E.G.

> My cat is black, his name is Tony and he loves cuddles.

Becomes...

```js
const myCat = {
  color: "black",
  name: "Tony",
  lovesCuddles: true,
};
```

👉 Convert the rest!

> My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

> My car is red, has 4 wheels, power steering, 2 seats and does 20 miles per gallon.

> My favorite movie's title is The Dark Knight, it was released in 2008 and the lead actor is Christian Bale.

## Task 2 - Reading values

👉 Copy this object into a new linked JavaScript file or script tag within html.

```js
let person = {
  name: "Ben",
  likesChocolate: true,
};
```

👉 Below it write an if statement that will console.log `"Ben loves chocolate"` if likesChocolate has a value of true else console.log `"Ben hates chocolate"`. The condition for the if, and the name Ben should both be read from the object using dot notation.

👉 Change the object's values and re run your code, the name and the boolean should effect how your program runs.

## Task 3 - Bracket Notation

👉 Copy this object into a new linked JavaScript file or script tag within html.

```js
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life brother",
  smallTalk: "Warm today isn't it...",
};
```

👉 Use bracket notation and the `desiredPleasentry` variable to console.log Ben's greeting phrase.

👉 Change what is console.log-ed by changing the value of `desiredPleasentry`.

## Task 4 - Reassigning Properties

👉 Copy this object into a new linked JavaScript file or script tag within html and fill in the blank values to represent yourself, but do not touch the `isBootcamper` key, it must remain as false (just for a little bit...).

```js
let person = {
  firstName: "firstName",
  lastName: "lastName",
  isBootcamper: false,
};
```

👉 Below your object, reassign the property of `isBootcamper` using the assignment operator, make it `true`!

## Task 5 - nested objects

```js
let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};
```

👉 Using dot notation, read the text from the communication object and store in a variable.

👉 If the priority is urgent, then console.log the variable, else do nothing.

## Task 6 - Get Experimental

Explore objects more by...

- making some that represent things in the real world
- nesting loads of objects
