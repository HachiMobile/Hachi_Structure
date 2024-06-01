import {families} from '../font'
import {mvs} from "@/shared/utils/responsive.ts";

//Available text style classes
const body = {
    // Paragraph
    paragraphMedium: {
        fontFamily: families.medium,
        fontSize: mvs(16),
        lineHeight: mvs(20)
    },
    paragraphRegular14: {
        fontFamily: families.regular,
        fontSize: mvs(14),
        lineHeight: mvs(16)
    },
    paragraphRegular12: {
        fontFamily: families.regular,
        fontSize: mvs(12),
        lineHeight: mvs(14)
    },
    // Button Text
    buttonText: {
        fontFamily: families.medium,
        fontSize: mvs(20),
        lineHeight: mvs(24)
    }
} as const

export { body }
