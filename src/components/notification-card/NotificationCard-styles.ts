import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { SPACING } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface Styles {
  container: ViewStyle
  notificationSubContainer: ViewStyle
  imageBody: ImageStyle
  textBody: TextStyle
  creationTime: ViewStyle
}
export const styles = StyleSheet.create<Styles>({
  container: {
    borderBottomColor: COLORS.neutral[100],
    borderBottomWidth: SPACING.space_1,
    gap: SPACING.space_4,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_17,
  },
  notificationSubContainer: {
    flexDirection: 'row',
  },
  imageBody: {
    height: SPACING.space_48,
    width: SPACING.space_48,
  },
  textBody: {
    color: COLORS.black,
    fontFamily: Typography.primary.medium,
    fontSize: SPACING.space_14,
    paddingHorizontal: SPACING.space_20,
  },
  creationTime: {
    paddingHorizontal: SPACING.space_76,
  },
})
