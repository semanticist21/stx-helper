import {beforeEach, describe, expect, test} from "vitest";
import {renderHook} from "@testing-library/react";
// import {useStx} from ".";

describe("test", () => {
	beforeEach(() => {
		window.history.replaceState({}, "", "/test?foo=bar&bar=123");
	});

	test("Check an initial value", () => {
		// const {
		// 	result: {current},
		// } = renderHook(() => useStx());
		// expect(current.stx.params).toEqual({foo: "bar", bar: "123"});
	});
});
