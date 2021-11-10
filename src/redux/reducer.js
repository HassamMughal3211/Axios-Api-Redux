var initialState = null;
var GetReducer = (state = initialState, action) => {
    var { type, payload } = action;
    switch (type) {
        case "GETDATA":
            return payload;

        default:
            return state;

    }
}
export default GetReducer;