# russians-detector

> Returns true if visitor of your web resource is russian.
> Do what you want with him, I don't care.

Zero dependency, lightweight detector of russian clients (by different browser data and ip).

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i -S russians-detector
```

## Usage

```js
import { isRussian, isRussianByIP } from 'russians-detector';
// or
const { isRussian, isRussianByIP } = require('russians-detector');
// or
const isRussian = require('russians-detector').isRussian;
const isRussianByIP = require('russians-detector').isRussianByIP;

isRussian(); // => true | false
isRussianByIP().then((result) => result); // => true | false | undefined*

// * – client blocks tracking or server response error
```

## Demo

[Check if you are russian](https://mr-devboy.github.io/russians-detector/) according to my script.

## Purpose

> Russians do not deserve to enjoy the benefits of the civilized democratic world. Not anymore.

So you can show them different content, or nothing at all. It's up to you.

## Why?

Russia has been waging wars and genocide against peaceful peoples for centuries. Russia is a terrorist state that sneezes at the freedom and sovereignty of others. And what about the russians themselves? They do not protest, they do not oppose the dictatorial regime. Moreover, they support every war and every murder. This is what is happening today in relation to Ukraine and Ukrainians. This is what happened earlier in relation to Moldova and Georgia. Moscow imperialism must disappear!

### License

Copyright © 2023, [Bohdan Yatsenko](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).
