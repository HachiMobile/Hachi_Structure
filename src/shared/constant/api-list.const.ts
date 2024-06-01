import {DEFAULT_CONFIG} from "@/shared/constant/value.const.ts";

const { BASE_URL, AUTHEN_BASE_URL } = DEFAULT_CONFIG;

const PRE_FIX = {
    CONNECT: 'connect',
    PUBLIC: 'public',
    IDENTITY: 'identity'
}

export const API_LIST = {
    Home_GetBanner: `${BASE_URL}/${PRE_FIX.PUBLIC}/Home_GetBanner`,
    GetUserInfo: `${AUTHEN_BASE_URL}/${PRE_FIX.IDENTITY}/getuserinfo`,
    Login: `${AUTHEN_BASE_URL}/${PRE_FIX.CONNECT}/token`
}
