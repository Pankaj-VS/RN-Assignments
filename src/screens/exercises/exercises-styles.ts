import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

import { SPACING } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'
import { Typography } from '../../theme/typography'

interface Styles {
  container: ViewStyle
  header: ViewStyle
  text: TextStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: SPACING.space_1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_64,
    paddingVertical: SPACING.space_16,
  },
  text: {
    fontSize: SPACING.space_18,
    fontFamily: Typography.secondary.bold,
    color: COLORS.neutral[700],
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.space_24,
  },
})
