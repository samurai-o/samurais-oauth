import { ErrorMessage } from "formik";
import React from "react";
import styled from "styled-components";

export const FieldError = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-weight: inherit;
  position: absolute;
  position: absolute;
  bottom: 2px;
  display: inherit;
`;

export type ErrormessageProps = {
  name: string;
};
export function Errormessage(props: ErrormessageProps): JSX.Element {
	return (
		<FieldError>
			<ErrorMessage component="span" {...props} />
		</FieldError>
	);
}
