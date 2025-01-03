// document.addEventListener("DOMContentLoaded",()=>{
//   coinData=Data;
// })

// fetch(
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
// ).then((res) => {
//   return(res.json());
// }).then((data)=>{
//   console.log(data);
// })

let search = document.getElementById("search");

let Data=[
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 96423,
    market_cap: 1912341999286,
    market_cap_rank: 1,
    fully_diluted_valuation: 2027768573219,
    total_volume: 34958001119,
    high_24h: 96781,
    low_24h: 93525,
    price_change_24h: 2695.5,
    price_change_percentage_24h: 2.8759,
    market_cap_change_24h: 58844687367,
    market_cap_change_percentage_24h: 3.17479,
    circulating_supply: 19804618,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 108135,
    ath_change_percentage: -10.70698,
    ath_date: '2024-12-17T15:02:41.429Z',
    atl: 67.81,
    atl_change_percentage: 142295.17941,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2025-01-02T13:50:38.212Z'
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    current_price: 3459.49,
    market_cap: 417544121247,
    market_cap_rank: 2,
    fully_diluted_valuation: 417544121247,
    total_volume: 18957901043,
    high_24h: 3476.05,
    low_24h: 3319.07,
    price_change_24h: 123.45,
    price_change_percentage_24h: 3.70062,
    market_cap_change_24h: 16062299119,
    market_cap_change_percentage_24h: 4.00075,
    circulating_supply: 120475207.6273624,
    total_supply: 120475207.6273624,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -28.98242,
    ath_date: '2021-11-10T14:24:19.604Z',
    atl: 0.432979,
    atl_change_percentage: 800036.66419,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 46.958928443468395,
      currency: 'btc',
      percentage: 4695.892844346839
    },
    last_updated: '2025-01-02T13:50:37.320Z'
  },
  {
    id: 'ripple',
    symbol: 'xrp',
    name: 'XRP',
    image: 'https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442',
    current_price: 2.4,
    market_cap: 137644178646,
    market_cap_rank: 3,
    fully_diluted_valuation: 239723711529,
    total_volume: 11392270065,
    high_24h: 2.44,
    low_24h: 2.16,
    price_change_24h: 0.234007,
    price_change_percentage_24h: 10.8212,
    market_cap_change_24h: 13251627008,
    market_cap_change_percentage_24h: 10.65307,
    circulating_supply: 57410227039,
    total_supply: 99986740020,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -29.45295,
    ath_date: '2018-01-07T00:00:00.000Z',
    atl: 0.00268621,
    atl_change_percentage: 89152.48125,
    atl_date: '2014-05-22T00:00:00.000Z',
    roi: null,
    last_updated: '2025-01-02T13:50:36.526Z'
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image: 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661',
    current_price: 0.998139,
    market_cap: 137254171158,
    market_cap_rank: 4,
    fully_diluted_valuation: 137254171158,
    total_volume: 69150800061,
    high_24h: 1,
    low_24h: 0.995784,
    price_change_24h: -0.000336518095830463,
    price_change_percentage_24h: -0.0337,
    market_cap_change_24h: 50477329,
    market_cap_change_percentage_24h: 0.03679,
    circulating_supply: 137432664160.4804,
    total_supply: 137432664160.4804,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.53169,
    ath_date: '2018-07-24T00:00:00.000Z',
    atl: 0.572521,
    atl_change_percentage: 74.40717,
    atl_date: '2015-03-02T00:00:00.000Z',
    roi: null,
    last_updated: '2025-01-02T13:50:36.781Z'
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image: 'https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970',
    current_price: 709.88,
    market_cap: 103672926520,
    market_cap_rank: 5,
    fully_diluted_valuation: 103672926520,
    total_volume: 788417998,
    high_24h: 713.46,
    low_24h: 698.64,
    price_change_24h: 1.32,
    price_change_percentage_24h: 0.1859,
    market_cap_change_24h: 300154724,
    market_cap_change_percentage_24h: 0.29036,
    circulating_supply: 145887575.79,
    total_supply: 145887575.79,
    max_supply: 200000000,
    ath: 788.84,
    ath_change_percentage: -9.87135,
    ath_date: '2024-12-04T10:35:25.220Z',
    atl: 0.0398177,
    atl_change_percentage: 1785473.09745,
    atl_date: '2017-10-19T00:00:00.000Z',
    roi: null,
    last_updated: '2025-01-02T13:50:34.442Z'
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
    image: 'https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756',
    current_price: 207.82,
    market_cap: 100456735420,
    market_cap_rank: 6,
    fully_diluted_valuation: 123036683689,
    total_volume: 4614432481,
    high_24h: 208.94,
    low_24h: 189.03,
    price_change_24h: 17.89,
    price_change_percentage_24h: 9.42056,
    market_cap_change_24h: 8911784136,
    market_cap_change_percentage_24h: 9.73487,
    circulating_supply: 482816259.1686404,
    total_supply: 591340253.2028036,
    max_supply: null,
    ath: 263.21,
    ath_change_percentage: -20.93828,
    ath_date: '2024-11-23T15:05:59.896Z',
    atl: 0.500801,
    atl_change_percentage: 41452.64933,
    atl_date: '2020-05-11T19:35:23.449Z',
    roi: null,
    last_updated: '2025-01-02T13:50:35.393Z'
  },
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    image: 'https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409',
    current_price: 0.339179,
    market_cap: 50023677315,
    market_cap_rank: 7,
    fully_diluted_valuation: 50071964299,
    total_volume: 3392972346,
    high_24h: 0.344016,
    low_24h: 0.316222,
    price_change_24h: 0.02191158,
    price_change_percentage_24h: 6.90635,
    market_cap_change_24h: 3341399443,
    market_cap_change_percentage_24h: 7.15775,
    circulating_supply: 147314376383.7052,
    total_supply: 147456576383.7052,
    max_supply: null,
    ath: 0.731578,
    ath_change_percentage: -53.59939,
    ath_date: '2021-05-08T05:08:23.458Z',
    atl: 0.0000869,
    atl_change_percentage: 390512.25784,
    atl_date: '2015-05-06T00:00:00.000Z',
    roi: null,
    last_updated: '2025-01-02T13:50:35.898Z'
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USDC',
    image: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
    current_price: 0.999214,
    market_cap: 43778900854,
    market_cap_rank: 8,
    fully_diluted_valuation: 43778906353,
    total_volume: 6043048160,
    high_24h: 1.004,
    low_24h: 0.998268,
    price_change_24h: -0.001218225703756071,
    price_change_percentage_24h: -0.12177,
    market_cap_change_24h: -54985954.37601471,
    market_cap_change_percentage_24h: -0.12544,
    circulating_supply: 43797450512.96687,
    total_supply: 43797456014.47737,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.74907,
    ath_date: '2019-05-08T00:40:28.300Z',
    atl: 0.877647,
    atl_change_percentage: 13.91178,
    atl_date: '2023-03-11T08:02:13.981Z',
    roi: null,
    last_updated: '2025-01-02T13:50:37.051Z'
  },
  {
    id: 'cardano',
    symbol: 'ada',
    name: 'Cardano',
    image: 'https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090',
    current_price: 0.963531,
    market_cap: 34548920131,
    market_cap_rank: 9,
    fully_diluted_valuation: 43370789504,
    total_volume: 1603694920,
    high_24h: 0.978675,
    low_24h: 0.859711,
    price_change_24h: 0.100009,
    price_change_percentage_24h: 11.58159,
    market_cap_change_24h: 3596428827,
    market_cap_change_percentage_24h: 11.61919,
    circulating_supply: 35846739791.31494,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -68.74425,
    ath_date: '2021-09-02T06:00:10.474Z',
    atl: 0.01925275,
    atl_change_percentage: 4911.42615,
    atl_date: '2020-03-13T02:22:55.044Z',
    roi: null,
    last_updated: '2025-01-02T13:50:37.487Z'
  },
  {
    id: 'staked-ether',
    symbol: 'steth',
    name: 'Lido Staked Ether',
    image: 'https://coin-images.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206',
    current_price: 3456.2,
    market_cap: 33364764944,
    market_cap_rank: 10,
    fully_diluted_valuation: 33365108429,
    total_volume: 38806764,
    high_24h: 3472.48,
    low_24h: 3319.3,
    price_change_24h: 123.1,
    price_change_percentage_24h: 3.69326,
    market_cap_change_24h: 1236922855,
    market_cap_change_percentage_24h: 3.85,
    circulating_supply: 9644760.866549224,
    total_supply: 9644860.158033824,
    max_supply: null,
    ath: 4829.57,
    ath_change_percentage: -28.30431,
    ath_date: '2021-11-10T14:40:47.256Z',
    atl: 482.9,
    atl_change_percentage: 617.04728,
    atl_date: '2020-12-22T04:08:21.854Z',
    roi: null,
    last_updated: '2025-01-02T13:50:34.315Z'
  }
];

