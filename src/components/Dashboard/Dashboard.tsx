import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Circles from '../Circle/Circles';
import BackgroundDots from '../BackgroundDots/BackgroundDots';
import LaunchRocket from '../LaunchRocket/LaunchRocket';
import DetailTiles from '../DetailTiles/DetailTiles';
import styleUtils from '../../helpers/styleUtils';
import DetailsPopup from '../DetailsPopup/DetailsPopup';

const DashboardWrapper = styled(styleUtils.CenteredContent)`
	position: relative;
	width: 100vw;
	height: auto;
	background: #221b3a;
	@media screen and (min-width: 850px) {
		height: 100vh;
	}
`;

const DashboardGrid = styled.div`
	width: 100%;
	max-width: 1140px;
	max-height: auto;
	z-index: 2;
	flex-grow: 2;
	position: relative;
	@media screen and (min-width: 850px) {
		max-height: 640px;
		padding: 0 15px;
	}
`;

const MainContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 60px);
	max-height: auto;
	@media screen and (min-width: 850px) {
		flex-direction: row;
		max-height: 580px;
	}
`;

const Dashboard = () => {
	return (
		<>
			<DashboardWrapper className='dashboardWrapper'>
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
				<DetailsPopup />
			</DashboardWrapper>
		</>
	);
};

export default Dashboard;
