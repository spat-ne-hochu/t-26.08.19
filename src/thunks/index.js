import {changePeriod, changeValue, loadingError, loadingFinish, loadingStart} from "../actions";
import { load } from '../data-helper/load';

export const changePeriodThunk = (period) => {
  return (dispatch) => {
    dispatch(changePeriod(period));
    dispatch(loadingThunk());
  };
};

export const changeValueThunk = (value) => {
  return (dispatch) => {
    dispatch(changeValue(value));
    dispatch(loadingThunk());
  };
};

export const loadingThunk = () => {
  return async (dispatch, getState) => {
    const { period, value } = getState();
    try {
      dispatch(loadingStart());
      dispatch(loadingFinish(await load(period, value)));
    } catch (e) {
      dispatch(loadingError());
    }
  }
};