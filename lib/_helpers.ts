export const getApiBaseUrl = (): string => {
    return process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL! : 'localhost:3000/api';
}

export const getSorter = <T extends {}>(...keys: Array<keyof T>) => {
    return (a: T, b: T) => {
        let counter = 0;
        for (const key of keys) {
            if (a[key] < b[key]) counter--
            if (a[key] > b[key]) counter++
        }
        return counter;
    }
}