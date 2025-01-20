export interface StxOptions {
    url: string;
}

export function stx(options: StxOptions) {
    console.log(options.url);
}