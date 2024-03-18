import React, { useEffect, useState } from 'react'
import { FlatList, ImageBackground, Text } from 'react-native'

import { ASHeader } from '../../../../components/header/ASHeader'
import { ASMyReflectionsCard } from '../../../../components/my-reflections-card/ASMyReflectionsCard'
import { IMyReflectionsData } from '../../../../types/activity-types'
import { getScreensData } from '../../../../services/api/get-screens-data'

import { myReflectionsBackground } from '../../../../constants/activity-constants'
import { backGreen } from '../../../../constants/common-constants'
import { API } from '../../../../constants/api-constants'

import { styles } from './myReflections-styles'

export const MyReflections = () => {
  const [myReflections, setMyReflections] = useState<IMyReflectionsData[]>([])

  const getMyReflectionsListData = async () => {
    const res = await getScreensData(API.MY_REFLECTIONS_API)
    if (res.success) {
      setMyReflections(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getMyReflectionsListData()
  }, [])
  return (
    <ImageBackground source={myReflectionsBackground} style={styles.container}>
      <ASHeader image1={backGreen} title={'My Reflections'} canGoToPrevoiusScreen={true} />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Loading Data...</Text>}
        data={myReflections}
        renderItem={({ item }) => <ASMyReflectionsCard date={item.date} title={item.title} />}
      />
    </ImageBackground>
  )
}
