import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";
import queryString from 'query-string';

export function useStx() {
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const router = useRouter();

	const ctx = {
		href: (url?: string, options? : {
			query: queryString.StringifyOptions
		}) => {
			const _url = url ?? pathname;
			const params = Object.fromEntries(searchParams.entries());

			return `${_url}?${queryString.stringify(params)}`;
		},
		push: (url?: string) => {
			const _url = url ?? pathname;
			const params = Object.fromEntries(searchParams.entries());

			router.push(_url);
		},
		record: () => {},
	};

	const setCtx = {
		add: (searchParams: Record<string, unknown>) => {},
		remove: (searchParams: Record<string, unknown>) => {},
	};

	return [ctx, setCtx];
}
