import React from 'react';
import {Card} from "components";
import classNames from "classnames";

function CoinDetails({data}) {
  const coinInfo = [
    {
      id: "name",
      title: "Name",
      value: data?.name
    },
    {
      id: "symbol",
      title: "Symbol",
      value: data?.symbol
    },
    {
      id: "price",
      title: "Price",
      value: `${data?.market_data?.current_price?.usd}$`
    },
    {
      id: "description",
      title: "Description",
      value: data?.description?.en
    }
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <Card title={data?.name}>
        <img
          src={data?.image?.large}
          alt={data?.symbol}
          width={104}
          height={104}
          className="flex m-auto"/>
        {coinInfo.map(item => {
          const containerClasses = classNames({
            "w-full flex justify-between text-sm py-2": true,
            "flex-col gap-4": item.id === "description"
          });
          return (
            <div key={item.id} className={containerClasses}>
              <span>{item.title}</span>
              <span className="font-semibold line-clamp-5">{item?.value}</span>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

export default CoinDetails;
