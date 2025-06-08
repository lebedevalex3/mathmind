import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/layout/Logo";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("bg-muted py-8 mt-16", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
            <div className="ml-4">
              <div className="font-bold text-xl">MathMind</div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для школьников
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                    Учебные пособия
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    О платформе
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Для учителей</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Методические материалы
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Создать аккаунт
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Свяжитесь с нами</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  support@mathmind.edu
                </li>
                <li className="text-muted-foreground">
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} MathMind. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;