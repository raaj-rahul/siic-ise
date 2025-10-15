import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target } from "lucide-react";

export interface ImpactResults {
  profit: number;
  totalReturn: number;
  peopleScore: number;
  planetScore: number;
  profitScore: number;
  tripleBottomLine: number;
}

interface DashboardCardsProps {
  results: ImpactResults;
}

export default function DashboardCards({ results }: DashboardCardsProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border hover-elevate transition-all duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
            <h3 className="text-2xl font-bold tabular-nums" data-testid="text-profit">
              {formatCurrency(results.profit)}
            </h3>
          </div>
          <div className="p-2 rounded-lg bg-primary/10">
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border hover-elevate transition-all duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Return</p>
            <h3 className="text-2xl font-bold tabular-nums" data-testid="text-total-return">
              {formatCurrency(results.totalReturn)}
            </h3>
          </div>
          <div className="p-2 rounded-lg bg-chart-2/10">
            <TrendingUp className="w-5 h-5 text-chart-2" />
          </div>
        </div>
      </Card>

      <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border hover-elevate transition-all duration-300">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Impact Score</p>
            <h3 className="text-2xl font-bold tabular-nums" data-testid="text-impact-score">
              {results.tripleBottomLine.toFixed(1)}
            </h3>
          </div>
          <div className="p-2 rounded-lg bg-chart-3/10">
            <Target className="w-5 h-5 text-chart-3" />
          </div>
        </div>
      </Card>
    </div>
  );
}
