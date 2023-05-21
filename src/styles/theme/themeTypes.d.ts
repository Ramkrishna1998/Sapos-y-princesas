export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export interface IMappedTheme {
  [key: string]: string | null;
}
export type IThemeColors =
  | 'primary'
  | 'neutral'
  | 'text'
  | 'cherry'
  | 'apple'
  | 'secondary'
  | 'alto'
  | 'graphite'
  | 'mercury';

export type IPallets = Record<
  IThemeColors,
  Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>
>;
