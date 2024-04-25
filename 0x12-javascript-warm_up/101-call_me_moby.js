#!/usr/bin/node

const callMeMoby = (x, theFunction) => {
  if (x > 0) {
    theFuction();
    callMeMoby(x - 1, theFunction);
  }
};

module.exports.callMeMoby = callMeMoby;
