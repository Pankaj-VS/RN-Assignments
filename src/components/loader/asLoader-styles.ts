import { StyleSheet, ViewStyle } from 'react-native'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  horizontal: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
    justifyContent: 'center',
    alignItems:'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Spacing.space_10,
  },
})