import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  const responseVip = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&page=1&per_page=4&vip=1&sort=random`,
    {
      cache: "no-store",
    }
  );
  const responseNew = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&page=1&per_page=10`,
    {
      cache: "no-store",
    }
  );
  const responsePremium = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&per_page=5&premium=1&page=1`,
    {
      cache: "no-store",
    }
  );
  return {
    elansVip: await responseVip.json(),
    elansNew: await responseNew.json(),
    elansPremium: await responsePremium.json(),
  };
}
async function getVip() {
  const response = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&page=1&per_page=4&vip=1&sort=random`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

async function getNew() {
  const response = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&page=1&per_page=10`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

async function getPremium() {
  const response = await fetch(
    `https://api.bakoo.az/v2/ru/elan?category=cars&per_page=5&premium=1&page=1`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

export default async function Home() {
  const data = await Promise.all([getVip(), getNew(), getPremium()]);
  return <main className={styles.main}>{JSON.stringify(data)}</main>;
}
