export interface ResponseResult {
    data?: any[];
    error?: any;
    code: number,
    currentPage?: number,
    lenght?: number,
    lastPage?: number,
}


export function responseBuilder({ data, error, code, currentPage, lenght, lastPage }: ResponseResult): ResponseResult {
    if (data) {
        return {
            data,
            code,
            currentPage,
            lenght,
            lastPage,
        }
    }
    return {
        error,
        code,
    }
}