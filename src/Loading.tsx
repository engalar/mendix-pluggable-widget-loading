import { createElement, useMemo } from "react";
import { LoadingContainerProps } from "../typings/LoadingProps";
import { ValueStatus } from "mendix";
import { Loading } from "@alifd/next";
import '@alifd/next/lib/loading/style';

export default function (props: LoadingContainerProps) {
    const isLoading = useMemo(() => {
        if (props.IsLoading && props.IsLoading.status === ValueStatus.Available) {
            return props.IsLoading.value!;
        }
        return true;
    }, [props.IsLoading]);

    return (
        <Loading visible={isLoading} tip="加载中...">
            {props.content}
        </Loading>
    );
}
