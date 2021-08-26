export type ButtonHtmlType = "button" | "submit" | "reset";

export type ButtonPattern = "forbidden" | "link" | "primary";

export type ButtonElementProps = {
    type: ButtonHtmlType;
    pattern: ButtonPattern;
}

export type ButtonLoadingElementProps = {
    isPlay?: boolean;
}