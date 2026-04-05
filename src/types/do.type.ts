import type { ReactNode } from "react";

export interface IDo {
  /** Image path under /public (omit if using `icon`) */
  logo?: string;
  /** Optional icon instead of `logo` */
  icon?: ReactNode;
  title: string;
  description: string;
}
