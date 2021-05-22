import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Circles from '../Circle/Circles';
import BackgroundDots from '../BackgroundDots/BackgroundDots';
import LaunchRocket from '../LaunchRocket/LaunchRocket';
import DetailTiles from '../DetailTiles/DetailTiles';
import styleUtils from '../../helpers/styleUtils';

const DashboardWrapper = styled(styleUtils.CenteredContent)`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: #221b3a;
`;

const DashboardGrid = styled.div`
	width: 100%;
	max-width: 1140px;
	max-height: 640px;
	z-index: 2;
	flex-grow: 2;
	position: relative;
	padding: 0 15px;
`;

const MainContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: calc(100% - 60px);
	max-height: 580px;
`;

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<Circles />
			<BackgroundDots />
			<DashboardGrid className='dashboardGrid'>
				<Logo />
				<MainContentWrapper className='mainContentWrapper'>
					<DetailTiles />
					<LaunchRocket />
				</MainContentWrapper>
			</DashboardGrid>
			<div className='spacer' style={{ flexGrow: 1 }} />
			<Footer />
		</DashboardWrapper>
	);
};

export default Dashboard;
