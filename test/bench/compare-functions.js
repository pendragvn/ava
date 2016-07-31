'use strict';

var test = require('tap').test;
var average = require('../../bench/compare-functions').average;
var standardDeviation = require('../../bench/compare-functions').standardDeviation;
var prepStats = require('../../bench/compare-functions').prepStats;

var times = [9.338, 6.884, 6.131, 6.069, 6.247, 6.22, 6.098, 6.153, 6.008, 6.033, 6.126];

var data = [{
	passed: true,
	shouldFail: false,
	time: 9.338
}, {
	passed: true,
	shouldFail: false,
	time: 6.884
}, {
	passed: true,
	shouldFail: false,
	time: 6.131
}, {
	passed: true,
	shouldFail: false,
	time: 6.069
}, {
	passed: true,
	shouldFail: false,
	time: 6.247
}, {
	passed: true,
	shouldFail: false,
	time: 6.22
}, {
	passed: true,
	shouldFail: false,
	time: 6.098
}, {
	passed: true,
	shouldFail: false,
	time: 6.153
}, {
	passed: true,
	shouldFail: false,
	time: 6.008
}, {
	passed: true,
	shouldFail: false,
	time: 6.033
}, {
	passed: true,
	shouldFail: false,
	time: 6.126
}];

test('returns average benchmark time', function (t) {
	var result = average(times);

	t.is(result, 6.482454545454545);
	t.end();
});

test('returns standard deviation of benchmark times', function (t) {
	var result = standardDeviation(times);

	t.is(result, 0.9315035122791698);
	t.end();
});

test('returns prepared stats object', function (t) {
	var result = prepStats(data);

	t.deepEqual(result, {
		mean: 6.218,
		median: 6.131,
		stdDev: '0.2439',
		min: 6.033,
		max: 6.884
	});
	t.end();
});
