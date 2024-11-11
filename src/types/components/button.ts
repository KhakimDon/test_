export type TButtonVariants =
  | "primary"
  | "secondary"
  | "outline"
  | "gray"
  | "danger";
export type TButtonSizes = "sm" | "md";

export const buttonVariants = ["primary", "success", "danger"] as const;

export type ButtonVariants = (typeof buttonVariants)[number];
