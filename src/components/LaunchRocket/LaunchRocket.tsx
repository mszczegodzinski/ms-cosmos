import React from 'react';
import styled from 'styled-components';
import Planet from '../Planet/Planet';
import Button from '../Button/Button';
import styleUtils from '../../helpers/styleUtils';

const LaunchRocketWrapper = styled(styleUtils.CenteredContent)`
	justify-content: flex-end;
	align-items: flex-end;
	width: 50%;
	height: 100%;
	padding-bottom: 32px;
`;

const LaunchRocket = () => {
	return (
		<LaunchRocketWrapper>
			<Planet />
			<Button>Launch Rocket!</Button>
		</LaunchRocketWrapper>
	);
};

export default LaunchRocket;
