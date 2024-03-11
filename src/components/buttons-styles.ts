import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  buttonContainer: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    marginTop: 86,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontWeight: '600',
    fontSize: 12,
    color: '#292F36',
  },
});
