import { Card } from "@/components/ui/card";
import { Users, Briefcase, Leaf } from "lucide-react";

export default function SDGBadges() {
  const sdgs = [
    { id: 5, name: "Gender Equality", icon: Users, color: "bg-orange-500" },
    { id: 8, name: "Decent Work", icon: Briefcase, color: "bg-red-500" },
    { id: 13, name: "Climate Action", icon: Leaf, color: "bg-green-600" },
  ];

  return (
    <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border">
      <h3 className="text-lg font-semibold mb-4">UN Sustainable Development Goals</h3>
      <div className="grid grid-cols-3 gap-4">
        {sdgs.map((sdg) => (
          <div 
            key={sdg.id} 
            className="flex flex-col items-center text-center p-4 rounded-lg hover-elevate transition-all duration-300"
            data-testid={`sdg-badge-${sdg.id}`}
          >
            <div className={`p-3 rounded-full ${sdg.color} mb-3`}>
              <sdg.icon className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-sm">SDG {sdg.id}</p>
            <p className="text-xs text-muted-foreground mt-1">{sdg.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
