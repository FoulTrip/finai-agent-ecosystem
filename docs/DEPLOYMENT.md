# Guía de Despliegue

Este documento describe los pasos para desplegar la aplicación en entornos de producción.

## Requisitos Previos

- Node.js 18+
- Python 3.10+
- Docker (opcional, recomendado para producción)

## Despliegue Local

1. **Instalar dependencias:**
   ```bash
   npm install
   pip install -r requirements.txt
   ```

2. **Configurar base de datos:**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

3. **Variables de Entorno:**
   Crea un archivo `.env` basado en `.env.example`.

4. **Iniciar Aplicación:**
   ```bash
   npm run dev
   ```

## Despliegue en la Nube (Vercel + Railway)

1. **Frontend**: Conecta el repositorio a Vercel. Se detectará automáticamente como proyecto Next.js.
2. **Backend**: Despliega el servicio FastAPI en Railway o Render.
3. **Persistencia**: Asegúrate de configurar un volumen persistente si usas SQLite, o migra a MongoDB/PostgreSQL para escalabilidad.
