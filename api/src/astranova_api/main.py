from fastapi import FastAPI
import json

with open('/app/data/strategy_list.json') as f:
    data = json.load(f)
strategies = data['results']
names = list(el['name'] for el in strategies)

app = FastAPI()

@app.get("/api/hello")
async def hello():
    return {"message": "Hello Api"}

@app.get("/api/list")
async def list_():
    return names
