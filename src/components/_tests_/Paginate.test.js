import { render, cleanup } from '@testing-library/react';
import Paginate from '../Paginate'

afterEach(cleanup);

describe('Paginate component', () => {
    it('renders', () => {
      render(<Paginate />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Paginate />);
        expect(asFragment()).toMatchSnapshot();
    })
  })