let coinData = Data.slice();

function renderTable(){
  let table = document.getElementById("table-body");
  table.innerHTML = ``;
  coinData.map((item)=>{
  table.innerHTML += ` <tr>
          <td id="name">
            <img src=${item.image} width="15%">
            <p>${item.name}</p>
          </td>
          <td><p id="symbol">${(item.symbol.toUpperCase())}</p></td>
          <td><p id="current_price">${item.current_price}</p></td>
          <td><p id="total_volume">${item.total_volume}</p></td>
          <td><p id="price_change_24h" style= "color: ${Number(item.price_change_24h)>0?"green":"red"}">${((item.price_change_24h).toString()).substring(0,4)}%</p></td>
          <td><p id="market_cap"> Mkt Cap: ${item.market_cap}</p></td>
        </tr>`
})
}
renderTable();


function MarketBtn()
{
  coinData.sort((a, b) => b.current_price - a.current_price);
  renderTable();
}

function PercentBtn()
{
  coinData.sort((a, b) => b.price_change_24h - a.price_change_24h);
  renderTable();
}
search.addEventListener("input",()=>{
   console.log("search Value:",search.value)
   coinData = coinData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.value) ||
      item.symbol.toLowerCase().includes(search.value)
  );
  if(search.value === "")
    coinData=Data;
   renderTable();
})
