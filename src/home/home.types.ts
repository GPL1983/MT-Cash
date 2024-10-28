// SAMPLE COMPONENT
export interface SampleItemProps {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface SampleState {
  data: SampleItemProps[];
  loading: boolean;
  error: string | null;
}
