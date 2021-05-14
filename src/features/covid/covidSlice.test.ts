import { cleanup } from '@testing-library/react';
import reducer, {
  fetchAsyncGet,
  fetchAsyncGetDaily,
  fetchAsyncGetCountry,
  covidState
} from './covidSlice';
import dataJson from "./data.json";
import dataJsonDaily from "./dataDaily.json";

afterEach(() => {
  cleanup();
});

describe('covidSlice extraReducers test', () => {
  const initialState: covidState = {
    data: dataJson,
    country: "",
    dataDaily: dataJsonDaily,
  };
  it('Should output fetchAsyncGet new state when fulfilled', () => {
    const action = {
      type: fetchAsyncGet.fulfilled.type,
      payload: {...dataJson}
    };
    const state = reducer(initialState, action);
    expect(state.data.confirmed.value).toEqual(39337397);
    expect(state.data.confirmed.detail).toEqual("https://covid19.mathdro.id/api/confirmed");
  });
  it('Should output fetchAsyncGetDaily new state when fulfilled', () => {
    const action = {
      type: fetchAsyncGetDaily.fulfilled.type,
      payload: {...dataJsonDaily},
    };
    const state = reducer(initialState, action);
    expect(state.dataDaily[0].totalConfirmed).toEqual(555);
    expect(state.dataDaily[0].reportDate).toEqual("2020-01-22");
  });
  it('Should output fetchAsyncGetCountry new state when fulfilled', () => {
    const action = {
      type: fetchAsyncGetCountry.fulfilled.type,
      payload: {
        data: { ...dataJson },
        country: 'japan',
      },
    };
    const state = reducer(initialState, action);
    expect(state.data.confirmed.value).toEqual(39337397);
    expect(state.data.confirmed.detail).toEqual("https://covid19.mathdro.id/api/confirmed");
    expect(state.country).toEqual("japan");
  });
});
