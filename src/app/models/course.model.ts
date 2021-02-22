import { Option } from "./option.model";

export interface Course {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors?: Option[];
  isTopRated?: boolean;
}
