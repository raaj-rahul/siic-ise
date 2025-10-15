import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-primary via-chart-2 to-primary py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <Logo size={32} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white">
                  Social Impact Investment Calculator
                </h1>
                <p className="text-xs text-white/90 mt-0.5 hidden sm:block">
                  Measure financial returns and social/environmental impact
                </p>
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20" data-testid="button-nav-home">
                Home
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="secondary" data-testid="button-nav-calculator">
                Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
