import {families} from '../font'
import {mvs} from "@/shared/utils/responsive.ts";

//Available styles class for header
const heading = {
    headlineBold: {
        fontFamily: families.bold,
        fontSize: mvs(34),
        lineHeight: mvs(44)
    },
    headlineSemiBold: {
        fontFamily: families.semiBold,
        fontSize: mvs(34),
        lineHeight: mvs(40)
    },
    headlineMedium: {
        fontFamily: families.medium,
        fontSize: mvs(24),
        lineHeight: mvs(28)
    },
    headlineRegular: {
        fontFamily: families.regular,
        fontSize: mvs(20),
        lineHeight: mvs(24)
    },
    headlineSemi: {
        fontFamily: families.semiBold,
        fontSize: mvs(18),
        lineHeight: mvs(22)
    }
} as const

export { heading }
