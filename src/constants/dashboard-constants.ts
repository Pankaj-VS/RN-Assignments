import { ImageSourcePropType } from 'react-native'
import { COLORS } from '../theme/colors'

export const completedIcon = require('../assets/icons/complete.png')
export const markedFavouriteIcon = require('../assets/icons/markedFavourite.png')
export const notMarkedFavouriteIcon = require('../assets/icons/notMarkedFavourite.png')
export const audioIcon = require('../assets/icons/audio.png')

export const overthinkerGrey = require('../assets/icons/overthinkerGrey.png')

export interface IMasteryCardDetails {
  image: ImageSourcePropType
  subheading: string
  heading: string
  timingDetails: string
  iscompleted: boolean
  isfavourateMarked: boolean
  backgroundColor: string
}
export const masteryCardDetails: IMasteryCardDetails = {
  image: require('../assets/icons/overthinkerGrey.png'),
  subheading: 'Listen',
  heading: 'Mastery of the day',
  timingDetails: '6am to 9am',
  iscompleted: true,
  isfavourateMarked: true,
  backgroundColor: COLORS.primary[50],
}

export interface IMasteryOftheDayCardProp {
  masteryCardDetails: IMasteryCardDetails
}
export interface IChallengeDetail {
  id: number
  title: string
  isFav: string
  startingTime: string
  endingTime: string
  isCompleted: string
}

export interface IChallengeDetailsCardProps {
  ChallengeDetails: IChallengeDetail
}

interface IImageDetails {
  [key: string]: ImageSourcePropType
}
export const imageDetails: IImageDetails = {
  ['D-active']: require('../assets/images/dActive.png'),
  ['Reminder of the day']: require('../assets/images/reminder.png'),
  ['Reflection of the day']: require('../assets/images/reflection.png'),
}

interface BackgroundColorDetails {
  [key: string]: string
}
export const backgroundColorDetails: BackgroundColorDetails = {
  'D-active': COLORS.secondary[100],
  'Reminder of the day': COLORS.accent[100],
  'Reflection of the day': COLORS.primary[100],
}

export const headerBackground = require('../assets/images/dashboardHeaderBackground.png')
export const calendarImage = require('../assets/icons/calendar.png')
export const overthinkerImage = require('../assets/icons/overthinkerWhite.png')
