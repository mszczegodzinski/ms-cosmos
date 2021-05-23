import ActionTypes from './actionTypes';

const fetchUrl = 'https://api.spacexdata.com/v4/';
export const getCapsuleData = () => (dispatch) => {
	dispatch(showLoader(true));
	fetch(`${fetchUrl}capsules`, {
		method: 'GET',
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_CAPSULES_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_CAPSULES_FAILED,
				payload: [],
			});
		});
};

export const getCrewData = () => (dispatch) => {
	dispatch(showLoader(true));
	fetch(`${fetchUrl}crew`, {
		method: 'GET',
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_CREW_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_CREW_FAILED,
				payload: [],
			});
		});
};

export const getRocketsData = () => (dispatch) => {
	dispatch(showLoader(true));
	fetch(`${fetchUrl}rockets`, {
		method: 'GET',
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_ROCKETS_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_ROCKETS_FAILED,
				payload: [],
			});
		});
};

export const getStarlinkData = () => (dispatch) => {
	dispatch(showLoader(true));
	fetch(`${fetchUrl}starlink`, {
		method: 'GET',
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			dispatch(showLoader(false));
			dispatch({
				type: ActionTypes.GET_STARLINK_SUCCESSFULLY,
				payload: data,
			});
		})
		.catch((error) => {
			dispatch(showLoader(false));
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
	dispatch({
		type: ActionTypes.RESET_FETCH_STATES,
	});
};

export const resetFetchStates = () => (dispatch) => {
	dispatch({
		type: ActionTypes.RESET_FETCH_STATES,
	});
};

export const showLoader = (isVisible) => (dispatch) => {
	dispatch({
		type: ActionTypes.SHOW_LOADER,
		payload: isVisible,
	});
};
