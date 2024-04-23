#!/usr/bin/node

const callMoby = (x, theFunction) => {
	if (x > 0) {
		theFuction();
		callMoby(x - 1), theFunction);
	}
};

module.exports.callMoby = callMoby;
