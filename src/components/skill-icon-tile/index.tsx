import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
};

export function SkillIconTile({ children, label }: Props): JSX.Element {
  return (
    <div
      className="bg-primary m-1 px-12 border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90 flex items-center justify-center py-5"
      title={label}
    >
      {children}
      <span className="sr-only">{label}</span>
    </div>
  );
}
