import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  profileOptionsSubcontainer: ViewStyle
  nextIcon: ImageStyle
  profileOptionsLabel: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  profileOptionsSubcontainer: {
    alignItems: 'center',
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: Spacing.space_0_5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.space_20,
  },
  nextIcon: {
    height: Spacing.space_12,
    width: Spacing.space_6,
  },
  profileOptionsLabel: {
    color: COLORS.dark,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
})
