import { render, cleanup } from '@testing-library/react';
import Loading from '../Loading'

afterEach(cleanup);

describe('Loading component', () => {
    it('renders', () => {
      render(<Loading />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Loading />);
        expect(asFragment()).toMatchSnapshot();
    })
  })