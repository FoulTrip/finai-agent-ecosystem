import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import '@testing-library/jest-dom';

describe('Componente ProductCard (Agent View)', () => {
  const mockAgent = {
    id: '1',
    name: 'Sentiment AI',
    description: 'Analiza el sentimiento del mercado financiero',
    riskLevel: 'Medium',
  };

  it('debe renderizar el nombre y la descripción del agente correctamente', () => {
    render(<ProductCard product={mockAgent} />);
    
    expect(screen.getByText('Sentiment AI')).toBeInTheDocument();
    expect(screen.getByText('Analiza el sentimiento del mercado financiero')).toBeInTheDocument();
  });

  it('debe mostrar el nivel de riesgo del agente', () => {
    render(<ProductCard product={mockAgent} />);
    expect(screen.getByText(/Medium/i)).toBeInTheDocument();
  });
});