import {MScreenModel} from "@/shared/models/M-Screen.model.ts";
import {HomeScreen} from "@/screens";
import MenuScreen from "@/screens/Menu/ScrMenu.tsx";
import {ProductDetailScreen} from "@/screens/Product";
import {ENUM_SCREEN_NAME} from "@/shared/enum/screen-name.enum.ts";
import {ComboScreen} from "@/screens/Combo";
import BlogDetailScreen from "@/screens/Blog/ScrBlogDetail.tsx";


export const ScreenList: MScreenModel[] = [
    {
        name: ENUM_SCREEN_NAME.HOME_SCREEN,
        component: HomeScreen,
        children: [],
    },
    {
        name: ENUM_SCREEN_NAME.MENU_SCREEN,
        component: MenuScreen,
        children: [],
    },
    {
        name: ENUM_SCREEN_NAME.PRODUCT_DETAIL_SCREEN,
        component: ProductDetailScreen,
        children: [],
    },
    {
        name: ENUM_SCREEN_NAME.COMBO_SCREEN,
        component: ComboScreen,
        children: [],
    },
    {
        name: ENUM_SCREEN_NAME.BLOG_DETAIL_SCREEN,
        component: BlogDetailScreen,
        children: [],
    },

]
