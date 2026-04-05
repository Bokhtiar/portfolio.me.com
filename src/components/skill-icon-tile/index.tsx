import type { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  label: string;
};

export function SkillIconTile({ icon: Icon, label }: Props): JSX.Element {
  return (
    <div
      className="bg-primary m-1 px-12 border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90 flex items-center justify-center py-5"
      title={label}
    >
      <Icon className="h-[60px] w-[60px] text-white" aria-hidden />
      <span className="sr-only">{label}</span>
    </div>
  );
}
