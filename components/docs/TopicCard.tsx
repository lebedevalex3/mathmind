import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BookOpenCheck, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Topic } from "@/lib/topics";

interface TopicCardProps {
  topic: Topic;
  className?: string;
}

const TopicCard = ({ topic, className }: TopicCardProps) => {
  return (
    <Card className={cn("h-full flex flex-col transition-all hover:shadow-md", className)}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {topic.grade} класс
          </Badge>
          {topic.id === "division-of-fractions" ? (
            <GraduationCap className="h-5 w-5 text-chart-1" />
          ) : topic.id === "quadratic-equations" ? (
            <GraduationCap className="h-5 w-5 text-chart-2" />
          ) : (
            <GraduationCap className="h-5 w-5 text-chart-3" />
          )}
        </div>
        <CardTitle className="text-xl">{topic.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{topic.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/docs/${topic.slug}`}>
            <BookOpenCheck className="mr-2 h-4 w-4" /> Изучить тему
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TopicCard;