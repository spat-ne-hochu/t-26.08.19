export const changePeriod = period => ({
  type: 'CHANGE_PERIOD',
  period,
});

export const changeValue = value => ({
  type: 'CHANGE_VALUE',
  value,
});

export const loadingStart = () => ({
  type: 'LOADING_START',
});

export const loadingFinish = (data) => ({
  type: 'LOADING_FINISH',
  data,
});

export const loadingError = () => ({
  type: 'LOADING_ERROR',
});