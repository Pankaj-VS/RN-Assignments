import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/colors'
import { palette } from '../../theme/palette'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  audioIconBackground: ViewStyle
  audioIcon: ImageStyle
  timingDetails: TextStyle
  titleText: TextStyle
  starIcon: ImageStyle
  completedIcon: ImageStyle
  listenTitle: TextStyle
  timingDetailsContainer: ViewStyle
  details: ViewStyle
  detailsMainContainer: ViewStyle
  detailsSubContainer: ViewStyle
  overThinkerGrey: ImageStyle
  container: ViewStyle
  imageContainer: ViewStyle
  detailsContainer: ViewStyle
  imageBackgroundContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  audioIconBackground: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_66,
    elevation: Spacing.space_6,
    height: Spacing.space_36,
    shadowColor: palette.audioButtonShadow,
    shadowOffset: { width: Spacing.space_0, height: Spacing.space_3 },
    shadowOpacity: 0.2,
    shadowRadius: Spacing.space_6,
    width: Spacing.space_36,
  },
  audioIcon: {
    height: Spacing.space_12,
    marginLeft: Spacing.space_12,
    marginTop: Spacing.space_12,
    width: Spacing.space_12,
  },
  timingDetails: {
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
    paddingVertical: Spacing.space_9,
  },
  titleText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_21,
  },
  starIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  completedIcon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  listenTitle: {
    color: COLORS.neutral[500],
    fontFamily: 'Quicksand-bold',
    fontSize: Spacing.space_12,
    height: Spacing.space_18,
    letterSpacing: 0.02,
  },
  timingDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    gap: Spacing.space_8,
  },
  detailsMainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsSubContainer: {
    gap: Spacing.space_4,
  },
  overThinkerGrey: {
    height: Spacing.space_60,
    width: Spacing.space_60,
  },
  container: {
    backgroundColor: COLORS.primary[50],
    flexDirection: 'row',
    gap: Spacing.space_16,
    paddingHorizontal: Spacing.space_36,
  },
  imageContainer: {
    marginVertical: Spacing.space_28,
    paddingVertical: Spacing.space_6,
  },
  detailsContainer: {
    flex: Spacing.space_1,
    marginVertical: Spacing.space_24,
  },
  imageBackgroundContainer: {
    backgroundColor: COLORS.primary[100],
  },
})
