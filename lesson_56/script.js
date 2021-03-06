"use strict";

{
  function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }

  // Example of using
  loadScript('/my/script.js');

  // newFunction();   -- error, this function doesn't exist
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
  }

  loadScript('/my/script.js', function() {
    newFunction();
  })
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Nice, script ${script.src} is upload`);
    alert( _ );   // function, declared in loaded script
  })
}

/* ----- */
{
  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.anerror = () => callback(new Error(`Failed to load script ${src}`));

    document.head.append(script);
  }

  loadScript('/my/script.js', function(error, script) {
    if (error) {
      // process the error
    } else {
      // script loaded successfully
    }
  })
}

/* -----
// It's bad
{
  loadScript('1.js', function(error, script) {

    if (error) {
      handlerError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handlerError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handlerError(error);
            } else {
              // ... and etc...
            }
          });

        }
      })
    }
  });
} */

/* -----
// It's the same, and very good
{
  loadScript('1.js', step1);

  function step1(error, script) {
    if (error) {
      handlerError(error);
    } else {
      // ...
      loadScript('2.js', step2);
    }
  }

  function step2(error, script) {
    if (error) {
      handlerError(error);
    } else {
      // ...
      loadScript('3.js', step3);
    }
  }

  function step3(error, script) {
    if (error) {
      handlerError(error);
    } else {
      // ... and etc...
    }
  }
} */