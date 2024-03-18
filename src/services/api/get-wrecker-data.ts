import { API } from '../../constants/api-constants'
import {IWreckerCard} from '../../constants/assesment-constants'
export const getWreckerData = async (setWreckerData: Function, setLoadingWreckerData: Function) => {
  try {
    const response = await fetch(API.WRECKERDATA_API)
    const data = await response.json()
    const topThreeWreckerdata = data.sort((a:IWreckerCard, b:IWreckerCard) => parseInt(b.progress) -parseInt (a.progress)).slice(0, 3)
    setWreckerData(topThreeWreckerdata)
  } catch (error) {
    console.log(error)
  } finally {
    setLoadingWreckerData(false)
  }
}
