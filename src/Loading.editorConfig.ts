import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { LoadingPreviewProps } from "../typings/LoadingProps";

export function getProperties(
    values: LoadingPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: LoadingPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
