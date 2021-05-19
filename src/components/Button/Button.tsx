import React from 'react';
import styled from 'styled-components';
import { TypographyH300 } from '../Typography/Typography';

const CustomButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 32px;
	background: #7860d7;
	border-radius: 8px;
	&:hover {
		background: #05c9b7;
	}
`;

interface ButtonProps {
	readonly children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<CustomButton>
			<TypographyH300>{children}</TypographyH300>
		</CustomButton>
	);
};

export default Button;
