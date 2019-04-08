var WebSocket = require('ws')
 const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')

    pricesWs.onmessage = function (msg) {
        console.log('Prices: ' + msg.data)
    };

 const tradeWs = new WebSocket('wss://ws.coincap.io/trades/binance');

    tradeWs.onmessage = function (msg) {
        console.log('Trades: ' + msg.data)
    }
