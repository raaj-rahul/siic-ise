import ImpactChart from "../ImpactChart";

export default function ImpactChartExample() {
  const sampleResults = {
    profit: 10000,
    totalReturn: 110000,
    peopleScore: 76,
    planetScore: 100,
    profitScore: 100,
    tripleBottomLine: 92,
  };

  return <ImpactChart results={sampleResults} />;
}
