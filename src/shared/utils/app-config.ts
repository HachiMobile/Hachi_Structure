import { TEST } from '@env'
import { WIDTH, HEIGHT } from './responsive'
import {Platform, StatusBar} from "react-native";

const APP_CONFIG = {
    ENV: {
        TEST
    },
    APP_NAME: 'HACHI MOBILE',
    STORAGE_KEY: {
        THEME: 'HACHI THEME',
        IS_FIRST_TIME: 'HACHI IS_FIRST_TIME'
    },
    SCREEN: {
        WIDTH,
        HEIGHT
    },
    PLATFORM: Platform.OS,
    STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 20 : StatusBar?.currentHeight ?? 0
}

export {APP_CONFIG};
