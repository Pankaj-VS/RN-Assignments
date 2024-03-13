import { COLORS } from '../theme/colors'

interface IExerciseCardInfoType {
  imageSource: number
  textColor: string
}
export const ExerciseCardInfo: { [key: string]: IExerciseCardInfoType } = {
  'Outer Ring': {
    imageSource: require('../assets/images/outerring.png'),
    textColor: COLORS.secondary[600],
  },
  'Focus': {
    imageSource: require('../assets/images/focus.png'),
    textColor: COLORS.primary[700],
  },
  'Follow': {
    imageSource: require('../assets/images/follow.png'),
    textColor: COLORS.neutral[600],
  },
  'Scan': {
    imageSource: require('../assets/images/scan.png'),
    textColor: COLORS.accent[700],
  },
  'Square': {
    imageSource: require('../assets/images/square.png'),
    textColor: COLORS.primary[700],
  },
}

export const buttonsTime: number[] = [2, 4, 8]
