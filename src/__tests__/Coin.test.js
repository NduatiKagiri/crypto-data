import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../components/Coin';
import store from '../redux/configureStore';

describe('Testing component rendering properly', () => {
  test('Renders Coin Details component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Coin />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
