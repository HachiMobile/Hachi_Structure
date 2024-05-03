import {families} from '../font'
import {mvs} from "@/shared/utils/responsive.ts";

//Available styles class for header
const heading = {
    headlineBold: {
        fontFamily: families.Bold_PlusJakartaSans,
        fontSize: mvs(34),
        lineHeight: mvs(44)
    },
    headlineSemiBold: {
        fontFamily: families.SemiBold_PlusJakartaSans,
        fontSize: mvs(34),
        lineHeight: mvs(40)
    },
    headlineMedium: {
        fontFamily: families.Medium_PlusJakartaSans,
        fontSize: mvs(24),
        lineHeight: mvs(28)
    },
    headlineRegular: {
        fontFamily: families.Regular_PlusJakartaSans,
        fontSize: mvs(20),
        lineHeight: mvs(24)
    },
    headlineSemi: {
        fontFamily: families.SemiBold_PlusJakartaSans,
        fontSize: mvs(18),
        lineHeight: mvs(22)
    }
} as const

export { heading }
