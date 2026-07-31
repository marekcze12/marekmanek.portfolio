import type { Metadata } from "next";
import { PortfolioPage } from "../page";

export const metadata: Metadata = {
  title: "Marek Maněk — Junior Web Developer",
  description: "Portfolio of Marek Maněk, an Applied Computer Science student and junior web developer interested in Python and AI.",
};

export default function EnglishPortfolio() {
  return <PortfolioPage lang="en" />;
}
