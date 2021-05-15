import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import covidReducer, { covidState } from '../covidSlice';
import SwitchCountry from './SwitchCountry';

afterEach(() => {
  cleanup();
});

describe('SwitchCountry rendering test', () => {
  let store: EnhancedStore<{ covid: covidState }>;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        covid: covidReducer,
      },
    });
  });
  it('Should render the elements correctly', () => {
    render(
      <Provider store={store}>
        <SwitchCountry />
      </Provider>
    );
    expect(screen.getByText(/世界の感染者データ/)).toBeInTheDocument(); // find~は結果が反映されるまでまつ
  });
});
