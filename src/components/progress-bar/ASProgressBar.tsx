import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './asProgressBar-styles'

const ASProgressBar = ({size}) => {
  return (
    <View >
      <View style={styles.subContainer1}  >
      <Text style={styles.txt} >{size}</Text>
      </View>
      
      <View style={styles.subContainer2}  >
        <View style={styles.container} >
          <View style={styles.subContainer} ></View>
        </View>

      </View>

    </View>
  )
}

export default ASProgressBar