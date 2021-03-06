"use strict";

/* ----- */
{
  function pow(x, n) {
    let result = 1;

    for (let i = 0;  i < n; i++) {
      result *= x;
    }

    return result;
  }

  alert( pow(2, 3) );   // 8
}

/* ----- */
{
  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }

  alert( pow(2, 3) );   // 8
}

/* ----- */
{
  function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }

  alert( pow(2, 4) );   // 16
}

/* ----- */
{
  let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function sumSalaries(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
      let sum = 0;
      
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep);
      }

      return sum;
    }
  }

  alert( sumSalaries(company) );   // 6700
}