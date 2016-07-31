'use strict';

function average(data) {
	var sum = data.reduce(function (sum, value) {
		return sum + value;
	}, 0);

	var avg = sum / data.length;
	return avg;
}

function standardDeviation(values) {
	var avg = average(values);
	var squareDiffs = values.map(function (value) {
		var diff = value - avg;
		var sqrDiff = diff * diff;
		return sqrDiff;
	});
	var avgSquareDiff = average(squareDiffs);
	var stdDev = Math.sqrt(avgSquareDiff);
	return stdDev;
}

function prepStats(times) {
	times = times
		.map(function (time) {
			return time.time;
		})
		.sort(function (timeA, timeB) {
			return timeA - timeB;
		});

	// remove fastest and slowest
	times = times.slice(1, times.length - 1);

	var sum = times.reduce(function (a, b) {
		return a + b;
	}, 0);

	return {
		mean: Math.round((sum / times.length) * 1000) / 1000,
		median: times[Math.floor(times.length / 2)],
		stdDev: standardDeviation(times).toFixed(4),
		min: times[0],
		max: times[times.length - 1]
	};
}

module.exports = {
	average,
	standardDeviation,
	prepStats
};
