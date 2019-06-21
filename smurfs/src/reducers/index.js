/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, GET_SMURFS, UPDATE_SMURF, ERROR,CLEAR } from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const init={
  smurfs: [],
  fetching: false,
  updating: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state=init,action)=>{
  switch(action.type){
    case LOADING:
      return {...state,fetching:true,error:null,updating:false}
    case GET_SMURFS:
      return {...state,fetching:false,smurfs:action.payload}
    case UPDATE_SMURF:
      return {...state,updating:action.payload}
    case ERROR:
      return{...state,fetching:false,error:action.payload}
    case CLEAR:
      return{...state,updating:false}
    default:
      return state;
  }
}