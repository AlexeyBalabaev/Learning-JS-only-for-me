"use strict";

// Object
// Two variantes ctreating Object:
{
  let user1 = new Object();
  let user2 = {};
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30
  };

  alert( user.name );   // Jhon
  alert( user.age );    // 30

  user.isAdmin = true;

  delete user.age;
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30,
    "likes birds": true
  };
}

/* ----- */
{
  let user = {};

  user["likes birds"] = true;
  alert( user["likes birds"] );    // true
  delete user["likes birds"];
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30,
  };

  let key = "likes birds";

  user[key] = true;      // the same, that user["likes birds"] = true;
}

/* ----- */
{
  let user = {
    name: "Jhon",
    age: 30
  };

  let key = prompt("What do you want to know about user?", "name / age");

  alert( user[key] );
}

/* ----- */
{
  let fruit = prompt("What fruit to buy?", "apple");

  let bag = {
    [fruit]: 5,
  };

  alert( bag.apple );
}

/* ----- */
{
  let fruit = 'apple';
  let bag = {
    [fruit + 'Computers']: 5,
  };

  alert( bag.appleComputers );     // 5
}


/* ----- */
// instead of this:
{
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }

  let user = makeUser("Jhon", 30);
  alert( user.name );          // Jhon
}

// we can use this:
{
  function amkeUser(name, age) {
    return {
      name,         // the same -- name: name,
      age           // the same -- age: age
    };
  }
}

/* ----- */
// check property
{
  let user = {};
  alert( user.noSuchProperty === undefined );   // true, it means - "property not"
}

/* ----- */
{
  let user = { name: "Jhon", age: 30 };

  alert( "age" in user );    // true,  user.age  -- exist 
  alert( "smth" in user );   // false, user.smth -- not exist
}

/* ----- */
{
  let user = { age: 30 };

  let key = "age";
  alert( key in user );   // true
}

/* ----- */
//for..in
{
  let user = {
    name: "Jhon",
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    alert( key );         // name, age, isAdmin
    alert( user[key] );   // Jhon, 30, true
  }
}

/* ----- */
{
  let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA",
  };

  for (let code in codes) {
    alert( code );     // 1, 41, 44, 49
  }
}

// we can add plus ahead codes:
{
  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA",
  };

  for (let code in codes) {
    alert( +code );     // 49, 41, 44, 1
  }
}

/* ----- */
{
  let user = { name: 'Jhon' };
  let admin = user;

  admin.name = 'Pete';
  alert( user.name );    // 'Pete'
}

/* ----- */
{
  let a = {};
  let b = a;

  alert( a == b );    // true
  alert( a === b );   // true
}
{
  let a = {};
  let b = {};

  alert( a == b );    // false
}

/* ----- */
{
  const user = { name: 'Jhon' };

  user.age = 25;
  alert( user.age );     // 25 -- not error
}

/* ----- */
// copy object
{
  let user = {
    name: 'Jhon',
    age: 30,
  };

  let clone = {};
  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = 'Pete';

  alert( user.name );    // Jhon
}

/* ----- */
{
  let user = { name: 'Jhon' };

  let permission1 = { canView: true };
  let permission2 = { canEdit: true };

  Object.assign(user, permission1, permission2);

  // now user = { name: 'Jhon', canView: true, canEdit: true }
}

/* ----- */
{
  let user = {
    name: 'Jhon',
    age: 30,
  };

  let clone = Object.assign({}, user);
}

/* ----- */
{
  let user = {
    name: 'Jhon',
    sizes: {
      height: 182,
      width: 50,
    }
  };

  let clone = Object.assign({}, user);

  alert( user.sizes === clone sizes );   // true

  user.sizes.width++;
  alert(clone.sizes.width);    // 51
}