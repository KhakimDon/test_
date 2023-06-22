export type TClassName =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[];

export interface ICompany {
  title: string;
  isVerified: true;
  rating: number;
  commentsCount: number;
  categories: {
    title: string;
    slug: string;
  }[];
  about_company: string;
  work_time: string;
  work_days: string[];
  not_work_days: string[];
  site: string;
  email: string;
  phone: string;
  address: string;
}

export interface TBlog {
  title: string;
  image: string;
  created_at: string;
}

export interface IMedia {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}
