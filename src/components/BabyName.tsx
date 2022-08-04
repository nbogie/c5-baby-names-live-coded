import { BabyNameData } from "../types";

interface BabyNameProps {
    nameData: BabyNameData;
    clickyFunction: any;
}

export function BabyName(props: BabyNameProps): JSX.Element {
    return (
        <button
            onClick={() => props.clickyFunction(props.nameData)}
            className={"babyName " + props.nameData.sex}
        >
            {props.nameData.name}
        </button >
    )
}