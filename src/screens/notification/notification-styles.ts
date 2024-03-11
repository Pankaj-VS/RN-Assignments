import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  notificationContainer: ViewStyle;
  notificationSubContainer: ViewStyle;
  imageBody: ViewStyle;
  textBody: TextStyle;
  creationTime: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  notificationContainer: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 4,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E2E8EB',
  },
  notificationSubContainer: {
    flexDirection: 'row',
  },
  imageBody: {
    width: 48,
    height: 48,
  },
  textBody: {
    fontFamily: 'Quicksand-Medium',
    color: '#000000',
    fontSize: 14,
    paddingHorizontal: 20,
  },
  creationTime: {
    paddingHorizontal: 76,
  },
});
