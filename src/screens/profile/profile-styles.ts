import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  detailsLabel: TextStyle
  detailsSubLabel: TextStyle
  detailsSubcontainer: ViewStyle
  profileImage: ImageStyle
  profileOptions: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
  },
  profileImage: {
    height: Spacing.space_203,
  },
  detailsSubcontainer: {
    gap: Spacing.space_12,
    marginTop: Spacing.space_28,
    paddingLeft: Spacing.space_21,
  },
  detailsLabel: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
  detailsSubLabel: {
    color: COLORS.white,
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_17,
  },
  subContainer: {
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_20,
    paddingTop: Spacing.space_32,
  },
  profileOptions: {
    justifyContent: 'center',
  },
})
