import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  subContainer: ViewStyle;
  navContainer: ViewStyle;
  iconContainer: ImageStyle;
  title: TextStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  subContainer: {flex: 1},
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
  },
  title: {
    fontFamily: 'Fraunces_72pt-Bold',
    fontSize: 18,
    fontWeight: '200',
    color: '#292F36',
  },
  listContainer: {
    marginTop: 16,
  },
});
