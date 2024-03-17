import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageContainer: ImageStyle
  title: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: Spacing.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_16,
  },
  imageContainer: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
  title: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_18,
  },
})
