function myEach(collection, callback) {
	const items = Array.isArray(collection)
		? collection
		: Object.values(collection);
	for (let i = 0; i < items.length; i++) {
		callback(items[i]);
	}
	return collection;
}

function myMap(collection, callback) {
	const items = Array.isArray(collection)
		? collection
		: Object.values(collection);
	const newArr = [];
	for (let i = 0; i < items.length; i++) {
		newArr.push(callback(items[i]));
	}
	return newArr;
}

function myReduce(collection, callback, acc) {
	const items = Array.isArray(collection)
		? collection
		: Object.values(collection);
	let accumulator = acc !== undefined ? acc : items[0];
	const startIdx = acc !== undefined ? 0 : 1;

	for (let i = startIdx; i < items.length; i++) {
		accumulator = callback(accumulator, items[i], collection);
	}
	return accumulator;
}

function myFind(collection, predicate) {
	const items = Array.isArray(collection)
		? collection
		: Object.values(collection);
	for (let i = 0; i < items.length; i++) {
		if (predicate(items[i])) return items[i];
	}
	return undefined;
}

function myFilter(collection, predicate) {
	const items = Array.isArray(collection)
		? collection
		: Object.values(collection);
	const result = [];
	for (let i = 0; i < items.length; i++) {
		if (predicate(items[i])) result.push(items[i]);
	}
	return result;
}

function mySize(collection) {
	return Array.isArray(collection)
		? collection.length
		: Object.keys(collection).length;
}

function myFirst(array, n = 1) {
	return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
	return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
	return Object.keys(object);
}

function myValues(object) {
	return Object.values(object);
}

// Helper functions
function arraysEqual(arrA, arrB) {
	if (arrA.length !== arrB.length) return false;
	for (let idx = 0; idx < arrA.length; idx++) {
		if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
			arraysEqual(arrA[idx], arrB[idx]);
		} else if (arrA[idx] !== arrB[idx]) {
			return false;
		}
	}
	return true;
}

function objectsEqual(objA, objB) {
	return JSON.stringify(objA) === JSON.stringify(objB);
}
