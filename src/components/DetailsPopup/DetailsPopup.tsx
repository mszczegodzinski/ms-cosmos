import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';
import CloseIcon from '../../assets/icons/Icon Color.png';
import { showModal, resetFetchStates } from '../../actions/actions';
import { createRipples } from 'react-ripples';
import { TypographyModalTitle } from '../Typography/Typography';
import DetailsTable from '../DetailsTable/DetailsTable';

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

const ModalConent = styled(styleUtils.CenteredContent)<{ isModalVisible: boolean }>`
	position: fixed;
	width: 540px;
	height: 360px;
	border-radius: 16px;
	background-color: #2b224a;
	z-index: 5;
	display: ${(props) => (props.isModalVisible ? 'flex' : 'none')};
	justify-content: flex-start;
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

const FetchNextResults = styled.button`
	background-color:  rgba(255, 255, 255, 0.15;
	border: 0;
	cursor: pointer;
	border-radius: 5px;
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

const PopupDataWrapper = styled(styleUtils.CenteredContent)`
	flex-grow: 1;
`;

interface DetailsPopupProps {
	isModalVisible: boolean;
	modalTitle: string;
	showModal: (isVisible: boolean) => void;
	resetFetchStates: () => void;
}

const DetailsPopup = ({ isModalVisible, modalTitle, showModal, resetFetchStates }: DetailsPopupProps) => {
	const handleClosePopup = () => {
		setTimeout(() => {
			showModal(false);
			resetFetchStates();
		}, 600);
	};

	return (
		<ModalContentWrapper className='detailsPopupWrapper'>
			<ModalConent isModalVisible={isModalVisible} className='modalContent'>
				<PopupHeader>
					<div>
						<TypographyModalTitle>{modalTitle}</TypographyModalTitle>
					</div>
					{/* <div>
						<TypographyModalTitle>
							<FetchNextResults>Fetch next 100 results</FetchNextResults>
						</TypographyModalTitle>
					</div> */}
					<div style={{ borderRadius: '5px', overflow: 'hidden' }}>
						<CustomRipples>
							<CloseModalButton onClick={handleClosePopup}>
								<img src={CloseIcon} />
							</CloseModalButton>
						</CustomRipples>
					</div>
				</PopupHeader>
				<DetailsTable />
				<PopupDataWrapper></PopupDataWrapper>
			</ModalConent>
		</ModalContentWrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		isModalVisible: state.isModalVisible,
		modalTitle: state.modalTitle,
	};
};

const actions = {
	showModal,
	resetFetchStates,
};

export default connect(mapStateToProps, actions)(DetailsPopup);
