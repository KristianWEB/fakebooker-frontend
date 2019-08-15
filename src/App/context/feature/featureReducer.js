import {EXAMPLE_TYPE} from '../types';

export default (state, action) => {
  switch (action.type) {
    case EXAMPLE_TYPE:
      return {
        ...state,
        data: {
            ...state.data,
            ...action.data,
        },
      };
    default:
      return state;
  }
}
