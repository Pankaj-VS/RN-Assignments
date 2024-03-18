import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  container: ViewStyle
  date: TextStyle
  subContainer: ViewStyle
  title: TextStyle
  nextIcon: ImageStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: Spacing.space_1,
    paddingBottom: Spacing.space_4,
    paddingHorizontal: Spacing.space_12,
    paddingTop: Spacing.space_12,
  },
  date: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_22,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Spacing.space_12,
  },
  title: {
    color: COLORS.secondary[500],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
  },
  nextIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
    resizeMode: ResizeMode.contain,
  },
})
