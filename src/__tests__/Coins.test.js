import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Coins from '../components/Coins';
import store from '../redux/configureStore';

describe('Testing component rendering properly', () => {
  test('Renders Coins component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Coins />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
