#!/usr/bin/node

const addMe = (number, theFunction) => {
  number++;
  theFunction(number);
};

module.exports.addMe = addMe;
