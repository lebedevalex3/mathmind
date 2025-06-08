import HeroSection from "@/components/home/HeroSection";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenCheck, BrainCircuit, Calculator, GraduationCap } from "lucide-react";
import { getAllTopics, getTopicsByGrade } from "@/lib/topics";
import TopicCard from "@/components/docs/TopicCard";

export default function Home() {
  const topics5 = getTopicsByGrade(5);
  const topics9 = getTopicsByGrade(9);
  
  return (
    <>
      <HeroSection />
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Учебные темы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Изучайте математику с нашими интерактивными материалами, 
            специально разработанными для учеников 5 и 9 классов
          </p>
        </div>
        
        <Tabs defaultValue="grade5" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="grade5" className="flex items-center gap-1.5">
                <Calculator className="h-4 w-4" />
                <span>5 класс</span>
              </TabsTrigger>
              <TabsTrigger value="grade9" className="flex items-center gap-1.5">
                <BrainCircuit className="h-4 w-4" />
                <span>9 класс</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grade5" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics5.map(topic => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="grade9" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics9.map(topic => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/docs">
              <BookOpenCheck className="mr-2 h-4 w-4" />
              Все учебные материалы
            </Link>
          </Button>
        </div>
      </section>
      
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-1 bg-muted rounded-full mb-4">
              <div className="inline-flex items-center rounded-full px-4 py-1 bg-background text-sm font-medium">
                <GraduationCap className="h-4 w-4 mr-1 text-chart-2" />
                Преимущества платформы
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Почему MathMind?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша платформа создана, чтобы сделать изучение математики интересным, 
              доступным и эффективным для школьников
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border/50 h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать обучение?</h2>
              <p className="text-muted-foreground mb-6">
                Присоединяйтесь к тысячам школьников, которые улучшают свои знания по математике с MathMind.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/docs">
                    <BookOpenCheck className="mr-2 h-4 w-4" />
                    Начать учиться
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block bg-gradient-to-r from-chart-1/20 to-chart-2/20 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--chart-2)/0.2),transparent_70%)]" />
              <div className="absolute bottom-10 left-10">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2">
                  MathMind
                </div>
                <p className="text-muted-foreground">Учить математику — просто!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const benefits = [
  {
    title: "Структурированные материалы",
    description: "Учебные материалы организованы по темам и классам для удобного и последовательного обучения.",
    icon: <BookOpenCheck className="h-6 w-6 text-chart-1" />,
  },
  {
    title: "Интерактивное обучение",
    description: "Теория и практика объединены в удобном интерактивном формате с наглядными примерами.",
    icon: <BrainCircuit className="h-6 w-6 text-chart-2" />,
  },
  {
    title: "Соответствие программе",
    description: "Все материалы соответствуют школьной программе и помогают подготовиться к контрольным и экзаменам.",
    icon: <GraduationCap className="h-6 w-6 text-chart-3" />,
  },
];