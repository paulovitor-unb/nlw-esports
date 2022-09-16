import { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className="px-4 py-3 bg-zinc-900 rounded text-sm placeholder:text-zinc-500"
            {...props}
        />
    );
}
