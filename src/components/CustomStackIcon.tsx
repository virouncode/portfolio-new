import StackIcon from "tech-stack-icons";

type CustomStackIconProps = {
  name: string;
  label: string;
};
const CustomStackIcon = ({ name, label }: CustomStackIconProps) => {
  return (
    <figure className="flex flex-col gap-2 items-center">
      <StackIcon name={name} className="w-14 h-14" />
      <figcaption className="text-xs">{label}</figcaption>
    </figure>
  );
};

export default CustomStackIcon;
