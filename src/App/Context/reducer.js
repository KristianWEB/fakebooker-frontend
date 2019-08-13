import ACTION_NAMES from '../constants';

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_NAMES.NAME:
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
