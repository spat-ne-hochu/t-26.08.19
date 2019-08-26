import React from 'react';
import { connect } from 'react-redux'
import Chart from './components/Chart';
import {changePeriodThunk, changeValueThunk, loadingThunk} from "./thunks";

const periods = [
  { value: 7, text: 'Week' },
  { value: 30, text: 'Month' },
  { value: 120, text: 'Quarter' },
  { value: 365, text: 'Year' },
  { value: 10000, text: 'Max' },
];

const values = [
  'Yield',
  'Spread',
  'Price',
];

function App({ period, value, isLoading, isError, data, onChangePeriod, onChangeValue, onTryAgain }) {
  return (
    <div>
      <div>
        <select onChange={onChangePeriod}>
          {
            periods.map(({value, text }) => <option key={value} value={value}>{text}</option>)
          }
        </select>
        <select onChange={onChangeValue}>
          {
            values.map(value => <option key={value} value={value}>{value}</option>)
          }
        </select>
      </div>

      {
        isLoading || isError
          ? isLoading
            ? 'Loading...'
            : <div>Network error, <a href='#' onClick={ onTryAgain }>try again</a></div>
          : <Chart data={data}/>
      }

    </div>
  );
}

const mapStateToProps = (state) => ({
  period: state.period,
  value: state.value,
  isLoading: state.isLoading,
  isError: state.isError,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  onChangePeriod: (event) => dispatch(changePeriodThunk(+event.target.value)),
  onChangeValue: (event) => dispatch(changeValueThunk(event.target.value)),
  onTryAgain: () => dispatch(loadingThunk()),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
