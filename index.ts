import qs from "query-string";
import { useEffect, useState } from "react";

type SearchParam<T> = Record<string, T>;

export function useStx<T = unknown>() {
  const [search, setSearch] = useState<SearchParam<T>>({});

  useEffect(() => {
    const searchParams = qs.parse(window.location.search);
    setSearch(searchParams as SearchParam<T>);
  }, []);

  return {
    helper: {
      add: (record: Record<string, boolean>) => {
        const newParams = Object.assign({ ...search }, record);
        setSearch(newParams);
      },
      remove: (...keys: string[]) => {
        const newParams = { ...search };

        for (const key of keys) {
          delete newParams[key];
        }

        setSearch(newParams);
      },
    },

    stx: {
      link: (url?: string, options?: qs.StringifyOptions) => {
        const _url = url ?? window.location.pathname;

        return `${_url}?${qs.stringify(search, options)}`;
      },
    },
  };
}
