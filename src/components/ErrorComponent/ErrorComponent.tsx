import React, { ReactNode } from 'react';
import ErrorText from './ErrorText';

interface ErrorComponentProps {
	message: string;
	Children: ReactNode;
}
interface ErrorComponentState {
	hasError: boolean;
}

class ErrorComponent extends React.Component<ErrorComponentProps, ErrorComponentState> {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: true };
	}
	componentDidCatch(error, info) {
		console.error('Something went wrong. Try again', error, info);
	}

	render() {
		const { message, children } = this.props;
		if (this.state.hasError) {
			return <ErrorText message={message} />;
		}
		return <div style={{ width: '100%', overflowY: 'auto' }}>{children}</div>;
	}
}

export default ErrorComponent;
