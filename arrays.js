var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var myArray = [1];
  var newArray = ['foo', ...myArray];
    return newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  var thisArray = [1];
  return thisArray.unshift('foo');
}

function addElementToEndOfArray() {
  var myArray = [1]
  var newArray = [...myArray, 'foo']
    return newArray
}

function destructivelyAddElementToEndOfArray() {
  var myArray = [1]
  myArray.push('foo')
    return myArray
}