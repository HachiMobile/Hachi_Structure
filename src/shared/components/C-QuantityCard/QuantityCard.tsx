import {Text, View} from "react-native"
import IconCardItem from "@/assets/icons/IconCardItem.ts"
import IconPlus from "@/assets/icons/IconPlus.ts"
import * as React from "react"
import {useState} from "react"
import {SvgXml} from "react-native-svg"
import styleCard from "./QuantityCard.style"

const QuantityCard = () => {
  const [text, setText] = useState(0)
  return (
    <View >
      <SvgXml xml={IconCardItem} />
      <SvgXml style={styleCard.plus} xml={IconPlus} />
      <Text style={styleCard.text}>{text}</Text>
    </View>
  )
}

export default QuantityCard
