import { 
  GET_PROJECTS,
  FILTER_PROJECTS
} from '../constants/index';

const initialState = [];

const projectReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_PROJECTS:
      let favourites = payload.filter((project, index) => {
        if(project.favourite === true) {
          return project
        } 
      })

			return {
        ...state, 
        all: payload,
        results: favourites
      }

		case FILTER_PROJECTS:
      let result = state.all.filter((project, index) => {
        if(payload.type === 'All') {
          return project
        } else if(project.type === payload.type){
          return project
        } else if(payload.type === "favourite" && project.favourite || payload.type === '' && project.favourite){
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
