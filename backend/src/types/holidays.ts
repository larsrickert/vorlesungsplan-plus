export interface Holiday {
  date: string;
  name: string;
  comment: string;
}

export type ApiHolidays = Record<
  string,
  {
    datum: string;
    hinweis: string;
  }
>;
