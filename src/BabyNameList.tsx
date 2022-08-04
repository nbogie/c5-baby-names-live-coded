import { BabyName } from "./BabyName";
import { BabyNameData } from "./types";

interface BabyNameListProps {
  /** The baby names to show! zero or more.*/
  names: BabyNameData[];

  /** Function to call if user clicks on a name.  
   * Will be passed the relevant single BabyNameData */
  onClick: (one: BabyNameData) => void;

  /** extra class to add to the element rendered */
  className: string;
}

export function BabyNameList(props: BabyNameListProps) {
  return (
    <div className={"babyNameList " + props.className}>
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
