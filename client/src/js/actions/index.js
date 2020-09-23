import { 
  GET_PROJECTS,
  FILTER_PROJECTS  
} from '../constants/index';

export const loadProjects = payload => {
  console.log(payload)
  return {
      type: GET_PROJECTS,
      payload
  }
}

export const filterProjects = payload => {
  return {
      type: FILTER_PROJECTS,
      payload
  }
}
