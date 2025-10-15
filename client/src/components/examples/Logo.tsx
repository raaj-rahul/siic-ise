import Logo, { LogoIcon } from "../Logo";
import { Card } from "@/components/ui/card";

export default function LogoExample() {
  return (
    <div className="p-8 space-y-8">
      <Card className="p-8">
        <h3 className="text-lg font-semibold mb-4">Main Logo</h3>
        <div className="flex gap-8 items-center">
          <Logo size={80} />
          <Logo size={60} />
          <Logo size={40} />
        </div>
      </Card>
      
      <Card className="p-8 bg-gradient-to-r from-primary to-chart-2">
        <h3 className="text-lg font-semibold mb-4 text-white">Logo on Gradient Background</h3>
        <div className="flex gap-8 items-center">
          <Logo size={80} />
          <Logo size={60} />
        </div>
      </Card>
      
      <Card className="p-8">
        <h3 className="text-lg font-semibold mb-4">Logo Icons</h3>
        <div className="flex gap-8 items-center">
          <LogoIcon size={32} className="text-primary" />
          <LogoIcon size={24} className="text-chart-2" />
          <LogoIcon size={20} className="text-foreground" />
        </div>
      </Card>
    </div>
  );
}
