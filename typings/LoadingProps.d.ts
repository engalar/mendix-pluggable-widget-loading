/**
 * This file was generated from Loading.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { EditableValue } from "mendix";

export interface LoadingContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    IsLoading: EditableValue<boolean>;
    content: ReactNode;
}

export interface LoadingPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    IsLoading: string;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
