import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import CloseIcon from '../../assets/icons/Icon Color.png';
import { showModal, resetFetchStates } from '../../actions/actions';
import { createRipples } from 'react-ripples';
import { TypographyModalTitle, TypographyRegular14 } from '../Typography/Typography';
import DetailsTable from '../DetailsTable/DetailsTable';
import Loader from '../Loader/Loader';

const CustomRipples = createRipples({
	color: 'rgba(255,255,255,0.5)',
	during: 300,
});

const ModalContentWrapper = styled(styleUtils.CenteredContent)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 20px;
`;

const ModalConent = styled(styleUtils.CenteredContent)<{ isModalVisible: boolean; isLoaderRender: boolean }>`
	position: fixed;
	width: 90%;
	max-width: 540px;
	height: 360px;
	border-radius: 16px;
	background-color: #2b224a;
	z-index: 5;
	display: ${(props) => (props.isModalVisible ? 'flex' : 'none')};
	justify-content: flex-start;
	overflow-y: auto;
`;

const CloseModalButton = styled.button`
	background-color: transparent;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	height: 24px;
	width: 24px;
	border-radius: 5px;
	&: hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
`;

const FetchNextResults = styled.div`
	border: 0;
	cursor: pointer;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	&: hover {
		background-color: rgba(255, 255, 255, 0.25);
	}
`;

const PopupHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 20px 24px 16px 24px;
	border-radius: 5px;
`;

interface DetailsPopupProps {
	isModalVisible: boolean;
	modalTitle: string;
	showModal: (isVisible: boolean) => void;
	resetFetchStates: () => void;
	capsulesData: Object[];
	crewData: Object[];
	rocketsData: Object[];
	starlinkData: Object[];
	getCapsulesSuccessfully: boolean;
	getCrewSuccessfully: boolean;
	getRocketsSuccessfully: boolean;
	getStarlinkSuccessfully: boolean;
	isLoaderRender: boolean;
}

const DetailsPopup = ({
	isModalVisible,
	modalTitle,
	showModal,
	resetFetchStates,
	capsulesData,
	crewData,
	rocketsData,
	starlinkData,
	getCapsulesSuccessfully,
	getCrewSuccessfully,
	getRocketsSuccessfully,
	getStarlinkSuccessfully,
	isLoaderRender,
}: DetailsPopupProps) => {
	const [currentDisplayData, setCurrentDisplayData] = useState<any[]>([]);
	const [currentHeaders, setCurrentHeaders] = useState<string[]>([]);
	// const [currentVisibleData, setCurrentVisibleData] = useState<any[]>([]);
	const handleClosePopup = () => {
		setTimeout(() => {
			showModal(false);
			resetFetchStates();
		}, 600);
	};

	useEffect(() => {
		if (!getCapsulesSuccessfully && !getCrewSuccessfully && !getRocketsSuccessfully && !getStarlinkSuccessfully) {
			setCurrentHeaders([]);
			return setCurrentDisplayData([]);
		}
		if (modalTitle === 'Capsules') {
			setCurrentHeaders(['Type', 'Status']);
			return setCurrentDisplayData(capsulesData);
		}
		if (modalTitle === 'Crew') {
			setCurrentHeaders(['Name', 'Agency']);
			return setCurrentDisplayData(crewData);
		}
		if (modalTitle === 'Rockets') {
			setCurrentHeaders(['Name', 'Boosters']);
			return setCurrentDisplayData(rocketsData);
		}
		if (modalTitle === 'Starlink') {
			setCurrentHeaders(['OBJECT_NAME', 'OBJECT_ID']);
			return setCurrentDisplayData(starlinkData);
		}
	}, [getCapsulesSuccessfully, getCrewSuccessfully, getRocketsSuccessfully, getStarlinkSuccessfully]);

	return (
		<ModalContentWrapper className='detailsPopupWrapper'>
			<ModalConent isLoaderRender={isLoaderRender} isModalVisible={isModalVisible} className='modalContent'>
				<PopupHeader className='popupHeader'>
					<div>
						<TypographyModalTitle>{modalTitle}</TypographyModalTitle>
					</div>
					{currentDisplayData.length > 100 ? (
						<FetchNextResults>
							<TypographyRegular14>Fetch next 100 results</TypographyRegular14>
						</FetchNextResults>
					) : null}

					<div style={{ borderRadius: '5px', overflow: 'hidden' }}>
						<CustomRipples>
							<CloseModalButton onClick={handleClosePopup}>
								<img src={CloseIcon} alt='close button icon' />
							</CloseModalButton>
						</CustomRipples>
					</div>
				</PopupHeader>
				{isLoaderRender ? (
					<Loader />
				) : (
					<DetailsTable
						currentHeaders={currentHeaders}
						currentDisplayData={currentDisplayData}
						// currentVisibleData={currentVisibleData}
					/>
				)}
			</ModalConent>
		</ModalContentWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		isModalVisible: state.isModalVisible,
		modalTitle: state.modalTitle,
		capsulesData: state.capsulesData,
		crewData: state.crewData,
		rocketsData: state.rocketsData,
		starlinkData: state.starlinkData,
		getCapsulesSuccessfully: state.getCapsulesSuccessfully,
		getCrewSuccessfully: state.getCrewSuccessfully,
		getRocketsSuccessfully: state.getRocketsSuccessfully,
		getStarlinkSuccessfully: state.getStarlinkSuccessfully,
		isLoaderRender: state.isLoaderRender,
	};
};

const actions = {
	showModal,
	resetFetchStates,
};

export default connect(mapStateToProps, actions)(DetailsPopup);
