import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  notificationSubContainer: ViewStyle
  imageBody: ImageStyle
  textBody: TextStyle
  creationTime: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderBottomColor: COLORS.neutral[100],
    borderBottomWidth: Spacing.space_1,
    gap: Spacing.space_4,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_20,
    paddingVertical: Spacing.space_17,
  },
  notificationSubContainer: {
    flexDirection: 'row',
  },
  imageBody: {
    height: Spacing.space_48,
    width: Spacing.space_48,
  },
  textBody: {
    color: COLORS.dark,
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_14,
    paddingHorizontal: Spacing.space_20,
  },
  creationTime: {
    paddingHorizontal: Spacing.space_76,
  },
})
