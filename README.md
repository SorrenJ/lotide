# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @sorrenj/lotide`

**Require it:**

`const _ = require('@sorrenj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: identifies the first element in an array
* `tail(...)`: identifies all the elements except the first element in an array
* `middle(...)`: identifies the middle element/s of an array
* `assertArraysEqual(...)`: evaluates whether strings are identical
* `assertEqual(...)`: evaluates whether strings are identical
* `assertObjectsEqual(...)`: evaluates whether objects are identical
* `countLetters(...)`: counts the number of times letters are used in a string
* `countOnly(...)`: counts the number of times a string appears in an array
* `eqArrays(...)`: evaluates whether arrays are identical
* `eqObjects(...)`: evaluates whether objects are identical
* `findKey(...)`: identifies a key when provided an object of that particular key
* `findKeyByValue(...)`:  identifies a key when provided a particular paired value
* `letterPositions(...)`: identifies the letter/s used in a string and what their index position/s is/are
* `map(...)`: identifies the first letters of each word provided
* `takeUntil(...)`: identifies elements of an array up until a provided "stopping point", at which point the function will stop identifying further elements
* `without(...)`: filters out element/s from an array based on provided keyword/s