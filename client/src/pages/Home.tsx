import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Users, Leaf, Briefcase, ArrowRight, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export default function Home() {
  const goals = [
    {
      icon: Target,
      title: "Measure Real Impact",
      description: "Go beyond financial metrics to quantify social and environmental contributions of every investment.",
    },
    {
      icon: Users,
      title: "Empower Communities",
      description: "Support investments that create meaningful employment opportunities and promote gender equality.",
    },
    {
      icon: Leaf,
      title: "Drive Climate Action",
      description: "Track and maximize carbon reduction efforts aligned with global sustainability targets.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Enable investors to make informed choices using comprehensive Triple Bottom Line analysis.",
    },
  ];

  const sdgs = [
    { number: 5, name: "Gender Equality", color: "bg-orange-500" },
    { number: 8, name: "Decent Work & Economic Growth", color: "bg-red-500" },
    { number: 13, name: "Climate Action", color: "bg-green-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Investing in a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
                    Sustainable Future
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe that true success is measured not just in profits, but in the positive impact we create for people and our planet. Our mission is to revolutionize investment analysis by integrating social and environmental metrics alongside financial returns.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/calculator">
                    <Button size="lg" className="group" data-testid="button-get-started">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" data-testid="button-learn-more">
                    Learn More
                  </Button>
                </div>
              </div>

              <Card className="p-8 backdrop-blur-lg bg-card/80 border-card-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Logo size={48} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Triple Bottom Line</h3>
                      <p className="text-sm text-muted-foreground">People • Planet • Profit</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Our calculator evaluates investments across three critical dimensions, ensuring that your capital drives meaningful change while delivering competitive returns.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">People</p>
                      <p className="text-xs text-muted-foreground mt-1">Jobs & Equity</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-chart-2">Planet</p>
                      <p className="text-xs text-muted-foreground mt-1">CO₂ Reduction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-chart-3">Profit</p>
                      <p className="text-xs text-muted-foreground mt-1">Financial ROI</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Sustainability Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Driving innovation through responsible investment practices that create lasting value for all stakeholders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {goals.map((goal, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300 backdrop-blur-lg bg-card/80 border-card-border"
                  data-testid={`goal-card-${index}`}
                >
                  <div className="mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      <goal.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aligned with UN Sustainable Development Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our impact metrics are designed to support global sustainability targets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sdgs.map((sdg) => (
                <Card
                  key={sdg.number}
                  className="p-8 text-center hover-elevate transition-all duration-300 backdrop-blur-lg bg-card/80 border-card-border"
                  data-testid={`sdg-card-${sdg.number}`}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${sdg.color} flex items-center justify-center`}>
                    <span className="text-3xl font-bold text-white">{sdg.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SDG {sdg.number}</h3>
                  <p className="text-muted-foreground">{sdg.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gradient-to-r from-primary to-chart-2">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Calculate Your Impact?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Start measuring the true value of your investments with our comprehensive Triple Bottom Line calculator
            </p>
            <Link href="/calculator">
              <Button size="lg" variant="secondary" className="group" data-testid="button-start-calculating">
                Start Calculating
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
