import {palette} from "@/theme/themes";
import React, {useState} from "react";
import {Alert, Image, StyleSheet, Text, View} from "react-native";
import QuantityCard from "@/shared/components/C-QuantityCard/QuantityCard";
import LinearGradient from "react-native-linear-gradient";
import {SearchBar} from "@/shared/components";


const Header = () => {
  const mockData = ['Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g', 'Kẹo muối khoáng chất Bourbon vị bưởi 104g']
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleSearch = (keyword: string) => {
    Alert.alert(keyword)
  };
  const handleLiveSearch = (keyword: string) => {
    if (keyword === '') {
      setFilteredData([]);
    } else {
      const filtered = mockData.filter(item =>
        item.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <View>
      {/* Banner header */}
      <View style={styles.bannerHeader}>

        <Text style={styles.linearBannerText}>Giờ vàng Kamoku</Text>
        <View style={{ justifyContent: 'center' }}>
          <LinearGradient colors={['rgb(1,181,210)', 'rgba(44,225,57,1)']} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={styles.frameLinearBanner}>
            <Text style={[{ fontWeight: '700', textAlign: 'center' }]}>10h-12h Thứ 3 , Thứ 5 </Text>
          </LinearGradient>
        </View>
        <Text style={styles.linearBannerText}>hàng tuần</Text>

      </View>
      {/* Banner header */}

      <View style={styles.headerBottom}>
        <View style={styles.headerBottomFirst}>
          <Image source={require('@/assets/images/LogoHachiHachi.png')}></Image>

          <View style={{ marginTop: 6 }}>
            <QuantityCard />
          </View>
        </View>

        <View>
          <SearchBar placeholder="Tìm sản phẩm" handleSearch={handleSearch}
            handleLiveSearch={handleLiveSearch} filteredData={filteredData}></SearchBar>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  //#region style banner header top
  bannerHeader: {
    width: '100%',
    height: 40,
    backgroundColor: palette.Lightgreen_100,
    color: palette.Darkgreen_TextBanner,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  frameLinearBanner: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    marginLeft: 10,
    height: 22,
  },

  linearBannerText: {
    color: palette.Darkgreen_900,
    //fontWeight: "700",
    textAlignVertical: 'center'
  },
  //#endregion

  //#region style header bottom
  headerBottom: {
    flexDirection: 'column',
    paddingVertical: 14,
    paddingHorizontal: 16
  },

  headerBottomFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14
  },

  headerBottomTextInput: {
    width: '100%',
    height: 40,
    borderColor: palette.Green_gray_200,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 30,
    paddingRight: 30
  }
  //#endregion
})

export default Header
