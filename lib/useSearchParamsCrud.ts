"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchParamsCrud() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function get(queryString: string) {
    return searchParams.get(queryString);
  }

  function set(queryString: string, value: string) {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set(queryString, value);
    router.push(pathname + "?" + urlSearchParams.toString());
  }

  function clear(queryString: string) {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.delete(queryString);
    router.push(pathname + "?" + urlSearchParams.toString());
  }

  function clearAll() {
    router.push(pathname);
  }

  return {
    get,
    set,
    clear,
    clearAll,
  };
}
