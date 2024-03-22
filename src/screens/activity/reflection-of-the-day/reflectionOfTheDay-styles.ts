import { StyleSheet } from 'react-native'
import { COLORS } from '../../../theme/colors'
import { Spacing } from '../../../theme/spacing'
import { Typography } from '../../../theme/typography'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary[600],
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  subContainer2: {
    width: Spacing.space_335,
    height: Spacing.space_546,
    paddingVertical: Spacing.space_32,
    paddingHorizontal: Spacing.space_24,
    borderRadius: Spacing.space_16,
    backgroundColor: COLORS.white,
  },
  subContainer3: {
    height: Spacing.space_434,
    borderRadius: Spacing.space_8,
    paddingVertical: Spacing.space_20,
    paddingHorizontal: Spacing.space_20,
    backgroundColor: COLORS.primary[50],
  },
  txt: {
    fontFamily: Typography.primary['medium'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
  subContainer4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_20,
  },
  button: {
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    color: COLORS.primary[600],
  },
  buttonInvisible: {
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
    color: COLORS.white,
  },
  progressText: {
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_21,
    color: COLORS.white,
    marginBottom: Spacing.space_8,
  },
  progressBar: {
    marginBottom: Spacing.space_22,
  },
  effect1: {
    backgroundColor: COLORS.primary[300],
    height: Spacing.space_12,
    width: '80%',
    borderBottomEndRadius: Spacing.space_12,
    borderBottomLeftRadius: Spacing.space_12,
  },
  effect2: {
    backgroundColor: COLORS.primary[500],
    height: Spacing.space_12,
    width: '70%',
    borderBottomEndRadius: Spacing.space_12,
    borderBottomLeftRadius: Spacing.space_12,
  },
})

