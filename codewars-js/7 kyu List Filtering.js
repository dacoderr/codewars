/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */

function filter_list(l) {
    const numbers = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] === 'number') {
        numbers.push(l[i]);
      }
    }
    return numbers;
  }