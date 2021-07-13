const url = require('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host (root domain)
console.log(myURL.host);

// Hostname (does not get port)
console.log(myURL.hostname);

// Pathname
console.log(myURL.pathname);

// Serialized Query
console.log(myURL.search);

// Params Object
console.log(myURL.searchParams);

// Add Param
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams);

//Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));