import {StyleSheet} from "react-native";
import {palette} from "@/theme/themes";

const styleCard = StyleSheet.create({
  parrentView: {
    position: "relative"
  },
  text: {
    color: palette.Red_100,
    fontSize: 18,
    fontFamily: "Sans",
    position: "absolute",
    left: 13, top: -7
  },
  plus: {
    position: "absolute", top: -7, left: 22
  }
})

export default styleCard
