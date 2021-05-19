import React from 'react';
import styled from 'styled-components';
import VectorWhite from '../../assets/images/Vector.svg';
import VectorPurple from '../../assets/images/VectorPurple.svg';

const LogoWrapper = styled.div`
	position: relative;
	height: 24px;
	margin: 36px 0 0 15px;
`;
const LogoPurple = styled.div`
	position: absolute;
	left: 0;
	bottom: 6.2px;
`;

const Footer = () => {
	return (
		<LogoWrapper className='logo'>
			<img src={VectorWhite} />
			<LogoPurple>
				<img src={VectorPurple} />
			</LogoPurple>
		</LogoWrapper>
	);
};

export default Footer;
