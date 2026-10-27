export type Page =
  | 'beranda'
  | 'layanan'
  | 'konseling'
  | 'tanya'
  | 'peta-arah'
  | 'masa-depan'
  | 'perpustakaan'
  | 'privasi'
  | 'tentang';

export type BKCategory = 'pribadi' | 'sosial' | 'belajar' | 'karier';

export interface ServiceCategory {
  id: BKCategory;
  title: string;
  shortDesc: string;
  tagline: string;
  colorScheme: {
    bgLight: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  overview: string;
  problemCases: string[];
  keyTopics: string[];
  tips: { title: string; desc: string }[];
}

export interface Article {
  id: string;
  title: string;
  category: BKCategory;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  readTime: string;
  updatedAt: string;
  source: string;
}

export interface FAQItem {
  id: string;
  category: BKCategory | 'umum';
  question: string;
  answer: string;
}

export interface CounselingBooking {
  id: string;
  nickname: string;
  grade: string;
  category: BKCategory;
  format: 'tatap-muka' | 'daring';
  preferredDay: string;
  preferredTime: string;
  topicNote: string;
  createdAt: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    desc: string;
    category: BKCategory;
    recommendationNote: string;
  }[];
}
