import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export interface InvestmentData {
  investmentAmount: number;
  expectedReturn: number;
  jobsCreated: number;
  co2Reduced: number;
  womenEmployed: number;
}

interface InvestmentFormProps {
  onCalculate: (data: InvestmentData) => void;
  defaultValues?: InvestmentData;
}

export default function InvestmentForm({ onCalculate, defaultValues }: InvestmentFormProps) {
  const [formData, setFormData] = useState<InvestmentData>(
    defaultValues || {
      investmentAmount: 100000,
      expectedReturn: 10,
      jobsCreated: 50,
      co2Reduced: 100,
      womenEmployed: 40,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleChange = (field: keyof InvestmentData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: parseFloat(e.target.value) || 0 });
  };

  return (
    <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Investment Details</h2>
          <p className="text-sm text-muted-foreground">Enter your investment parameters to calculate impact</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="investment-amount" className="text-sm font-medium">
              Investment Amount (₹)
            </Label>
            <Input
              id="investment-amount"
              data-testid="input-investment-amount"
              type="number"
              value={formData.investmentAmount}
              onChange={handleChange("investmentAmount")}
              className="mt-1.5"
              min="0"
              step="1000"
            />
          </div>

          <div>
            <Label htmlFor="expected-return" className="text-sm font-medium">
              Expected Return (%)
            </Label>
            <Input
              id="expected-return"
              data-testid="input-expected-return"
              type="number"
              value={formData.expectedReturn}
              onChange={handleChange("expectedReturn")}
              className="mt-1.5"
              min="0"
              step="0.1"
            />
          </div>

          <div>
            <Label htmlFor="jobs-created" className="text-sm font-medium">
              Jobs Created
            </Label>
            <Input
              id="jobs-created"
              data-testid="input-jobs-created"
              type="number"
              value={formData.jobsCreated}
              onChange={handleChange("jobsCreated")}
              className="mt-1.5"
              min="0"
            />
          </div>

          <div>
            <Label htmlFor="co2-reduced" className="text-sm font-medium">
              CO₂ Reduced (tons)
            </Label>
            <Input
              id="co2-reduced"
              data-testid="input-co2-reduced"
              type="number"
              value={formData.co2Reduced}
              onChange={handleChange("co2Reduced")}
              className="mt-1.5"
              min="0"
              step="0.1"
            />
          </div>

          <div>
            <Label htmlFor="women-employed" className="text-sm font-medium">
              % of Women Employed
            </Label>
            <Input
              id="women-employed"
              data-testid="input-women-employed"
              type="number"
              value={formData.womenEmployed}
              onChange={handleChange("womenEmployed")}
              className="mt-1.5"
              min="0"
              max="100"
              step="1"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          data-testid="button-calculate"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Calculate Impact
        </Button>
      </form>
    </Card>
  );
}
