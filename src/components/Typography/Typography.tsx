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

/* 20/Bold */
export const TypographyModalTitle = styled(TypographyH500)`
	font-size: 20px;
	line-height: 32px;
`;

/* 16/Semi Bold */
export const TypographyH300 = styled(TypographyH500)`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
`;

/* 14/Semi Bold */
export const TypographyH200 = styled(TypographyH300)<{ color?: string }>`
	font-size: 14px;
	line-height: 20px;
	color: ${(props) => props.color};
`;

/* 14/Regular */
export const TypographyRegular14 = styled(TypographyH200)<{ color?: string }>`
	font-weight: 400;
	color: ${(props) => props.color};
`;

/* 12/Semi Bold */
export const TypographyH100 = styled(TypographyH200)`
	font-size: 12px;
	line-height: 16px;
`;

/* 12/Regular */
export const TypographyRegular = styled(TypographyH100)<{ color?: string }>`
	font-weight: 400;
	letter-spacing: 0.4px;
	color: ${(props) => props.color};
`;
