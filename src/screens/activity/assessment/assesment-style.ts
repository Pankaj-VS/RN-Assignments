import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../../theme/colors'
import { Spacing } from '../../../theme/spacing'
import { Typography } from '../../../theme/typography'

interface IStyles {
  assesmentTab: ViewStyle
  assesmentTabText: TextStyle
  body: ViewStyle
  bodyHeader: ViewStyle
  bodyHeaderContainer: ViewStyle
  bodyHeaderSubDetails: TextStyle
  header: TextStyle
  headerTabs: ViewStyle
  headerText: TextStyle
  icon: ImageStyle
  iconContainer: ViewStyle
  progressBar: ViewStyle
  progressTab: ViewStyle
  progressTabText: TextStyle
  scoreBarLinearGradient: ViewStyle
  scoreContainer: ViewStyle
  scoreText: TextStyle
  subHeaderTabs: ViewStyle
  survivingText: TextStyle
  tabs: ViewStyle
}
export const styles = StyleSheet.create<IStyles>({
  iconContainer: {
    alignItems: 'center',
  },
  bodyHeaderSubDetails: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
    textAlign: 'center',
  },
  survivingText: {
    color: COLORS.primary[50],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreBarLinearGradient: {
    borderRadius: Spacing.space_8,
    flex: Spacing.space_1,
  },
  progressBar: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderRadius: Spacing.space_100,
    borderWidth: Spacing.space_1,
    height: Spacing.space_12,
    width: Spacing.space_140,
  },
  scoreText: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_32,
    marginHorizontal: Spacing.space_9,
  },
  bodyHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_32,
    justifyContent: 'space-between',
  },
  icon: {
    height: Spacing.space_40,
    width: Spacing.space_40,
  },
  bodyHeader: {
    gap: Spacing.space_16,
    marginHorizontal: Spacing.space_20,
    marginTop: Spacing.space_31,
  },
  body: {
    backgroundColor: COLORS.primary[500],
    borderTopLeftRadius: Spacing.space_16,
    borderTopRightRadius: Spacing.space_16,
    flex: Spacing.space_1,
    gap: Spacing.space_28,
    marginTop: Spacing.space_30,
  },

  assesmentTabText: {
    color: COLORS.white,
    fontFamily: Typography.secondary.bold,
  },
  header: {
    alignItems: 'center',
    fontSize: Spacing.space_18,
    lineHeight: Spacing.space_26,
    marginTop: Spacing.space_16,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_16,
  },
  progressTabText: {
    color: COLORS.primary[500],
    fontFamily: Typography.secondary.bold,
  },
  headerTabs: {
    paddingHorizontal: Spacing.space_20,
  },
  subHeaderTabs: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabs: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_58,
    paddingVertical: Spacing.space_12,
  },
  progressTab: {
    backgroundColor: COLORS.neutral[100],
    borderRadius: Spacing.space_8,
  },
  assesmentTab: {
    backgroundColor: COLORS.primary[500],
    borderRadius: Spacing.space_8,
  },
  headerText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_18,
    lineHeight: Spacing.space_26,
    textAlign: 'center',
  },
})
