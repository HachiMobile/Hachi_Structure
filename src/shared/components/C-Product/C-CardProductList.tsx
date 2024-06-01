import * as React from "react";
import { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { palette } from "@/theme/themes.ts";
import { SvgXml } from "react-native-svg";
import IconArrowUp from "@/assets/icons/IconArrowUp.ts";
import CCardProductItem from "./C-CardProductItem.tsx";

interface CardList {
  dataProduct: any[],
  isAppearButton?: boolean
}

const CardList = (props) => {
  const { dataProduct } = props;
  const windowWidth = Dimensions.get('window').width - 28; // Lấy chiều rộng của màn hình 64 là padding của view layout 32 + 32
  const numColumns = Math.floor(windowWidth / 165); // TÍnh số cột 165 là width của item product card
  const totalItemWidth = numColumns * 165; // Tính tổng chiều rộng
  const totalSpacing = windowWidth - totalItemWidth; // Tính khoảng trống còn lại
  //enum paddingLeft = totalSpacing / 2; // tính padding
  //enum paddingRight = totalSpacing / 4;
  const [visibleItemCount, setVisibleItemCount] = useState(4); // State hiển thị tối thiểu số lượng item
  const isAppearButton = dataProduct.isAppearButton // Biến trạng thái xuất hiện nút xem thêm

  const handleLoadMore = () => {
    setVisibleItemCount(dataProduct.length); // Hiển thị tất cả item khi nhấn vào nút "Xem thêm"
  };

  return (
    <View style={[styles.container,]}>
      <FlatList
        data={dataProduct.slice(0, visibleItemCount)}
        numColumns={numColumns}
        renderItem={({ item }) =>
          <View style={{ marginBottom: totalSpacing }}>
            <CCardProductItem
              dataProduct={item}
            // NameProduct={item.NameProduct}
            // Thumbnail={item.Thumbnail}
            // Price={item.Price}
            // Discount={item.Discount}
            // PriceDiscount={item.PriceDiscount}
            // ImgGift={item.ImgGift}
            // TitleGift={item.TitleGift}

            />
          </View>}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
      {visibleItemCount < dataProduct.length && isAppearButton == true && (
        <View style={styles.posBtnAddMore}>
          <TouchableOpacity style={styles.btnAddMore} onPress={handleLoadMore}>
            <Text style={styles.btnAddMoreText}>Xem thêm</Text>
            <SvgXml xml={IconArrowUp} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 10,
    minHeight: 700
  },

  posBtnAddMore: {
    flexDirection: 'row', justifyContent: 'center'
  },
  btnAddMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: palette.Green_gray_200,
    borderRadius: 20,
    backgroundColor: '#FFFF',
    borderWidth: 1,
    width: 117,
    height: 32
  },
  btnAddMoreText: {
    color: palette.Darkgreen_650,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 6
  }
});

export default CardList;
