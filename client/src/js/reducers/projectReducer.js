import { 
  GET_PROJECTS,
  FILTER_PROJECTS
} from '../constants/index';

const initialState = [];

const projectReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_PROJECTS:

			return {
        ...state, 
        all: payload,
        results: payload
      }
				

		case FILTER_PROJECTS:
      let result = state.all.filter((project, index) => {
        if(payload.type === 'All') {
          return project
        } else if(project.type === payload.type){
          return project
        }
      })

      return {
        ...state,
        results: result
      }
		
    default:
			return state;
  }
}

export default projectReducer;
