from fastapi import FastAPI
from astrabit import strategies

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json", redoc_url=None)

@app.get("/api/strategies")
async def list_strategies():
    return list(strategies.keys())

@app.get("/api/strategy/{strategy_id}")
async def get_strategy_detail(strategy_id: str):
    return strategies[strategy_id]
