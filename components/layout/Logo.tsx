import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="relative">
      <Brain className="h-8 w-8 text-primary" />
      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-chart-1 rounded-full" />
    </div>
  );
};

export default Logo;