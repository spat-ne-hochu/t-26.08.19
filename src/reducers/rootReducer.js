const initialState = {
  isLoading: true,
  isError: false,
  period: 7,
  value: 'Yield',
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PERIOD':
      return {
        ...state,
        period: action.period,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: action.value,
      };
    case 'LOADING_START':
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case 'LOADING_FINISH':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    case 'LOADING_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state
  }
};

export default rootReducer;