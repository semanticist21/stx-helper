import { beforeEach, describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useStx } from ".";
// import {useStx} from ".";

describe("tests", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/test?foo=bar&bar=123");
  });

  test("Check an initial value", () => {
    const {
      result: { current },
    } = renderHook(() => useStx());
    expect(current.stx.params).toEqual({ foo: "bar", bar: "123" });
  });

  test("Check 'Add' function", async () => {
    const {
      result: { current },
    } = renderHook(() => useStx());

    act(() => {
      current.helper.add({
        baz: true,
      });
    });

    expect(window.location.search).toEqual("foo=bar&bar123&bar=true");
  });
});
