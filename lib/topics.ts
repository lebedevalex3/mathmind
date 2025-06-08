export interface Topic {
  id: string;
  title: string;
  description: string;
  grade: number;
  slug: string;
}

const topics: Topic[] = [
  {
    id: 'division-of-fractions',
    title: 'Деление дробей',
    description: 'Изучение правил и методов деления обыкновенных дробей',
    grade: 5,
    slug: 'division-of-fractions'
  },
  {
    id: 'quadratic-equations',
    title: 'Квадратные уравнения',
    description: 'Изучение методов решения квадратных уравнений и формулы дискриминанта',
    grade: 9,
    slug: 'quadratic-equations'
  },
  {
    id: 'abbreviated-multiplication',
    title: 'Формулы сокращённого умножения',
    description: 'Изучение основных формул сокращённого умножения и их применение',
    grade: 9,
    slug: 'abbreviated-multiplication'
  }
];

export function getAllTopics(): Topic[] {
  return topics;
}

export function getTopicsByGrade(grade: number): Topic[] {
  return topics.filter(topic => topic.grade === grade);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(topic => topic.slug === slug);
}