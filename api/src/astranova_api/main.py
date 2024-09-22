from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import astrabit as astra

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json", redoc_url=None)

# Enable CORS for all routes
app.add_middleware(
    CORSMiddleware, allow_origins=['null'],
    allow_credentials=True, allow_methods=['*'], allow_headers=['*'])

@app.get("/api/strategies")
async def list_strategies():
    return astra.list_strategies()

@app.get("/api/strategy/{strategy_id}")
async def get_strategy_detail(strategy_id: str):
    return astra.get_strategy_detail(strategy_id)

@app.get("/api/cost/{strategy_id}")
async def get_strategy_cost(strategy_id: str):
    detail = astra.get_strategy_detail(strategy_id)
    return detail['prices'][0]['price']

@app.get("/api/performance/{strategy_id}")
async def get_strategy_performance(strategy_id: str):
    return astra.get_strategy_performance(strategy_id)
