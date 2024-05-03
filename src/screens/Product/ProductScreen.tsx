import {Button, Text, View} from "react-native"
import * as React from 'react';

const Product: React.FC = (props: any) => {
  return (
    <View>
      <Text>Product aaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <Button onPress={() => props.navigation.navigate('Product-Detail')} title="Product Detail" />
      <Button onPress={() => props.navigation.navigate('Home')} title='Back Home' />
    </View>

  )
}

export default Product
