import {DEFAULT_CONFIG} from "@/shared/constant/value.const.ts";
import {useEffect, useState} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse, ResponseType} from 'axios';

export const instance = axios.create({
    baseURL: DEFAULT_CONFIG.BE_URL,
    timeout: 0,
    headers: {}
})


export const useApiHook = <T>(url: string, params?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<T> = await axios.post(`${DEFAULT_CONFIG.BASE_URL}/${url}`, params);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error getting the data");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useApiHook;
