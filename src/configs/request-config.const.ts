import axios from "axios";
import {DEFAULT_CONFIG} from "@/shared/constant/value.const.ts";

export const instance = axios.create({
    baseURL: DEFAULT_CONFIG.BE_URL,
    timeout: 0,
    headers: {}
})
