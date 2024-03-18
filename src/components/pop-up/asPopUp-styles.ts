import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { COLORS } from '../../theme/colors'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

import { ResizeMode } from '../../constants/common-constants'

interface IStyles {
  centeredView: ViewStyle
  modalView: ViewStyle
  modalImage: ImageStyle
  chart: ViewStyle
  textContainer: ViewStyle
  modalTitle: TextStyle
  progressContainer: ViewStyle
  modalDescriptionText: TextStyle
  modalProgressText: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  centeredView: {
    backgroundColor: '#00000066',
    flex: Spacing.space_1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.space_25,
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: Spacing.space_16,
    elevation: Spacing.space_5,
    gap: Spacing.space_20,
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_40,
  },
  modalImage: {
    height: Spacing.space_267,
    resizeMode: ResizeMode.contain,
    width: Spacing.space_267,
  },
  chart: {
    backgroundColor: COLORS.secondary[200],
    borderRadius: Spacing.space_2,
  },
  textContainer: { gap: Spacing.space_4 },
  modalTitle: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_24,
    textAlign: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_8,
    justifyContent: 'center',
  },
  modalDescriptionText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.primary.medium,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_17,
    textAlign: 'center',
  },
  modalProgressText: {
    color: COLORS.neutral[700],
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
  },
})
