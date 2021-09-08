import { FETCH_SUCCESS } from "../actions";
import { FETCH_START } from "../actions";
const initialState ={
    
    anime: '',
    character:'',
    quote:'',
    isFetching: false,
    

}

export const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case (FETCH_START):
            return ({
              ...state,
              isFetching: true
            })
        case FETCH_SUCCESS:
            return{
                ...state,
                anime: action.payload.anime,
                character: action.payload.character,
                quote: action.payload.quote,
                isFetching: false
            }
        default:
            return state;
    }
}