import qs from "query-string";
import { useEffect, useState } from "react";

type Options = {
  disableReplace?: boolean;
};

export function useStx(qsOptions?: qs.StringifyOptions) {
  const [search, setSearch] = useState<Record<string, unknown>>({});

  useEffect(() => {
    const searchParams = qs.parse(window.location.search);
    setSearch(searchParams);
  }, []);

  return {
    helper: {
      add: (record: Record<string, boolean>, options?: Options) => {
        const newParams = Object.assign({ ...search }, record);
        setSearch(newParams);

        if (options?.disableReplace) {
          return;
        }

        const pathname = window.location.pathname;
        window.location.replace(
          `${pathname}?${qs.stringify(search, qsOptions)}`,
        );
      },
      remove: (keys: Record<string, boolean>, options?: Options) => {
        const newParams = { ...search };

        for (const [key, value] of Object.entries(keys)) {
          if (value) delete newParams[key];
        }

        setSearch(newParams);

        if (options?.disableReplace) {
          return;
        }

        const pathname = window.location.pathname;
        window.location.replace(
          `${pathname}?${qs.stringify(search, qsOptions)}`,
        );
      },
      clear: () => {
        setSearch({});

        const pathname = window.location.pathname;
        window.location.replace(pathname);
      },
    },

    stx: {
      link: (url?: string) => {
        const _url = url ?? window.location.pathname;

        return `${_url}?${qs.stringify(search, qsOptions)}`;
      },
      params: search,
    },
  };
}
