import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import { ASHeader } from '../../components/header/ASHeader'
import { ASProfileCard } from '../../components/profile-card/ASProfileCard'
import { COLORS } from '../../theme/colors'

import { ResizeMode, backWhite } from '../../constants/common-constants'
import { ProfileData, headerBackground } from '../../constants/profile-constants'

import { styles } from './profile-styles'

export const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={headerBackground}
        resizeMode={ResizeMode.cover}
        style={styles.profileImage}>
        <ASHeader
          image1={backWhite}
          backgroundColor="transparent"
          title={'Profile'}
          headerTextColor={COLORS.white}
        />
        <View style={styles.detailsSubcontainer}>
          <Text style={styles.detailsLabel}>Rohan Sharma</Text>
          <Text style={styles.detailsSubLabel}>rohan@gmail.com</Text>
          <Text style={styles.detailsSubLabel}>+91 0987654321</Text>
        </View>
      </ImageBackground>
      <View style={styles.subContainer}>
        {ProfileData.map((item, index) => (
          <View key={index} style={styles.profileOptions}>
            <ASProfileCard item={item} />
          </View>
        ))}
      </View>
    </View>
  )
}
