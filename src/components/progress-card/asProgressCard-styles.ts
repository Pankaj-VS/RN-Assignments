import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  activityImage: ImageStyle
  chart: ViewStyle
  title: TextStyle
  cadInfoContainer: ViewStyle
  progressPercent: TextStyle
  nextButton: ImageStyle
  buttonImage: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_16,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityImage: {
    backgroundColor: COLORS.accent[50],
    borderRadius: Spacing.space_100,
    height: Spacing.space_48,
    resizeMode: ResizeMode.contain,
    width: Spacing.space_48,
  },
  chart: {
    backgroundColor: COLORS.secondary[200],
    borderRadius: Spacing.space_100,
    marginHorizontal: Spacing.space_10,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    marginLeft: Spacing.space_14,
  },
  cadInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressPercent: {
    color: COLORS.charcoal,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_20,
  },
  nextButton: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  buttonImage: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
})
