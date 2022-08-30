import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/mensagem'

const Mensagem = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text style={styles.label}>
        Meu app é sobre isso
      </Text>
    </View>
  )
}


export default Mensagem