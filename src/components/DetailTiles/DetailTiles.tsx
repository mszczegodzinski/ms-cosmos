import React, { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import DetailTile from './DetailTile';
import CapsulesImage from '../../assets/images/Image 4.png';
import CrewImage from '../../assets/images/Image 1.png';
import RocketsImage from '../../assets/images/Image 2.png';
import StarlinkImage from '../../assets/images/Image 3.png';
import { getCapsuleData, getCrewData, getRocketsData, getStarlinkData } from '../../actions/actions';
import { connect } from 'react-redux';

const DetailTilesWrapper = styled(styleUtils.CenteredContent)`
	width: 100%;
	flex-direction: column;
	flex-wrap: wrap;
	@media screen and (min-width: 500px) {
		flex-direction: row;
		align-content: flex-end;
	}
	@media screen and (min-width: 850px) {
		width: 50%;
		justify-content: flex-start;
		padding-left: 35px;
	}
	@media screen and (min-width: 992px) {
		padding-left: 95px;
	}
`;

const DetailsTile = ({ getCapsuleData, getCrewData, getRocketsData, getStarlinkData }) => {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
	const [isCapsulesTileClicked, setIsCapsuleTileClicked] = useState(false);
	const [isCrewTileClicked, setIsCrewTileClicked] = useState(false);
	const [isRocketsTileClicked, setIRocketsTileClicked] = useState(false);
	const [isStarlinkTileClicked, setIsStarlinkTileClicked] = useState(false);

	const checkIfScreenIsSmall = (e: UIEvent) => {
		const currentTarget = e.target as Window;
		if (currentTarget.innerWidth < 500 && !isSmallScreen) {
			setIsSmallScreen(true);
		}
		if (currentTarget.innerWidth >= 500 && isSmallScreen) {
			setIsSmallScreen(false);
		}
	};

	const handleTileClick = (e) => {
		const currentTileId = e.target.id;
		if (currentTileId === 'capsules') {
			console.log(currentTileId);
			getCapsuleData();
		}
		if (currentTileId === 'crew') {
			console.log(currentTileId);
			getCrewData();
		}
		if (currentTileId === 'rockets') {
			console.log(currentTileId);
			getRocketsData();
		}
		if (currentTileId === 'starlink') {
			console.log(currentTileId);
			getStarlinkData();
		}
	};

	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsSmallScreen(true);
		}
		// add listeners to window and tiles:
		window.addEventListener('resize', checkIfScreenIsSmall);
		const capsuleTile = document.querySelector('.capsules')!;
		const crewTile = document.querySelector('.crew')!;
		const rocketsTile = document.querySelector('.rockets')!;
		const starlinkTile = document.querySelector('.starlink')!;
		capsuleTile.addEventListener('click', handleTileClick);
		crewTile.addEventListener('click', handleTileClick);
		rocketsTile.addEventListener('click', handleTileClick);
		starlinkTile.addEventListener('click', handleTileClick);
		// stop propagation for title elements:
		const titles = document.querySelectorAll('.title');
		titles.forEach((title) => {
			title.addEventListener('click', (e) => e.stopPropagation());
		});
		return () => {
			window.removeEventListener('resize', checkIfScreenIsSmall);
			capsuleTile.removeEventListener('click', handleTileClick);
			crewTile.removeEventListener('click', handleTileClick);
			rocketsTile.removeEventListener('click', handleTileClick);
			starlinkTile.removeEventListener('click', handleTileClick);
			titles.forEach((title) => {
				title.removeEventListener('click', (e) => e.stopPropagation());
			});
		};
	}, [isSmallScreen]);

	return (
		<DetailTilesWrapper>
			<div style={{ marginRight: isSmallScreen ? '0' : '30px' }}>
				<DetailTile className='capsules' title='Capsules' image={CapsulesImage} alt='' />
				<DetailTile className='rockets' title='Rockets' image={RocketsImage} alt='' />
			</div>
			<div>
				<DetailTile className='crew' title='Crew' image={CrewImage} alt='' />
				<DetailTile className='starlink' title='Starlink' image={StarlinkImage} alt='' />
			</div>
		</DetailTilesWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		getCapsulesSuccesfully: state.getCapsulesSuccesfully,
		getCapsulesFailed: state.getCapsulesFailed,
		getCrewSuccesfully: state.getCrewSuccesfully,
		getCrewFailed: state.getCrewFailed,
		getRocketsSuccesfully: state.getRocketsSuccesfully,
		getRocketsFailed: state.getRocketsFailed,
		getStarlinkSuccesfully: state.getStarlinkSuccesfully,
		getStarlinkFailed: state.getStarlinkFailed,
	};
};

const actions = {
	getCapsuleData,
	getCrewData,
	getRocketsData,
	getStarlinkData,
};

export default connect(mapStateToProps, actions)(DetailsTile);
