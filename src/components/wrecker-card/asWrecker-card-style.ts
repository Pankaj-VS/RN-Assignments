import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  cardContainer: ViewStyle
  detailsContainer: ViewStyle
  detailsSubContainer: ViewStyle
  wreckerImage: ImageStyle
  imageContainer: ViewStyle
  progressPercentage: TextStyle
  title: TextStyle
  chart: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  detailsContainer: {
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
    textAlign: 'center',
  },
  detailsSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercentage: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_64,
    height: Spacing.space_76,
    justifyContent: 'center',
    marginHorizontal: Spacing.space_20,
    paddingHorizontal: Spacing.space_3,
    paddingVertical: Spacing.space_3,
    width: Spacing.space_76,
  },
  cardContainer: {
    gap: Spacing.space_8,
  },
  wreckerImage: {
    height: Spacing.space_60,
    resizeMode: 'cover',
    width: Spacing.space_50,
  },
  chart: {
    backgroundColor: COLORS.secondary[200],
    borderRadius: Spacing.space_2,
    borderWidth: Spacing.space_0,
  },
})
