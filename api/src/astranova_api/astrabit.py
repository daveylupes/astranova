import requests
import json
import datetime as dt

STRATEGIES_URL = "https://product-gateway.astrabit.io/product/strategies"
PERFORMANCE_URL = "https://strategy-performance-gateway.astrabit.io/strategy-performance/calculate"

def get_cached_strategies():
    with open('/app/data/strategy_list.json') as f:
        data = json.load(f)
    strategies = {el['name']:el for el in data['results']}
    return strategies

def get_strategies():
    response = requests.get(STRATEGIES_URL)
    response.raise_for_status
    try:
        data = response.json()
        strategies = {el['name']:el for el in data['results']}
    except Exception as ex:
        print(ex)
        strategies = get_cached_strategies()
    return strategies

strategies = get_strategies()

def list_strategies():
# def list_strategies(request=False):
#     if request:
#         strategies = get_strategies()
    return list(strategies.keys())

def get_strategy_detail(strategy_id: str, request=False):
    if request:
        strategies = get_strategies()
    return strategies[strategy_id]

def get_strategy_performance(strategy_id: str, amount: float = 1000, leverage: float = 1, end_date: str = '', start_date: str = '',
                              strategy_signals_only: bool = False):
    if not end_date:
        end_date = dt.datetime.isoformat(dt.datetime.now())
        end_date = end_date[:-3] + 'Z'
    if not start_date:
        start_date = '2022-09-01T00:00:00.000Z'
    payload = {"strategyPublicId":strategy_id, "amount":amount, "leverage":leverage,
               "startDate":start_date, "endDate":end_date,
               "strategySignalsOnly":strategy_signals_only}
    resp = requests.post(PERFORMANCE_URL, json=payload)
    resp.raise_for_status
    try:
        data = resp.json()
        points = data['points']
        performance = {dt.datetime.fromtimestamp(point['timestamp']/1000, dt.UTC):point['value'] for point in points}
    except Exception as ex:
        print(ex)
    return performance
