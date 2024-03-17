import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { COLORS } from '../../../theme/colors'
import { Spacing } from '../../../theme/spacing'
import { Typography } from '../../../theme/typography'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  allReflectionImageContainer: ViewStyle
  allReflectionImage: ImageStyle
  button: ViewStyle
  text: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
    marginTop: Spacing.space_32,
    gap: Spacing.space_32,
    marginBottom: Spacing.space_162,
  },
  subContainer: {
    borderBottomColor: COLORS.primary[100],
    borderBottomWidth: Spacing.space_1,
  },
  allReflectionImageContainer: {
    borderRadius: Spacing.space_16,
    overflow: 'hidden',
  },
  allReflectionImage: {
    height: Spacing.space_148,
    width: '100%',
  },
  button: {
    backgroundColor: Colors.white,
    borderRadius: Spacing.space_8,
    bottom: Spacing.space_20,
    paddingHorizontal: Spacing.space_16,
    paddingVertical: Spacing.space_12,
    position: 'absolute',
    right: Spacing.space_16,
  },
  text: {
    fontSize: Spacing.space_12,
    fontFamily: Typography.primary.semiBold,
    lineHeight: Spacing.space_18,
    color: COLORS.neutral[700],
  },
})
