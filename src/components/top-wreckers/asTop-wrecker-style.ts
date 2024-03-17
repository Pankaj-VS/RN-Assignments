import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  topWreckers: ViewStyle
  nextButtonIcon: ImageStyle
  headingText: TextStyle
  headingContainer: ViewStyle
  container: ViewStyle
  SubdetailsText: TextStyle
  SubdetailsContainer: ViewStyle
}
export const styles = StyleSheet.create<IStyles>({
  SubdetailsText: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
    textAlign: 'right',
  },
  nextButtonIcon: {
    height: Spacing.space_8,
    marginTop: Spacing.space_9,
    marginVertical: Spacing.space_4,
    width: Spacing.space_4,
  },
  SubdetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_4,
    justifyContent: 'center',
    marginBottom: Spacing.space_24,
  },
  topWreckers: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: Spacing.space_8,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary[700],
    gap: Spacing.space_24,
  },
  headingContainer: {
    marginTop: Spacing.space_24,
  },
  headingText: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_18,
    lineHeight: Spacing.space_26,
    textAlign: 'center',
  },
})
