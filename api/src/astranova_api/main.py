from fastapi import FastAPI
import json

with open('/app/data/strategy_list.json') as f:
    data = json.load(f)
strategies = {el['name']:el for el in data['results']}

app = FastAPI()

# FIXME: remove
@app.get("/api/list")
async def list_():
    return list(strategies.keys())

@app.get("/api/strategies")
async def list_strategies():
    return list(strategies.keys())

@app.get("/api/strategy/{strategy_id}")
async def get_strategy_detail(strategy_id: str):
    return strategies[strategy_id]
