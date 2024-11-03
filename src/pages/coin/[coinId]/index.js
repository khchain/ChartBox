import React from 'react';
import CoinDetails from "views/coinDetails/CoinDetails";
import {API} from "utils/CONST";

export default function CoinPageIndex(props) {
  const {data} = props;

  return (
    <main>
      <CoinDetails data={data}/>
    </main>
  );
}


export async function getServerSideProps(context) {
  try {
    const {coinId} = context.params;

    let api = API.DOMAIN + API.GET_COIN
    api = api.replace('{coinId}', coinId)

    const res = await fetch(api);
    const data = await res.json();
    if (data?.error === "coin not found") return {notFound: true}

    return {
      props: {data}
    };

  } catch (error) {
    return {
      props: {error: true}
    }
  }
}