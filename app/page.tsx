//Components
import { Transfer } from "@/components/Transfer/Transfer";
import { getDataFromAPI } from "@/services/coinService";

//Styles
import styles from "@/styles/page.module.css";

export default async function Home() {
  const coins = await getDataFromAPI();

  const AreCoins = () => coins && <Transfer coins={coins} />;

  return <main className={styles.main}>{AreCoins()}</main>;
}
