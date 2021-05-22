import React from 'react';
import styled from 'styled-components';
import styleUtils from '../../helpers/styleUtils';

const ModalContentWrapper = styled(styleUtils.CenteredContent)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 20px;
`;

const ModalConent = styled(styleUtils.CenteredContent)`
	position: fixed;
	width: 540px;
	height: 360px;
	border-radius: 16px;
	background-color: #2b224a;
	z-index: 5;
	display: none;
`;

const DetailsPopup = () => {
	return (
		<ModalContentWrapper className='detailsPopupWrapper'>
			<ModalConent className='modalContent'>aaaa</ModalConent>
		</ModalContentWrapper>
	);
};

export default DetailsPopup;
