// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
	Object.is = (paramA, paramB) => {
		if (Number.isNaN(paramA) && Number.isNaN(paramB)) return true;

		if (paramA === 0 && paramB === 0 && 1 / paramA === 1 / paramB) {
			return true;
		} else if (paramA === 0 && paramB === 0 && 1 / paramA !== 1 / paramB) {
			return false;
		}

		if (paramA === paramB) return true;
		return false;
	};
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
