import { render, screen } from '@testing-library/react';
import Cart from '@/components/Cart';

describe('Componente Cart (Portfolio Summary)', () => {
  const mockPortfolioItems = [
    { id: '1', symbol: 'AAPL', quantity: 5, price: 150 },
    { id: '2', symbol: 'TSLA', quantity: 2, price: 700 },
  ];

  it('debe listar los activos presentes en el portafolio', () => {
    render(<Cart items={mockPortfolioItems} />);
    
    expect(screen.getByText('AAPL')).toBeInTheDocument();
    expect(screen.getByText('TSLA')).toBeInTheDocument();
  });

  it('debe mostrar mensaje de portafolio vacío cuando no hay items', () => {
    render(<Cart items={[]} />);
    expect(screen.getByText(/Tu portafolio está vacío/i)).toBeInTheDocument();
  });
});