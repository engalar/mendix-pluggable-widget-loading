import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { LoadingPreviewProps } from "../typings/LoadingProps";

declare function require(name: string): string;

export function preview(props: LoadingPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
