import ActionTypes from './actionTypes';

const fetchUrl = 'https://api.spacexdata.com/v4/';
export const getCapsuleData = () => (dispatch) => {
	fetch(`${fetchUrl}capsules`, {
		method: 'GET',
	})
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
			dispatch({
				type: ActionTypes.GET_CAPSULES_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_CAPSULES_FAILED,
				payload: [],
			});
		});
};

export const getCrewData = () => (dispatch) => {
	fetch(`${fetchUrl}crew`, {
		method: 'GET',
	})
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
			dispatch({
				type: ActionTypes.GET_CREW_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_CREW_FAILED,
				payload: [],
			});
		});
};

export const getRocketsData = () => (dispatch) => {
	fetch(`${fetchUrl}rockets`, {
		method: 'GET',
	})
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
			dispatch({
				type: ActionTypes.GET_ROCKETS_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_ROCKETS_FAILED,
				payload: [],
			});
		});
};

export const getStarlinkData = () => (dispatch) => {
	fetch(`${fetchUrl}starlink`, {
		method: 'GET',
	})
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
			dispatch({
				type: ActionTypes.GET_STARLINK_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_STARLINK_FAILED,
				payload: [],
			});
		});
};

export const showModal = (isVisible) => (dispatch) => {
	dispatch({
		type: ActionTypes.SHOW_MODAL,
		payload: isVisible,
	});
};

export const setCurrentPopupTitle = (title) => (dispatch) => {
	dispatch({
		type: ActionTypes.SET_CURRENT_POPUP_TITLE,
		payload: title,
	});
};

export const clearStoredData = () => (dispatch) => {
	// dispatch({
	// 	type: ActionTypes.SET_CURRENT_POPUP_TITLE,
	// 	payload: title,
	// });
};

export const resetFetchStates = () => (dispatch) => {
	dispatch({
		type: ActionTypes.RESET_FETCH_STATES,
	});
};
