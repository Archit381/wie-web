import Image from "next/image";
import styles from './homepage.module.css'
import Landing from "./components/landingpage/landing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing/>
      <Footer/>
    </div>
  );
}
