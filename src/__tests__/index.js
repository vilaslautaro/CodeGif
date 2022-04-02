import { render, screen} from '@testing-library/react';
import App from '../App';

test('rhomw work as expected', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Ultima busqueda/i);
  expect(linkElement).toBeInTheDocument();
});
