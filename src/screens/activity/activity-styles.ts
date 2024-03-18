import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  button: ViewStyle
  text: TextStyle
  activeButton: ViewStyle
  activeText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    paddingTop: Spacing.space_8,
  },
  subContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.space_20,
  },
  button: {
    backgroundColor: COLORS.neutral[100],
    borderRadius: Spacing.space_8,
    flex: Spacing.space_1,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
  },
  text: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_12,
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: COLORS.primary[500],
  },
  activeText: {
    color: COLORS.white,
  },
})
