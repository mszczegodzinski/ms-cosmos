import styled from 'styled-components';

/* 24/Bold */
export const TypographyH500 = styled.span`
	font-family: Inter;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	color: #ffffff;
`;

/* 16/Semi Bold */
export const TypographyH300 = styled(TypographyH500)`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
`;

/* 14/Semi Bold */
export const TypographyH200 = styled(TypographyH300)`
	font-size: 14px;
	line-height: 20px;
`;

/* 12/Semi Bold */
export const TypographyH100 = styled(TypographyH200)`
	font-size: 12px;
	line-height: 16px;
`;

/* 12/Regular */
export const TypographyRegular = styled(TypographyH100)`
	font-weight: 400;
	letter-spacing: 0.4px;
`;
