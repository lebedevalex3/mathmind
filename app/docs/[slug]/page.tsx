import { getTopicBySlug } from "@/lib/topics";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MathDisplay from "@/components/math/MathDisplay";

// Содержимое тем
const topicContent: Record<string, any> = {
  "division-of-fractions": {
    title: "Деление дробей",
    content: `
# Деление дробей

## Теоретический блок

Деление дробей — это математическая операция, которая связана с умножением дробей. Для того чтобы разделить одну дробь на другую, нужно умножить делимое на число, обратное делителю.

### Правило деления дроби на дробь:

Чтобы разделить первую дробь на вторую, нужно:
1. Перевернуть вторую дробь (делитель)
2. Умножить первую дробь на перевернутую вторую дробь

### Важные свойства:
- При делении дроби на натуральное число, достаточно умножить знаменатель дроби на это число
- При делении натурального числа на дробь, достаточно умножить это число на обратную дробь

## Пример с решением

**Задача:** Найдите значение выражения 3/4 ÷ 2/5

**Решение:**

1. Запишем задачу в виде: 3/4 ÷ 2/5

2. Чтобы выполнить деление, умножим первую дробь на обратную ко второй:
   3/4 ÷ 2/5 = 3/4 × 5/2

3. Выполним умножение числителей и знаменателей:
   3/4 × 5/2 = (3 × 5)/(4 × 2) = 15/8

4. Получаем ответ: 15/8 = 1 7/8

**Ответ:** 15/8 или 1 7/8
    `
  },
  "quadratic-equations": {
    title: "Квадратные уравнения",
    content: `
# Квадратные уравнения

## Теоретический блок

Квадратное уравнение — это уравнение вида ax² + bx + c = 0, где a, b и c — некоторые числа, причем a ≠ 0.

### Формула дискриминанта

Для решения квадратного уравнения сначала вычисляют дискриминант по формуле:

D = b² - 4ac

В зависимости от значения дискриминанта определяют количество корней уравнения:
- Если D > 0, то уравнение имеет два различных действительных корня
- Если D = 0, то уравнение имеет один действительный корень (два совпадающих корня)
- Если D < 0, то уравнение не имеет действительных корней

### Формула корней квадратного уравнения

Если D ≥ 0, то корни квадратного уравнения вычисляются по формуле:

x₁,₂ = (-b ± √D)/(2a)

## Пример с решением

**Задача:** Решите квадратное уравнение 2x² - 5x - 3 = 0

**Решение:**

1. Определим коэффициенты уравнения:
   - a = 2
   - b = -5
   - c = -3

2. Вычислим дискриминант:
   D = b² - 4ac = (-5)² - 4 × 2 × (-3) = 25 + 24 = 49

3. Так как D > 0, уравнение имеет два различных действительных корня.

4. Найдем корни по формуле:
   x₁,₂ = (5 ± √49)/(2 × 2) = (5 ± 7)/4

5. Вычислим значения корней:
   x₁ = (5 + 7)/4 = 12/4 = 3
   x₂ = (5 - 7)/4 = -2/4 = -1/2

**Ответ:** x₁ = 3, x₂ = -1/2
    `
  },
  "abbreviated-multiplication": {
    title: "Формулы сокращённого умножения",
    content: `
# Формулы сокращённого умножения

## Теоретический блок

Формулы сокращённого умножения — это специальные тождества, позволяющие упростить вычисления и преобразования алгебраических выражений.

### Основные формулы сокращённого умножения:

1. **Квадрат суммы**: (a + b)² = a² + 2ab + b²

2. **Квадрат разности**: (a - b)² = a² - 2ab + b²

3. **Разность квадратов**: a² - b² = (a + b)(a - b)

4. **Куб суммы**: (a + b)³ = a³ + 3a²b + 3ab² + b³

5. **Куб разности**: (a - b)³ = a³ - 3a²b + 3ab² - b³

6. **Сумма кубов**: a³ + b³ = (a + b)(a² - ab + b²)

7. **Разность кубов**: a³ - b³ = (a - b)(a² + ab + b²)

Эти формулы широко используются при упрощении алгебраических выражений, разложении на множители и других преобразованиях.

## Пример с решением

**Задача:** Упростите выражение (2x + 3)² - (2x - 3)²

**Решение:**

1. Воспользуемся формулами квадрата суммы и квадрата разности:
   - (a + b)² = a² + 2ab + b²
   - (a - b)² = a² - 2ab + b²

2. Применим их к нашему выражению:
   (2x + 3)² - (2x - 3)² = [(2x)² + 2×2x×3 + 3²] - [(2x)² - 2×2x×3 + 3²]

3. Подставим значения и упростим:
   (2x)² = 4x²
   2×2x×3 = 12x
   3² = 9

   Получаем:
   (4x² + 12x + 9) - (4x² - 12x + 9)

4. Раскроем скобки и приведем подобные:
   4x² + 12x + 9 - 4x² + 12x - 9 = 24x

5. Для проверки можно также воспользоваться формулой разности квадратов:
   (2x + 3)² - (2x - 3)² = ((2x + 3) + (2x - 3))((2x + 3) - (2x - 3)) = (4x) × (6) = 24x

**Ответ:** (2x + 3)² - (2x - 3)² = 24x
    `
  }
};

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopicBySlug(params.slug);
  const content = topicContent[params.slug];

  if (!topic || !content) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">
          Главная
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/docs" className="hover:text-primary transition-colors">
          Учебные материалы
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span>{topic.title}</span>
      </div>

      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к материалам
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {content.content.split('\n').map((line: string, index: number) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mb-6 mt-8">{line.slice(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mb-4 mt-6">{line.slice(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-medium mb-3 mt-4">{line.slice(4)}</h3>;
            } else if (line.startsWith('**') && line.endsWith('**')) {
              return <p key={index} className="font-bold mb-2">{line.slice(2, -2)}</p>;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="mb-1">{line.slice(2)}</li>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else if (line.match(/^\d+\./)) {
              return <p key={index} className="mb-2">{line}</p>;
            } else {
              return <p key={index} className="mb-3">{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'division-of-fractions' },
    { slug: 'quadratic-equations' },
    { slug: 'abbreviated-multiplication' }
  ];
}