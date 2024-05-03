import {Alert, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native"
import * as React from "react"
import {useEffect, useState} from "react"
import {SvgXml} from "react-native-svg"
import IconSearch from "@/assets/icons/IconSearch.ts"
import {palette} from "@/theme/themes"


interface SearchBarProps {
  placeholder?: string,
  handleLiveSearch?: (value: string) => void,
  handleSearch?: (value: string) => void,
  filteredData: string[],
}
const CSearchBar: React.FC<SearchBarProps> = (SearchBarProps) => {
  const [input, setInput] = useState('')
  const [filterData, setFilterData] = useState<any[]>(SearchBarProps.filteredData)
  const [isVisibleFlatlist, setVisibleFlatlist] = useState(true)

  useEffect(() => {
    setFilterData(SearchBarProps.filteredData);
  }, [SearchBarProps.filteredData, isVisibleFlatlist]);

  const handleInputChange = (text: string) => {
    if (SearchBarProps.handleSearch) {
      SearchBarProps.handleSearch(text.trimStart())
    }

    setVisibleFlatlist(true)
  };

  // enum onLiveSearch = (text: string) => {
  //   if (isVisibleFlatlist == true) {
  //     setVisibleFlatlist(false)
  //   }
  //   if (SearchBarProps.handleLiveSearch) {
  //     SearchBarProps.handleLiveSearch(text);
  //   }

  // }

  const onFocusInput = () => {
    setVisibleFlatlist(false)
  }

  return (
    <TouchableWithoutFeedback onPress={() => setVisibleFlatlist(true)}>
      <View>
        <View style={styleSearchBar.viewInput}>
          <SvgXml style={styleSearchBar.icon} xml={IconSearch} />
          <TextInput
            placeholder={SearchBarProps.placeholder}
            onFocus={onFocusInput}
            //onChangeText={onLiveSearch}
            onSubmitEditing={(event) => handleInputChange(event.nativeEvent.text)} // on press search
            style={styleSearchBar.inputSearch} />
        </View>

        <View>
          {isVisibleFlatlist == false && (
            <FlatList
              style={styleSearchBar.flatList}
              data={filterData}
              //ListHeaderComponent={<Text>Sản phẩm xu hướng</Text>}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => Alert.alert("Infomation" + ' ' + item)}>
                  <Text>{item}</Text>
                </Pressable>
              )}
              keyExtractor={item => item}
              showsVerticalScrollIndicator
              scrollEnabled={false}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styleSearchBar = StyleSheet.create({

  viewInput: {
    flexDirection: "row",
    alignItems: "center"
  },

  inputSearch: {
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
    paddingLeft: 45,
    paddingRight: 45,
    backgroundColor: '#FFF'

  },

  icon: {
    position: "absolute",
    left: 20,
    zIndex: 1


  },

  flatList: {
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 200,
    borderColor: palette.Green_gray_200,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    width: '100%',
  }
})
export default CSearchBar
