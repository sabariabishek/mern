import { 
  GET_POSTS
} from '../constants/index';

const initialState = [];

const postReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_POSTS:

			return {
        ...state, 
        all: payload,
        results: payload,
        loading: false
      }
		
    default:
			return state;
  }
}

export default postReducer;
