import { API } from "../../constants/api-constants"

export const getChallengesData = async (setLoading: Function, setChallengesData: Function) => {
  try {
    const response = await fetch(API.CHALLENGES_API)
    const data = await response.json()
    setChallengesData(data)
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
