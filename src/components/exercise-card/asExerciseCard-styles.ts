import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageBackground: ViewStyle
  imageHeadingContainer: ViewStyle
  imageHeading: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    borderRadius: Spacing.space_16,
    height: Spacing.space_148,
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: Spacing.space_335,
  },
  imageBackground: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  imageHeadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_118,
    paddingVertical: Spacing.space_8,
  },
  imageHeading: {
    fontSize: Spacing.space_15,
    fontFamily: Typography.secondary.bold,
  },
})
