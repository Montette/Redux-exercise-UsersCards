import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){

            case actionTypes.ADD_PERSON:
            const id = Math.random();
          
            return {
                ...state,
                persons: state.persons.concat({name: action.name, id: id, age:action.age})
            }

            case actionTypes.REMOVE_PERSON:  
            const updatedArray = state.persons.filter((result) => result.id !== action.id)
            return {
                ...state,
                persons: updatedArray
            }
        default:
            return state
    }
};

export default reducer;