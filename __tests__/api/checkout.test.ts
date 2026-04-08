import { createMocks } from 'node-mocks-http';
import handleCheckout from '@/pages/api/checkout';

// Mock de la persistencia de órdenes
jest.mock('@/lib/prisma', () => ({
  order: {
    create: jest.fn().mockResolvedValue({ id: 'order_123', status: 'SUCCESS' }),
  },
}));

describe('API Checkout (Trading Engine)', () => {
  it('debe procesar una orden de compra de activos correctamente', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        symbol: 'NVDA',
        quantity: 10,
        side: 'BUY',
      },
    });

    await handleCheckout(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toMatchObject({ status: 'SUCCESS' });
  });

  it('debe fallar con 405 si el método no es POST', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handleCheckout(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});