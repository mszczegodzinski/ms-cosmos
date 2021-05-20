import React from 'react';
import styled from 'styled-components';
import { TypographyH300 } from '../Typography/Typography';

const ButtonWrapper = styled.div`
	padding-right: 165px;
`;

const CustomButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 24px;
	padding: 12px 32px;
	background: #7860d7;
	border-radius: 8px;
	border: 0px;
	&:hover {
		background: #05c9b7;
	}
`;

interface ButtonProps {
	readonly children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<ButtonWrapper>
			<CustomButton>
				<TypographyH300>{children}</TypographyH300>
			</CustomButton>
		</ButtonWrapper>
	);
};

export default Button;
