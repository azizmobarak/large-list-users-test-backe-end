export interface ResponseResult {
    data?: any[];
    error?: any;
    code: number,
}


export function responseBuilder({ data, error, code }: ResponseResult): ResponseResult {
    if (data) {
        return {
            data,
            code,
        }
    }
    return {
        error,
        code,
    }
}