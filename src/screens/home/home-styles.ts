import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/spacing';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: SPACING.space_4,
  },
  subContainer: {
    borderRadius: SPACING.space_10,
    borderWidth: SPACING.space_1,
    borderColor: '#E4E4E499',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: SPACING.space_32,
    width: SPACING.space_56,
    borderWidth: SPACING.space_1,
    borderColor: '#E4E4E499',
    borderRadius: SPACING.space_8,
    justifyContent: 'space-between',
    alignItems:"center",
  },
  textButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:SPACING.space_8,
    marginHorizontal:SPACING.space_12,
  },
  button: {
    width: SPACING.space_16,
    height: SPACING.space_16,
  },
  text2:{
    color:"#999999",
    marginLeft:SPACING.space_12,
  },
  title: {
    color:"#171725",
  },
});
