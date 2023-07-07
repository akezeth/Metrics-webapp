import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Details from '../components/Details'; // Import the Details component
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Details page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the Details Page Component', () => {
    const coins = {
      name: 'Bitcoin',
      symbol: 'BTC',
      marketCapUsd: 1000000000,
      priceUsd: 50000,
      maxSupply: 21000000,
      volumeUsd24Hr: 50000000,
    };

    useLocation.mockReturnValue({
      state: { coins },
    });

    render(<Details />);
  });
});
