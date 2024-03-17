import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/colors'
import { palette } from '../../theme/palette'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  audioIcon: ImageStyle
  audioIconBackground: ViewStyle
  completedIcon: ImageStyle
  container: ViewStyle
  details: ViewStyle
  detailsContainer: ViewStyle
  detailsSubContainer: ViewStyle
  imageBackgroundContainer: ViewStyle
  imageContainer: ViewStyle
  listenTitle: TextStyle
  overThinkerBackgroundImage: ImageStyle
  starIcon: ImageStyle
  timingDetails: TextStyle
  timingDetailsContainer: ViewStyle
  titleText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  audioIconBackground: {
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_66,
    elevation: Spacing.space_6,
    height: Spacing.space_36,
    shadowColor: palette.audioButtonShadow,
    shadowOffset: { width: Spacing.space_0, height: Spacing.space_3 },
    shadowOpacity: 0.1,
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
  },
  titleText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_20,
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
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_12,
    height: Spacing.space_18,
  },
  timingDetailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    gap: Spacing.space_8,
  },
  detailsSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  overThinkerBackgroundImage: {
    height: Spacing.space_52,
    width: Spacing.space_60,
  },
  container: {
    borderRadius: Spacing.space_16,
    flexDirection: 'row',
    gap: Spacing.space_16,
    paddingHorizontal: Spacing.space_20,
  },
  imageContainer: {
    marginVertical: Spacing.space_28,
  },
  detailsContainer: {
    flex: Spacing.space_1,
    gap: Spacing.space_4,
    marginVertical: Spacing.space_24,
  },
  imageBackgroundContainer: {
    borderRadius: Spacing.space_10,
    paddingBottom: Spacing.space_10,
    paddingHorizontal: Spacing.space_6,
    paddingTop: Spacing.space_10,
  },
})
