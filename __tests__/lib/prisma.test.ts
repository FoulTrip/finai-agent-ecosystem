import prisma from '@/lib/prisma';

describe('Configuración de Prisma', () => {
  it('debe exportar una instancia válida de PrismaClient para la conexión a SQLite', () => {
    expect(prisma).toBeDefined();
  });
});