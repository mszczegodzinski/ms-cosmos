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

const DetailsTile = ({
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
		console.log(currentTileId);
		if (currentIdLowerCase === 'capsules') {
			console.log(currentTileId);
			getCapsuleData();
		}
		if (currentIdLowerCase === 'crew') {
			console.log(currentTileId);
			getCrewData();
		}
		if (currentIdLowerCase === 'rockets') {
			console.log(currentTileId);
			getRocketsData();
		}
		if (currentIdLowerCase === 'starlink') {
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
		<DetailTilesWrapper onClick={handleTileClick}>
			<div style={{ marginRight: isSmallScreen ? '0' : '30px' }}>
				<DetailTile className='capsules' title='Capsules' image={CapsulesImage} />
				<DetailTile className='rockets' title='Rockets' image={RocketsImage} />
			</div>
			<div>
				<DetailTile className='crew' title='Crew' image={CrewImage} />
				<DetailTile className='starlink' title='Starlink' image={StarlinkImage} />
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

export default connect(mapStateToProps, actions)(DetailsTile);
