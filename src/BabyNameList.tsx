import { BabyName } from "./BabyName";
import { BabyNameData } from "./types";

interface BabyNameListProps {
  names: BabyNameData[];
  onClick: (one: BabyNameData) => void;
  className: string;
}

export function BabyNameList(props: BabyNameListProps) {
  return (
    <div className={props.className}>
      {props.names.map((oneBabyName) => (
        <BabyName
          key={oneBabyName.id}
          nameData={oneBabyName}
          clickyFunction={props.onClick}
        />
      ))}
    </div>
  );
}
