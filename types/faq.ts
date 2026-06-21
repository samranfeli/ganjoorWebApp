export interface FaqCategory {
  id: number;
  title: string;
  description?: string;
}

export interface FaqItem{
    id: number;
    answerExcerpt?: string;
    question?: string;
}
