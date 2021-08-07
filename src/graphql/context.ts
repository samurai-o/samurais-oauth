import React, { createContext } from "react";


export interface IGraphqlContext {
    uri: string;
    setUri: React.Dispatch<React.SetStateAction<string>>
}

export const GraphqlContext = createContext<Partial<IGraphqlContext>>({});