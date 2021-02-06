export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    token: "BQCI8O5pWngRc7ekFRbIghhq_445UsN8oLXw-H8OwaPZcAip_WGePk-AW1wBaG_Pv3_iJEw2afSOQMzQjXI8OFtcPdRmpYqIxYIOMckn8NT0a_2nUWoLlKbwBEEw83Cb_WlyJ2rMxh1kxDo9wtcs6Hyc736t8Tqb3guvsPLGr67g7hMPL_cQ",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}

export default reducer;