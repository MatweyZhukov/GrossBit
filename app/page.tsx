import React from "react";
import { Transfer } from "@/components/Transfer";
import { getDataFromAPI } from "@/services/coinService";
import styles from "@/styles/page.module.css";

export default async function Home() {
  const coins = await getDataFromAPI();

  const AreCoins = () => coins && <Transfer coins={coins} />;

  return <main className={styles.main}>{AreCoins()}</main>;
}
