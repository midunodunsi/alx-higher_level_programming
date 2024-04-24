#!/usr/bin/node

exports.nbOccurrences = function (list, searchElement) {
	return list.reduce((a, v) => ( v === searchElement ? a + 1 : a), 0);
};
