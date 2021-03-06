/**
 * Composing: Utils
 */

const utils = {
  trace: x => y => console.log(x, y),

  pipe: (...fns) => input => fns.reduce((allFns, currentFn) => currentFn(allFns), input),

  compose: (...fns) => input => fns.reduceRight((allFns, currentFn) => currentFn(allFns), input),

  filter: f => xs => xs.filter(f),

  head: items => items[0],

  setUser: user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age
  }),

  setResponse: user => `${user.fullName} is ${user.age} year(s) old.`
};

module.exports = utils;
