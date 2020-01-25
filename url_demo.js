const url = require('url');

const myUrl = new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=3831s');

//serialized url
console.log(myUrl.href);

//host
console.log(myUrl.host);

//host name
// same as host without port tho
console.log(myUrl.hostname);

//path name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//params objects
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
