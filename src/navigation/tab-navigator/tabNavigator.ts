import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  tabBar: ViewStyle
  navIcon: ImageStyle
}
export const styles = StyleSheet.create<IStyles>({
  tabBar: {
    height: Spacing.space_88,
    paddingHorizontal: Spacing.space_24,
    paddingVertical:Spacing.space_20,
    borderTopLeftRadius: Spacing.space_16,
    borderTopRightRadius: Spacing.space_16,
    position: 'absolute',
  },
  navIcon: {
    width: Spacing.space_24,
    height: Spacing.space_24,
  },
})
