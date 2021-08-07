import { gql } from "@apollo/client";

export const LOGIN = gql`
    query Login {
        login() {}
    }
`;

export const REGISTER = gql`
    mutation Register {
        register() {}
    }
`;