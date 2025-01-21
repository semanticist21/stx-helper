import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export function useStx() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const add = (params: Record<string, unknown>) => {
    }

    const remove = (params: Record<string, unknown>) => {
    }

    const get = (params: Record<string, unknown>) => {
    }

    return [searchParams, { add, remove, get }]
}