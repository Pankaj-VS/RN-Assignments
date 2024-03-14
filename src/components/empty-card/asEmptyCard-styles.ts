import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageContainer: ImageStyle
  textContentContainer: ViewStyle
  textContainer: TextStyle
  subTextContainer: ViewStyle
  subText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    flex: Spacing.space_1,
    gap: Spacing.space_27,
    marginHorizontal: Spacing.space_20,
    marginTop: Spacing.space_184,
  },
  imageContainer: {
    height: Spacing.space_154,
    width: Spacing.space_154,
  },
  textContentContainer: {
    alignItems: 'center',
    gap: Spacing.space_8,
    justifyContent: 'center',
  },
  textContainer: {
    color: COLORS.tundora,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_24,
  },
  subTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_16,
  },
})
