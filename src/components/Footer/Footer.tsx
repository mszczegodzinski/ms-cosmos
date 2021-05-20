import React from 'react';
import styled from 'styled-components';
import { TypographyRegular } from '../Typography/Typography';

const StyledFooter = styled.div`
	max-width: 1111px;
	height: 16px;
	color: #8d7fbc;
	margin-bottom: 24px;
	width: 100%;
	z-index: 2;
`;

const CenteredContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledFooterWrapper = styled(CenteredContent)`
	width: 100%;
`;

const FooterContentStyle = styled(CenteredContent)`
	justify-content: space-between;
	flex-basis: 100%;
	padding: 0 20px;
	@media (min-width: 1200px) {
		padding: 0;
	}
`;

const Footer = () => {
	return (
		<StyledFooterWrapper className='styledFooterWrapper'>
			<StyledFooter className='styledFooter'>
				<FooterContentStyle>
					<TypographyRegular color='#8D7FBC'>
						{'Copyright '} &copy; {' Usertive & SpaceX API'}
					</TypographyRegular>
					<TypographyRegular color='#8D7FBC'>Recruitment Task / Summer 2021</TypographyRegular>
				</FooterContentStyle>
			</StyledFooter>
		</StyledFooterWrapper>
	);
};

export default Footer;
