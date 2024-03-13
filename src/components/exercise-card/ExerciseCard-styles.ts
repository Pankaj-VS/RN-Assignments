import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

import { SPACING } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface Styles {
  container: ViewStyle
  imageBackground: ViewStyle
  imageHeadingContainer: ViewStyle
  imageHeading: TextStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: SPACING.space_16,
    height: SPACING.space_148,
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: SPACING.space_335,
  },
  imageBackground: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  imageHeadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_118,
    paddingVertical: SPACING.space_8,
  },
  imageHeading: {
    fontSize: SPACING.space_15,
    fontFamily: Typography.secondary.bold,
  },
})
