import {ALL,ONE} from '../helpers/endpoints'
import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF='ADD_SMURF'
export const GET_SMURFS='GET_SMURFS'
export const UPDATE_SMURF='UPDATE_SMURF'
export const DELETE_SMURF='DELETE_SMURF'
export const LOADING='LOADING'
export const ERROR='ERROR'
export const CLEAR="CLEAR"

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs=()=>dispatch=>{
  dispatch({type:LOADING})
  let request=axios.get(ALL)
  request.then(({data})=>{
    dispatch({type:GET_SMURFS,payload:data})
  }).catch(err=>{
    dispatch({type:ERROR,payload:err.response.statusText})
  })
}

export const addSmurf=e=>dispatch=>{
  dispatch({type:LOADING})
  let request=axios.post(ALL,e)
  request.then(({data})=>{
    dispatch({type:GET_SMURFS,payload:data})
  }).catch(err=>{
    dispatch({type:ERROR,payload:err.response.statusText})
  })
}

export const updateSmurf=e=>dispatch=>{
  dispatch({type:LOADING})
  console.log(ONE(e.id));
  let request=axios.put(ONE(e.id),e)
  request.then(({data})=>{
    dispatch({type:GET_SMURFS,payload:data})
  }).catch(err=>{
    console.error(err.response);
    dispatch({type:ERROR,payload:err.response.statusText})
  })
}

export const deleteSmurf=e=>dispatch=>{
  dispatch({type:LOADING})
  let request=axios.delete(ONE(e))
  request.then(({data})=>{
    dispatch({type:GET_SMURFS,payload:data})
  }).catch(err=>{
    dispatch({type:ERROR,payload:err.response.statusText})
  })
}

export const toUpdate=e=>{
  return {type:UPDATE_SMURF,payload:e}
}

export const clear=e=>{
  return {type:CLEAR}
}