# FinAI Agent Ecosystem

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-85%25-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Plataforma SaaS de vanguardia para el análisis financiero impulsado por agentes de IA orquestados. Diseñada para ofrecer una experiencia 'Fintech Premium' con herramientas de trading simulado y creación de agentes personalizados.

## 🚀 Características Principales

- **Orquestación de Agentes**: Flujo colaborativo entre agentes Técnico, Fundamental y de Sentimiento.
- **Agent Builder**: Define tus propios prompts y niveles de riesgo para la IA.
- **Paper Trading**: Opera en mercados simulados con P&L en tiempo real.
- **Visualización Avanzada**: Gráficos de velas profesionales mediante Lightweight Charts.
- **Arquitectura Robusta**: Construido con Next.js 14, FastAPI y Prisma.

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: FastAPI (Python), Prisma ORM.
- **Base de Datos**: SQLite (MVP) / MongoDB (Escalabilidad).
- **Gráficos**: TradingView Lightweight Charts.

## 📦 Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/FoulTrip/finai-agent-ecosystem.git
   cd finai-agent-ecosystem
   ```

2. **Instalar dependencias de Frontend:**
   ```bash
   npm install
   ```

3. **Configurar el entorno:**
   ```bash
   cp .env.example .env
   npx prisma migrate dev
   ```

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

## ⚠️ Aviso Legal

Esta herramienta es **exclusivamente para fines educativos**. Las señales generadas por la IA y los resultados del Paper Trading no constituyen asesoramiento financiero real.
