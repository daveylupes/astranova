import json

with open('/app/data/strategy_list.json') as f:
    data = json.load(f)
strategies = {el['name']:el for el in data['results']}
