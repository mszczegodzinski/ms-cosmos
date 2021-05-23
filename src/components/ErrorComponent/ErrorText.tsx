import React from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import { TypographyH500 } from '../Typography/Typography';

const StyledErrorText = styled(styleUtils.CenteredContent)`
	width: 100%;
	height: 36px;
	padding: 20px 0;
`;

interface ErrorText {
	message: string;
}

const ErrorText = ({ message }: ErrorText) => {
	return (
		<StyledErrorText>
			<TypographyH500>{message}</TypographyH500>
		</StyledErrorText>
	);
};

export default ErrorText;
