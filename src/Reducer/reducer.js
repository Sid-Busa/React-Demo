const initialState ={
    showModel:true,
    cityData :[],
    currentCity:'',
    isSelectCity:false
}

const reducer= (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_CITY":
        return {
            ...state,
            cityData: action.payload
        }
        case "SELECT_CITY":
            return {
                ...state,
                currentCity:action.payload,
                showModel:false
            }
        default:
            return state
    }

}

export default reducer