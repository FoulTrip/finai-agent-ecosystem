# Documentación de la API

Esta API gestiona la orquestación de agentes de IA y el motor de trading simulado.

## Endpoints de Orquestación

### Analizar Ticker
`POST /api/v1/orchestrator/analyze`

Inicia el análisis secuencial por parte de los agentes de IA.

**Request Body:**
```json
{
  "symbol": "NVDA",
  "agents": ["technical", "fundamental", "sentiment"]
}
```

**Response:**
```json
{
  "status": "success",
  "report_id": "rep_123",
  "recommendation": "BUY",
  "confidence": 0.85
}
```

## Endpoints de Mercado

### Obtener Velas
`GET /api/v1/market/candles/{symbol}`

**Parámetros:**
- `symbol`: Ticker del activo (ej. AAPL).

**Response:**
```json
[
  { "time": "2023-10-01", "open": 150.0, "high": 155.0, "low": 149.0, "close": 153.0 }
]
```

## Endpoints de Trading

### Ejecutar Orden
`POST /api/v1/trading/order`

**Request Body:**
```json
{
  "symbol": "NVDA",
  "type": "BUY",
  "quantity": 10,
  "order_type": "MARKET"
}
```

### Ver Portafolio
`GET /api/v1/trading/portfolio`

**Response:**
```json
{
  "balance": 100000.0,
  "positions": [
    { "symbol": "NVDA", "quantity": 10, "avg_price": 450.0 }
  ],
  "unrealized_pnl": 250.0
}
```
