import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLORS.white,
    flex: Spacing.space_1,
    marginBottom: Spacing.space_76,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.space_24,
  },
})
