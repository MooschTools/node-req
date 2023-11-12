import { req } from '../index.js';

const data = await req({ url: 'http://localhost', path: '/', port: 4001 });
console.log( data );

