// Remove elements that have repeated more than once
// ex. [1, 2, 1, 3, 4]

const arrayProblem = (arr) => {
  // array to store indexes of first element that has repeated
  const indexArr = [];

  // Filter arr for elements that have repeated more than once
  const filteredArr = arr.filter((el, index) => {
    arr.indexOf(el) !== index && indexArr.push(arr.indexOf(el));
    return arr.indexOf(el) === index;
  });

  indexArr.map((el) => {
    return filteredArr.splice(el, 1);
  });

  return filteredArr;
};

module.exports = arrayProblem;
