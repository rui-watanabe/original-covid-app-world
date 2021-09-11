import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import covidReducer, { covidState } from '../covidSlice';
import Cards from './Cards';

afterEach(() => {
  cleanup();
});

describe('Cards rendering test', () => {
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
        <Cards />
      </Provider>
    );
    expect(screen.getByText(/感染者数/)).toBeInTheDocument(); 
    expect(screen.getByText(/死者数/)).toBeInTheDocument();
  });
});
