import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    flex: Spacing.space_1,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.space_24,
  },
})
