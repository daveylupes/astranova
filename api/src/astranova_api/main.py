from fastapi import FastAPI
import astrabit as astra

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json", redoc_url=None)

@app.get("/api/strategies")
async def list_strategies():
    return astra.list_strategies()

@app.get("/api/strategy/{strategy_id}")
async def get_strategy_detail(strategy_id: str):
    return astra.get_strategy_detail(strategy_id)

@app.get("/api/performance/{strategy_id}")
async def get_strategy_performance(strategy_id: str):
    return astra.get_strategy_performance(strategy_id)
