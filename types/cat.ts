export interface CatChildrenItem{
  fullUrl: string;
  id: number;
  title: string;
}
export interface CatPoemsItem{
  id: number;
  title?: string;
  urlSlug?: string;
  excerpt?: string;  
}
export interface Cat {
  poems?: CatPoemsItem[]; 
  descriptionHtml?: string;
  description?: string;
  children?: CatChildrenItem[];
  fullUrl?: string;
}
