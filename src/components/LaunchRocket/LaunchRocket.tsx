import React from 'react';
import styled from 'styled-components';
import Planet from '../Planet/Planet';
import Button from '../Button/Button';
import styleUtils from '../../helpers/styleUtils';

const LaunchRocketWrapper = styled(styleUtils.CenteredContent)`
	padding-top: 100px;
	width: 100%;
	height: 100%;
	padding-bottom: 32px;
	@media screen and (min-width: 850px) {
		width: 50%;
		justify-content: flex-end;
		align-items: flex-end;
		padding-left: 35px;
		padding-top: 0;
	}
	@media screen and (min-width: 992px) {
		padding-left: 95px;
	}
`;

const LaunchRocket = () => {
	return (
		<LaunchRocketWrapper className='launchRocketWrapper'>
			<Planet />
			<Button>Launch Rocket!</Button>
		</LaunchRocketWrapper>
	);
};

export default LaunchRocket;
