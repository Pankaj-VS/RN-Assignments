import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  calendarImage: ImageStyle
  date: TextStyle
  dateDetailsContainer: ViewStyle
  dateDetailsSubContainer: ViewStyle
  dayCounterDetails: TextStyle
  overThinkerText: TextStyle
  overThinkerImage: ImageStyle
  overThinkerImageContainer: ViewStyle
  overthinkerDetailsContainer: ViewStyle
  overthinkerDetailsSubContainer: ViewStyle
  subcontainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  overThinkerImageContainer: {
    marginLeft: Spacing.space_224,
  },
  dayCounterDetails: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
  },
  overThinkerText: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_24,
    lineHeight: Spacing.space_32,
  },
  subcontainer: {
    paddingLeft: Spacing.space_20,
    paddingVertical: Spacing.space_20,
  },
  overthinkerDetailsSubContainer: {
    bottom: Spacing.space_24,
    marginLeft: Spacing.space_24,
    marginTop: Spacing.space_166,
    position: 'absolute',
  },
  calendarImage: {
    height: Spacing.space_16,
    marginVertical: Spacing.space_2,
    width: Spacing.space_16,
  },
  dateDetailsContainer: {
    gap: Spacing.space_8,
  },
  dateDetailsSubContainer: {
    flexDirection: 'row',
    gap: Spacing.space_8,
    height: Spacing.space_21,
  },
  overthinkerDetailsContainer: {
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  date: {
    color: COLORS.white,
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
  },
  overThinkerImage: {
    height: Spacing.space_146,
    marginLeft: Spacing.space_4,
    marginRight: Spacing.space_4,
    marginVertical: Spacing.space_12,
    width: Spacing.space_148,
  },
})
