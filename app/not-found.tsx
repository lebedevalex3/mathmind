import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Упс! Кажется, вы искали страницу, которая не существует или была перемещена.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            На главную
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs">
            <Search className="mr-2 h-4 w-4" />
            Перейти к учебным материалам
          </Link>
        </Button>
      </div>
    </div>
  );
}