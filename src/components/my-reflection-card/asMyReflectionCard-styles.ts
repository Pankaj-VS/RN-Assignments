import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 376,
    height: 71,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 4,
    borderBottomColor: '#D0F7F1',
    borderBottomWidth: 0.5,
  },
  subContainer1: {
    fontFamily: 'Fraunces',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22.4,
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#E84C8D',
    fontFamily: 'Quicksand',
    fontWeight: '700',
    lineHeight: 21,
    fontSize: 14,
  },
  img: {
    height: 16,
    width: 16,
  },
})
