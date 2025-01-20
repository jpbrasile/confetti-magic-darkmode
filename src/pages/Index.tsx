import { ThemeToggle } from "@/components/ThemeToggle";
import { ConfettiButton } from "@/components/ConfettiButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background p-8 transition-colors duration-300">
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
      
      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-8">
        <div className="glass animate-scale-up rounded-2xl p-8 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Welcome to Your Premium App
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Click the button below to celebrate with confetti!
          </p>
          <ConfettiButton />
        </div>
      </main>
    </div>
  );
};

export default Index;