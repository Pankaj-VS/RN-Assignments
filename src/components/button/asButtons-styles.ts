import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  button: TextStyle
  text: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
    gap: Spacing.space_12,
    marginTop: Spacing.space_86,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_8,
    color: COLORS.tundora,
    elevation: Spacing.space_8,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_32,
    paddingVertical: Spacing.space_11,
  },
  text: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
  },
})
