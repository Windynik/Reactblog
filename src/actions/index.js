export const FETCH_POSTS = 'fetch_post;'
import axios from 'axios'

const root_url='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=Keklords'

export function fetchPosts(){

    const requests=axios.get(`${root_url}/post${API_KEY}`)
    return{
        type:FETCH_POSTS,
        payload:requests
    };
}
