# Req

A super simple, and super fast HTTP request builder for NodeJS projects.

If you want to send some simple http requests to a known URL, and you don't need anything too fancy, this is the module for you.

Things like [Axios](https://axios-http.com) is an awesome and _super_ useful module. But it's not _small_, and it definitely will increase your shippable JS bundle size. This might be a nice simple drop in alternative.

You _could_ (and perhaps should?) write your request with `node:http` directly of course. But it's not a small amount of code, and I for one _always_ have to check the [NodeJS docs](https://nodejs.org/docs/latest-v20.x/api/http.html) to make sure I have it right.

## Usage

This can be found in [testbed](./testbed/index.js).

```javascript
import { req } from '../index.js';

const data = await req({ url: 'http://localhost', path: '/', port: 4001 });
console.log( data );
```

## Todo

- [ ] Investigae if an http Agent is a good performance boost

## FAQ

**Is it production ready?**
Yes. It works, and it doesn't kill your CPU or Memory. You can use it in production. In fact, I have. But, it's your call.

**Why not just use module XYZ?**
Because I like building things, and I like to understand how to build things. The same could be asked when using external modules. Why not just use `node:http`?

**Why not TypeScript?**
Because it's JavaScript. There's JSDoc annotations for your IDE to help you, but TypeScript (IMO) doesn't add as much value as I get from properly typed languages, and I feel like it adds a lot of extra noise to the code. Not to mention the fact that I feel when writing TypeScript, I'm _definitely not_ writing JavaScript, which is a shame.

**Why is it a `"type": "module"`?**
Just because Node has been draggin it's feet with ESModules, it doesn't mean _we_ have to! Let's embrace the future, together.

## Author

[@moosch](https://github.com/moosch)

