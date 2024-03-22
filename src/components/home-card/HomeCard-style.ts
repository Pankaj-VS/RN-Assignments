import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/spacing';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: SPACING.space_1,
    borderRadius: SPACING.space_10,
    borderColor: '#E4E4E499',
    padding:SPACING.space_24,
    margin:SPACING.space_8,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {},
  upwardDownwardImage: {
    width: SPACING.space_12,
    height: SPACING.space_8,
    marginLeft:SPACING.space_12,
  },
  flag: {
    width: SPACING.space_44,
    height: SPACING.space_32,
    marginRight:SPACING.space_8,
    borderRadius:SPACING.space_2,
  },
});
