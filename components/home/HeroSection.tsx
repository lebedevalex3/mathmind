"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Brain, BookOpenCheck, UsersRound } from "lucide-react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--chart-2)/0.2),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--chart-1)/0.15),transparent_40%)]" />
      
      <div 
        ref={ref}
        className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center"
      >
        <div 
          className={cn(
            "transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="inline-flex items-center justify-center p-1 bg-muted rounded-full mb-6">
            <div className="inline-flex items-center rounded-full px-4 py-1 bg-background text-sm font-medium">
              <Brain className="h-4 w-4 mr-1 text-chart-1" />
              Обучение математике в игровой форме
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Открой мир математики с{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">
              MathMind
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Образовательная платформа, которая делает изучение математики увлекательным и эффективным для школьников 5 и 9 классов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/docs">
                <BookOpenCheck className="mr-2 h-4 w-4" />
                Перейти к учебным темам
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">
                <UsersRound className="mr-2 h-4 w-4" />
                О платформе
              </Link>
            </Button>
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl transition-all duration-1000 delay-300 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-12 group cursor-pointer transition-all duration-1000 delay-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link href="/docs" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <span className="mr-2">Начать обучение</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Интерактивное обучение",
    description: "Изучайте математику с помощью интерактивных материалов и практических заданий.",
    icon: <Brain className="h-6 w-6 text-chart-1" />,
  },
  {
    title: "Наглядные материалы",
    description: "Формулы и примеры с подробными объяснениями для лучшего понимания.",
    icon: <BookOpenCheck className="h-6 w-6 text-chart-2" />,
  },
  {
    title: "Учебная программа",
    description: "Содержание соответствует школьной программе для 5 и 9 классов.",
    icon: <UsersRound className="h-6 w-6 text-chart-3" />,
  },
];

export default HeroSection;