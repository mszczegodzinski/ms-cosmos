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
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_CREW_FAILED,
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
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_ROCKETS_FAILED,
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
			});
		})
		.catch((error) => {
			console.log(error);
			dispatch({
				type: ActionTypes.GET_STARLINK_FAILED,
			});
		});
};
