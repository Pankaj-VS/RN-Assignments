const endpointOfChallenges:string='https://65f40eaf105614e654a1d144.mockapi.io/dashboard/getCards'

export const getChallengesData=async()=>{
    const response= await fetch(endpointOfChallenges)
    const data= await response.json()
    console.log(data)
    return data

    
}
getChallengesData()