import { COLORS } from '../theme/colors'

export const completedIcon = require('../../assets/icons/complete.png')
export const markedFavouriteIcon = require('../../assets/icons/markedFavourite.png')
export const notMarkedFavouriteIcon = require('../../assets/icons/notMarkedFavourite.png')
export const audioIcon = require('../../assets/icons/audio.png')

export const overthinkerGrey = require('../assets/icons/overthinkerGrey.png')
export const dActive = require('../assets/images/dActive.png')
export const reflection = require('../assets/images/reflection.png')
export const reminder = require('../assets/images/reminder.png')
export interface IChallengeDetailsCard {
  image: any
  subheading: string
  heading: string
  timingDetails: string
  iscompleted: boolean
  isfavourateMarked: boolean
  backgroundColor: string
}

export interface IChallengeDetail {
  id: number
  title: string
  isFav: boolean
  startingTime: string
  endingTime: string
  isCompleted: boolean
}

export const masteryCardDetails: IChallengeDetailsCard = {
  image: require('../assets/icons/overthinkerGrey.png'),
  subheading: 'Listen',
  heading: 'Mastery of the day',
  timingDetails: '6am to 9am',
  iscompleted: true,
  isfavourateMarked: true,
  backgroundColor: COLORS.primary[50],
}

export interface IChallengeDetailsCardProps {
  image: any
  subheading: string
  heading: string
  timingDetails: string
  iscompleted: boolean
  isfavourateMarked: boolean
  backgroundColor: string
}

export enum imageDetails {
  'D-active' = dActive,
  'Reminder of the day' = reflection,
  'Reflection of the day' = reminder,
}

export interface IChallengeDetailsCardProps {
  id: number
  title: string
  isFav: string
  startingTime: string
  endingTime: string
  isCompleted: string
}

interface BackgroundColorDetails {
  [key: string]: string
}
export const backgroundColorDetails: BackgroundColorDetails = {
  'D-active': COLORS.secondary[100],
  'Reminder of the day': COLORS.accent[100],
  'Reflection of the day': COLORS.primary[100],
}


export const headerBackground = require('../../assets/images/dashboardHeaderBackground.png')
export const calendarImage = require('../../assets/icons/calendar.png')
export const overthinkerImage = require('../../assets/icons/overthinkerWhite.png')
