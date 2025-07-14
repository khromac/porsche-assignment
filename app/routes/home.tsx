import type { Route } from "./+types/home";
import { HomePage } from "~/pages/homePage/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Porsche - Home" },
    { name: "Home", content: "Porsche home page" },
  ];
}

export default function Home() {
  return <HomePage />;
}
