import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import covidReducer, { covidState } from '../covidSlice';
import PieChart from './PieChart';

afterEach(() => {
  cleanup();
});

describe('PieChart rendering test', () => {
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
        <PieChart />
      </Provider>
    );
    expect(screen.getByText(/致死率/)).toBeInTheDocument(); // find~は結果が反映されるまでまつ
  });
});
