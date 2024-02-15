import Image from "next/image";
import styles from './homepage.module.css'
import { Button } from "@nextui-org/react";
import Landing from "./components/landingpage/landing";

export default function Home() {
  return (
    <div>
      <Landing/>
    </div>
  );
}
