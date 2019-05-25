



setInterval(function (){
    let xhr =new XMLHttpRequest
var resp = 0;
xhr.addEventListener('load', function(){
    resp = JSON.parse(this.responseText)
    tempUSD = resp.bpi.USD.rate
    var ReplacedNumberUSD = tempUSD.replace(/\,/g,'');
    resparrayUSD.push(parseFloat(ReplacedNumberUSD))
    tempEUR = resp.bpi.EUR.rate
    var ReplacedNumberEUR = tempEUR.replace(/\,/g,'');
    resparrayEUR.push(parseFloat(ReplacedNumberEUR))
    console.log(parseFloat(ReplacedNumberEUR))
    tempGBP = resp.bpi.GBP.rate
    var ReplacedNumberGBP = tempGBP.replace(/\,/g,'');
    resparrayGBP.push(parseFloat(ReplacedNumberGBP))
    console.log(parseFloat(ReplacedNumberGBP))
    
})

xhr.addEventListener('error',function(){
    console.log(this.responseText)
})

xhr.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json')
xhr.send()

Highcharts.chart('container', {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'Bitcoin Rates'
    },
    subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: 'Exchange rate'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'Bitcoin USD',
        data: resparrayUSD
    },
    {
        type: 'area',
        name: 'Bitcoin EUR',
        data: resparrayEUR,
        fillColor: '#CB1919',
        fillOpacity: 0.1
    },
    {
        type: 'area',
        name: 'Bitcoin GBP',
        data: resparrayGBP,
        fillColor: '#800080',
        fillOpacity: 0.2
    }]
});



},1000);


var resparrayUSD = [];
var resparrayEUR = [];
var resparrayGBP = [];
var tempUSD;
var tempEUR;
var tempGBP;
