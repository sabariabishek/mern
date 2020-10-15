import { 
  GET_PROJECTS,
  FILTER_PROJECTS
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_PROJECTS:
			console.log(payload)

			return [
				...state, payload
				]

		case FILTER_PROJECTS:

		
    default:
			return state;
  }
}

export default rootReducer;
