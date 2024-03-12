import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

import {FONT_FAMILY} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';
import {COLORS} from '../../theme/colors';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  headerContainer: ViewStyle;
  iconContainer: ImageStyle;
  title: TextStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: SPACING.space_1,
  },
  subContainer: {flex: SPACING.space_1},
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  iconContainer: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
  title: {
    color: COLORS.neutral700,
    fontFamily: FONT_FAMILY.fraunces,
    fontSize: SPACING.space_18,
  },
  listContainer: {
    marginTop: SPACING.space_16,
  },
});
