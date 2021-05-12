import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import covidReducer, { covidState } from '../covidSlice';
import DashBoard from './DashBoard';

afterEach(() => {
  cleanup();
});

describe('DashBoard rendering test', () => {
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
        <DashBoard />
      </Provider>
    );

    expect(screen.getByText(/ORIGINAL COVID APP WORLD/)).toBeInTheDocument(); 
    expect(screen.getByText(/世界の感染者データ/)).toBeInTheDocument(); 
    expect(screen.getByText(/致死率/)).toBeInTheDocument();
    expect(screen.getByText(/感染者数/)).toBeInTheDocument();

  });
});
