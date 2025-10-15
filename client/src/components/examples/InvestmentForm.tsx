import InvestmentForm from "../InvestmentForm";

export default function InvestmentFormExample() {
  const handleCalculate = (data: any) => {
    console.log("Calculate triggered with:", data);
  };

  return <InvestmentForm onCalculate={handleCalculate} />;
}
