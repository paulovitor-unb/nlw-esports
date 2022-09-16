import { HTMLAttributes } from "react";

export function FormGroup(props: HTMLAttributes<HTMLElement>) {
    return <div className="flex flex-col gap-2" {...props}></div>;
}
