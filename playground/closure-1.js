function makeFunc() {
  var name = 'JavaScript';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
