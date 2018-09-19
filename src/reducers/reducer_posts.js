import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions'
import _ from 'lodash'

export default function(state={},action){
    switch(action.type){
        case DELETE_POST:
            return _.omit(state,action.payload)     //this returns a new state object with the particular state object not present.
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id') 
        case FETCH_POST:
            // const post =action.payload.data;
            // return{...state, }
            // newState[post.id]=post;
            // return newState
            return {...state, [action.payload.data.id]:action.payload.data}     //does the same thing as the 4 lines above, what this actually does is that when a new id is called and a new post is fetch , it , being a state , is added as a part of the overall state of the program.
        default:
        return state;
    }
}