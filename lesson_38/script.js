"use strict";

{
  function slow(x) {
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);

      cache.set(x, result);
      return result;
    };
  }

  slow = cachingDecorator(slow);

  alert( slow(1) );   // slow(1)  cache
  alert( "Again: " + slow(1) );   // return cache

  alert( slow(2) );   // slow(2)  cache
  alert( "Again: " + slow(2) );   // return cache
}

/* -----
{
  func(1, 2, 3);
  // the same, but second variant has a context
  func.call(obj, 1, 2, 3);
}
*/

/* ----- */
{
  function sayHi() {
    alert(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  sayHi.call( user );   // John
  sayHi.call( admin );  // Admin
}

/* ----- */
{
  function say(phrase) {
    alert(this.name + ': ' + phrase);
  }

  let user = { name: "John" };

  say.call( user, "Hello" );    // John: Hello
}

/* ----- */
{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod();
    }
  };

  function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func.call(this, x);

      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow);

  alert(worker.slow(2));   // Called with 2  -->  2
  alert(worker.slow(2));   // 2
}

/* ----- */
{
  let worker = {
    slow(min, max) {
      alert( `Called with ${min}, ${max}` );
      return min + max;
    }
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments);
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments);

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert( worker.slow(3, 5) );
  alert( "Again " + worker.slow(3, 5) );
}

/* ----- */
{
  function hash() {
    alert( [].join.call(arguments) );   // 1, 2
  }

  hash(1, 2);
}