import DashboardCards from "../DashboardCards";

export default function DashboardCardsExample() {
  const sampleResults = {
    profit: 10000,
    totalReturn: 110000,
    peopleScore: 76,
    planetScore: 100,
    profitScore: 100,
    tripleBottomLine: 92,
  };

  return <DashboardCards results={sampleResults} />;
}
