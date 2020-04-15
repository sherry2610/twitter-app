export const SET_AUTH_ID = 'SET_AUTH_ID'

export function setAuthedUser (id){
  return  {
    type:SET_AUTH_ID,
    id,
}
}


