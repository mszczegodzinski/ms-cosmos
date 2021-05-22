import React from 'react';
import styled from 'styled-components';
import VectorWhite from '../../assets/images/Vector.svg';
import VectorPurple from '../../assets/images/VectorPurple.svg';

const LogoWrapper = styled.div`
	position: relative;
	height: 24px;
	margin-top: 36px;
`;
const LogoPurple = styled.div`
	position: absolute;
	left: 0;
	bottom: 6.2px;
`;

const Footer = () => {
	return (
		<LogoWrapper className='logo'>
			<img src={VectorWhite} alt='usertive logo' />
			<LogoPurple>
				<img src={VectorPurple} alt='usertive logo' />
			</LogoPurple>
		</LogoWrapper>
	);
};

export default Footer;
