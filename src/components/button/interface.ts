export type ButtonHtmlType = "button" | "submit" | "reset";

export type ButtonPattern = "forbidden" | "link" | "primary" | "default";

export type ButtonElementProps = {
    type: ButtonHtmlType;
    pattern: ButtonPattern;
}

export type ButtonLoadingElementProps = {
    recover?: boolean;
    isPlay?: boolean;
}