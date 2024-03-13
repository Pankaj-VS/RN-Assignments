import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

import { Typography } from '../../theme/typography'
import { SPACING } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface Styles {
  container: ViewStyle
  subContainer: ViewStyle
  header: ViewStyle
  imageContainer: ImageStyle
  title: TextStyle
  listContainer: ViewStyle
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: SPACING.space_1,
  },
  subContainer: { flex: SPACING.space_1 },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  imageContainer: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: SPACING.space_18,
  },
  listContainer: {
    marginTop: SPACING.space_16,
  },
})
