import { useEffect, useState } from "react";

function MarketUpdate() {
  const [data, setData] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  // console.log(data);

  return (
    <>
      <section id="market" className="market-section">
        <div className="container">
          <div className="market-content">
            <h2>Market Update</h2>
            <div className="market-content__coin-list">
              <div className="market-content__coin-list__top">
                <p>Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
              </div>
              <div className="market-content__coin-list__row">
                {data.map((item) => (
                  <div className="coin-row" key={item.id}>
                    <span>
                      <img src={item.image} alt={item.name} /> {item.name}
                    </span>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h >= 0
                          ? "green-text"
                          : "red-text")
                      }
                    >
                      {item.price_change_24h.toFixed(2) + " %"}
                    </p>
                    <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="market-content__coin-list__pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketUpdate;
