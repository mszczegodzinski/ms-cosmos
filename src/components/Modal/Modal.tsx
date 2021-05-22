import Portal from './Portal';
import { CSSProperties } from 'react';

const modalContentWrapper: CSSProperties = {
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: 4,
	padding: '20px',
};

const modalConent = {
	width: '540px',
	height: '360px',
	borderRadius: '16px',
	backgroundColor: '#2B224A',
	display: 'none',
	zIndex: 0,
};

const Modal = () => {
	return (
		<Portal>
			<div className='modalConentWrapper' style={modalContentWrapper}>
				<div className='modalContent' style={modalConent}></div>
			</div>
		</Portal>
	);
};

export default Modal;
