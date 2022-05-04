export const getApiBaseUrl = (): string => {
    return process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL! : 'localhost:3000/api';
}