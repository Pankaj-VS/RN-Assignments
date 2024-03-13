import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

interface Styles {
  container: ViewStyle
  imageContainer: ImageStyle
  textContentContainer: ViewStyle
  textContainer: TextStyle
  subTextContainer: ViewStyle
  subText: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    gap: SPACING.space_27,
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_184,
  },
  imageContainer: {
    height: SPACING.space_154,
    width: SPACING.space_154,
  },
  textContentContainer: {
    alignItems: 'center',
    gap: SPACING.space_8,
    justifyContent: 'center',
  },
  textContainer: {
    color: COLORS.tundora,
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_24,
  },
  subTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_16,
  },
})
