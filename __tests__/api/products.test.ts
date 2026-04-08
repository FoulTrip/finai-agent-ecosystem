import { createMocks } from 'node-mocks-http';
import handleProducts from '@/pages/api/products';

// Mock de Prisma para evitar conexiones reales durante el test
jest.mock('@/lib/prisma', () => ({
  agent: {
    findMany: jest.fn().mockResolvedValue([
      { id: '1', name: 'Technical Agent', risk: 'High' },
      { id: '2', name: 'Fundamental Agent', risk: 'Low' }
    ]),
  },
}));

describe('API Products (Agents)', () => {
  it('debe retornar una lista de agentes financieros con estado 200', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handleProducts(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toBeInstanceOf(Array);
    expect(data[0].name).toBe('Technical Agent');
  });
});