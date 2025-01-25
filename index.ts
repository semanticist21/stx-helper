import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

export function useStx() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const stx = {};

  const setStx = {
    add: () => {},
    remove: () => {},
    get: () => {},
  };

  return [stx, setStx];
}
