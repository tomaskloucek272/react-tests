import type { ComponentPropsWithoutRef } from "react";

export type InputComponentProps = {
    label: string;
    startingText: string;
} & ComponentPropsWithoutRef<'input'>