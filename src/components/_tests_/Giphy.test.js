import { render, screen, cleanup } from '@testing-library/react'
import Giphy from '../Giphy'

test('should render Giphy component', () => {
    render(<Giphy />)
    const giphyElement = screen.getByTestId("giphy-1");
    expect(giphyElement).toBeInTheDocument()
})