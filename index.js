let receivesAFunction = (callback) => {
    callback();
};

let returnsANamedFunction = () => {
    let innerFunction = () => 10;
    return innerFunction
};

let returnsAnAnonymousFunction = () => {
  // return () => 11;
  return function() {
    11;
  };
};


// ok