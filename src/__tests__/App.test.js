import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Coins from '../components/Coins';

const renderMissions = (
  <Provider store={store}>
    <Coins />
  </Provider>
);

describe('Coins', () => {
  test('renders coins page', () => {
    render(renderMissions);
    const header = screen.getByText('Coins');
    expect(header).toBeInTheDocument();
  });
});
