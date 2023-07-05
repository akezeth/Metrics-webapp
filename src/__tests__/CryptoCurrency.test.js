import { render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CryptoCurrency from '../components/CryptoCurrency';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CryptoCurrency Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue({ isLoading: true, crytoList: [] });

    render(
      <MemoryRouter>
        <CryptoCurrency />
      </MemoryRouter>,
    );

    expect(screen.getByPlaceholderText('Enter Currency Name')).toBeInTheDocument();
  });

  test('displays filtered crypto cards based on search input', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });
});
