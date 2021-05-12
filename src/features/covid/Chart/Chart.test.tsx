import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectData, selectDataDaily, selectCountry, APIDATA, APIDATADAILY } from "../covidSlice";
import Chart from './Chart';
import dataJson from "../data.json";
import dataJsonDaily from "../dataDaily.json";

jest.mock('react-redux');
jest.mock('react-chartjs-2', () => ({
  Bar: () => <div>Bar</div>,
  Line: () => <div>Line</div>,
}))
const useSelectorMock = useSelector as jest.Mock<APIDATA | APIDATADAILY | string>;
const useDispatchMock = useDispatch as jest.Mock;

let barChartFlg = true;

describe('Chart rendering test', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector):
      | APIDATA
      | APIDATADAILY
      | string => {
      if (selector === selectData) {
        return dataJson;
      }
      if (selector === selectDataDaily) {
        return dataJsonDaily ;
      }
      if (selector === selectCountry) {
        return (barChartFlg) ? "japan" : "";
      }
      return '';
    });
    useDispatchMock.mockReturnValue(jest.fn());
  });
  afterEach(() => {
    barChartFlg = false;
  })
  it('Should render the Bar Chart elements correctly', () => {
    render(<Chart />);
    screen.debug();
    expect(screen.getByText(/Bar/)).toBeInTheDocument(); // find~は結果が反映されるまでまつ
  });
});
