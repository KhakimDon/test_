type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[];

export type TClassName = TClass | TClass[];

export type TFirstPage = {
  sub: string,
  title: string,
  text: string,
  contacts: string,
  about: string,
};