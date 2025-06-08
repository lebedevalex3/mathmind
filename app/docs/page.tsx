import { getAllTopics, getTopicsByGrade } from "@/lib/topics";
import TopicCard from "@/components/docs/TopicCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, BrainCircuit } from "lucide-react";

export default function DocsPage() {
  const topics5 = getTopicsByGrade(5);
  const topics9 = getTopicsByGrade(9);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Учебные материалы</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Изучайте математику с нашими интерактивными материалами, 
          специально разработанными для учеников 5 и 9 классов
        </p>
      </div>

      <Tabs defaultValue="grade5" className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics5.map(topic => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="grade9" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics9.map(topic => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}