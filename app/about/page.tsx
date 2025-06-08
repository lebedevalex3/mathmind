import Link from "next/link";
import { ChevronRight, BookOpenCheck, Brain, Users, School, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">
          Главная
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>О платформе</span>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О платформе MathMind</h1>
          <p className="text-lg text-muted-foreground">
            Образовательная платформа, которая делает изучение математики увлекательным и доступным
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="prose max-w-none">
            <p>
              <span className="font-bold text-primary">MathMind</span> — это образовательная платформа, созданная с целью помочь 
              школьникам 5 и 9 классов освоить математику легко и эффективно. Мы верим, что 
              математика может быть интересной и доступной для каждого ученика при правильном подходе.
            </p>
            <p>
              Наша команда опытных педагогов и разработчиков создала уникальную методику обучения, 
              которая сочетает в себе теоретические материалы, наглядные примеры и интерактивные 
              задания. Все материалы соответствуют школьной программе и разработаны с учетом 
              возрастных особенностей учащихся.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-chart-1" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Сделать изучение математики доступным, понятным и увлекательным для каждого школьника, 
                  развивая логическое мышление и любовь к точным наукам.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-chart-2" />
                  Наш подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Сочетание теории и практики, визуализация сложных понятий, адаптация материалов 
                  под возраст учащихся и индивидуальный темп обучения.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Почему нам доверяют</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card border border-border/50 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 md:p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Готовы начать обучение?</h2>
            <p className="text-muted-foreground mb-6">
              Присоединяйтесь к MathMind и откройте для себя увлекательный мир математики!
            </p>
            <Button asChild>
              <Link href="/docs">
                <BookOpenCheck className="mr-2 h-4 w-4" />
                Перейти к учебным темам
              </Link>
            </Button>
          </div>
          
          <div className="border-t border-border pt-6 mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              У вас есть вопросы? Свяжитесь с нами по адресу{" "}
              <a href="mailto:support@mathmind.edu" className="text-primary hover:underline">
                support@mathmind.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    title: "Эксперты в образовании",
    description: "Команда опытных педагогов и методистов с многолетним опытом преподавания",
    icon: <Users className="h-6 w-6 text-chart-1" />,
  },
  {
    title: "Согласованность с программой",
    description: "Все материалы соответствуют школьной программе и требованиям ФГОС",
    icon: <School className="h-6 w-6 text-chart-2" />,
  },
  {
    title: "Современный подход",
    description: "Интерактивные материалы, адаптивное обучение и наглядное представление информации",
    icon: <Brain className="h-6 w-6 text-chart-3" />,
  },
];