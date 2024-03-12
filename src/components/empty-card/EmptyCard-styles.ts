import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {SPACING} from '../../theme/spacing';
import {FONT_FAMILY} from '../../theme/typography';
import {COLORS} from '../../theme/colors';

interface Styles {
  container: ViewStyle;
  imageContainer: ImageStyle;
  contentContainer: ViewStyle;
  headingContainer: TextStyle;
  subHeadingContainer: ViewStyle;
  subHeading: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    flex: SPACING.space_1,
    gap: SPACING.space_27,
    justifyContent: 'center',
    marginHorizontal: SPACING.space_20,
    marginTop: SPACING.space_184,
  },
  imageContainer: {
    height: SPACING.space_154,
    width: SPACING.space_154,
  },
  contentContainer: {
    alignItems: 'center',
    gap: SPACING.space_8,
    justifyContent: 'center',
  },
  headingContainer: {
    color: COLORS.Tundora,
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: SPACING.space_24,
  },
  subHeadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    color: COLORS.neutral700,
    fontFamily: FONT_FAMILY.quickSandMedium,
    fontSize: SPACING.space_16,
  },
});
