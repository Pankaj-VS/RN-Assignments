import { COLORS } from '../theme/colors'

const overthinkerGrey = require('../assets/icons/overthinkerGrey.png')
const dActive = require('../assets/images/dActive.png')
const reflection = require('../assets/images/reflection.png')
const reminder = require('../assets/images/reminder.png')
export interface IChallengeDeatilsCard {
  img: any
  subheading: string
  heading: string
  timmingDetails: string
  iscompleted: boolean
  isfavourateMarked: boolean
  backgroundColor: string
}

export interface IChallengeDeatil {
  id: number
  title: string
  isFav: boolean
  startingTime: string
  endingTime: string
  isCompleted: boolean
}

export const masteryCardDetails: IChallengeDeatilsCard = {
  img: require('../assets/icons/overthinkerGrey.png'),
  subheading: 'Listen',
  heading: 'Mastery of the day',
  timmingDetails: '6am to 9am',
  iscompleted: true,
  isfavourateMarked: true,
  backgroundColor: COLORS.primary[50],
}

export interface IChallengeDeatilsCardProps {
  img: any
  subheading: string
  heading: string
  timmingDetails: string
  iscompleted: boolean
  isfavourateMarked: boolean
  backgroundColor: string
}

export enum imageDetails {
  'D-active' = dActive,
  'Reminder of the day' = reflection,
  'Reflection of the day' = reminder,
}

export interface IChallengeDeatilsCardProps {
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
