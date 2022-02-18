import { render, cleanup } from '@testing-library/react';
import Giphy from '../Giphy'

describe('Giphy component', () => {
    it('renders', () => {
      render(<Giphy />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Giphy />);
        expect(asFragment()).toMatchSnapshot();
    })
  })