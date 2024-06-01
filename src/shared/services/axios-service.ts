import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { zustandMMKVStorage } from "@/shared/utils/storage.ts";

type RequestPayload = {
    url: string,
    method: 'get' | 'post' | 'delete' | 'put',
    params?: any,
    headers?: Record<string, string> | null;
    formData?: FormData;
}

export const useApiHook = <T>({ url, method, params = null, headers = null, formData }: RequestPayload) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const token = zustandMMKVStorage.getItem('token');
                const config: AxiosRequestConfig = {
                    headers: {
                        ...headers,
                        'Content-Type': formData ? 'multipart/form-data' : 'application/json',
                        'Authorization': token ? `Bearer ${token}` : '',
                    },
                };

                let response: AxiosResponse<T>;
                if (formData) {
                    response = await axios[method.toLowerCase()](url, formData, config);
                } else if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                    response = await axios[method.toLowerCase()](url, { ...config, params });
                } else {
                    response = await axios[method.toLowerCase()](url, params, config);
                }

                setData(response.data);
                setError(null);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data?.message || 'An error occurred');
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, params, headers, formData]);

    return { data, loading, error };
};

export default useApiHook;
