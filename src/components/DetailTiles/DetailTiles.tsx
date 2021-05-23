import React, { useState, useEffect, MouseEvent } from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import DetailTile from './DetailTile';
import CapsulesImage from '../../assets/images/Image 4.png';
import CrewImage from '../../assets/images/Image 1.png';
import RocketsImage from '../../assets/images/Image 2.png';
import StarlinkImage from '../../assets/images/Image 3.png';
import {
	getCapsuleData,
	getCrewData,
	getRocketsData,
	getStarlinkData,
	showModal,
	setCurrentPopupTitle,
} from '../../actions/actions';
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

interface DetailsTileProps {
	getCapsuleData: () => void;
	getCrewData: () => void;
	getRocketsData: () => void;
	getStarlinkData: () => void;
	showModal: (isVisible: boolean) => void;
	setCurrentPopupTitle: (title: string) => void;
}

const DetailTiles = ({
	getCapsuleData,
	getCrewData,
	getRocketsData,
	getStarlinkData,
	showModal,
	setCurrentPopupTitle,
}: DetailsTileProps) => {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

	const checkIfScreenIsSmall = (e: UIEvent): void => {
		const currentTarget = e.target as Window;
		if (currentTarget.innerWidth < 500 && !isSmallScreen) {
			setIsSmallScreen(true);
		}
		if (currentTarget.innerWidth >= 500 && isSmallScreen) {
			setIsSmallScreen(false);
		}
	};

	const handleTileClick = (e: MouseEvent): void => {
		const currentTileId = (e.target as HTMLDivElement).id;
		const currentIdLowerCase = currentTileId.toLowerCase();
		showModal(true);
		setCurrentPopupTitle(currentTileId);

		if (currentIdLowerCase === 'capsules') return getCapsuleData();
		if (currentIdLowerCase === 'crew') return getCrewData();
		if (currentIdLowerCase === 'rockets') return getRocketsData();
		if (currentIdLowerCase === 'starlink') return getStarlinkData();
	};

	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsSmallScreen(true);
		}
		// add listeners to window and tiles:
		window.addEventListener('resize', checkIfScreenIsSmall);

		// stop propagation for title elements:
		const titles = document.querySelectorAll('.title');
		titles.forEach((title) => {
			title.addEventListener('click', (e) => e.stopPropagation());
		});
		return () => {
			window.removeEventListener('resize', checkIfScreenIsSmall);
			titles.forEach((title) => {
				title.removeEventListener('click', (e) => e.stopPropagation());
			});
		};
	}, [isSmallScreen]);

	return (
		<DetailTilesWrapper>
			<div style={{ marginRight: isSmallScreen ? '0' : '30px' }}>
				<DetailTile handleTileClick={handleTileClick} className='capsules' title='Capsules' image={CapsulesImage} />
				<DetailTile handleTileClick={handleTileClick} className='rockets' title='Rockets' image={RocketsImage} />
			</div>
			<div>
				<DetailTile handleTileClick={handleTileClick} className='crew' title='Crew' image={CrewImage} />
				<DetailTile handleTileClick={handleTileClick} className='starlink' title='Starlink' image={StarlinkImage} />
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
	showModal,
	setCurrentPopupTitle,
};

export default connect(mapStateToProps, actions)(DetailTiles);
