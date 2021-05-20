import React from 'react';
import styled from 'styled-components';
import { TypographyRegular } from '../Typography/Typography';
import styleUtils from '../../helpers/styleUtils';

const StyledFooterWrapper = styled(styleUtils.CenteredContent)`
	width: 100%;
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 1111px;
	height: 16px;
	color: #8d7fbc;
	margin-bottom: 24px;
	z-index: 2;
	padding: 0 20px;
	@media (min-width: 1200px) {
		padding: 0;
	}
`;

const Footer = () => {
	return (
		<StyledFooterWrapper className='styledFooterWrapper'>
			<StyledFooter className='styledFooter'>
				<TypographyRegular color='#8D7FBC'>
					{'Copyright '} &copy; {' Usertive & SpaceX API'}
				</TypographyRegular>
				<TypographyRegular color='#8D7FBC'>Recruitment Task / Summer 2021</TypographyRegular>
			</StyledFooter>
		</StyledFooterWrapper>
	);
};

export default Footer;
