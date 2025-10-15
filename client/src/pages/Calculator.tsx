import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InvestmentForm, { type InvestmentData } from "@/components/InvestmentForm";
import DashboardCards, { type ImpactResults } from "@/components/DashboardCards";
import ImpactChart from "@/components/ImpactChart";
import SDGBadges from "@/components/SDGBadges";
import FileUpload from "@/components/FileUpload";
import ExportOptions from "@/components/ExportOptions";

export default function Calculator() {
  const [results, setResults] = useState<ImpactResults | null>(null);
  const [formData, setFormData] = useState<InvestmentData>({
    investmentAmount: 100000,
    expectedReturn: 10,
    jobsCreated: 50,
    co2Reduced: 100,
    womenEmployed: 40,
  });

  const calculateImpact = (data: InvestmentData) => {
    const profit = (data.investmentAmount * data.expectedReturn) / 100;
    const totalReturn = data.investmentAmount + profit;
    
    const peopleScore = Math.min(100, (data.jobsCreated * 0.6 + data.womenEmployed * 0.4));
    const planetScore = Math.min(100, (data.co2Reduced / 100) * 100);
    const profitScore = Math.min(100, data.expectedReturn * 10);
    
    const tripleBottomLine = (peopleScore + planetScore + profitScore) / 3;

    setResults({
      profit,
      totalReturn,
      peopleScore,
      planetScore,
      profitScore,
      tripleBottomLine,
    });
  };

  const handleFileUpload = (data: InvestmentData) => {
    setFormData(data);
    calculateImpact(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6">
          <FileUpload onDataLoaded={handleFileUpload} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <InvestmentForm 
                onCalculate={calculateImpact} 
                defaultValues={formData}
              />
            </div>

            <div className="space-y-6" id="results-export">
              {results ? (
                <>
                  <DashboardCards results={results} />
                  <ImpactChart results={results} />
                  <SDGBadges />
                  <ExportOptions elementId="results-export" />
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-12 rounded-lg border-2 border-dashed border-border">
                    <p className="text-muted-foreground">
                      Enter investment details and click "Calculate Impact" to see results
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
