import { PROFILE } from "redux/user/userType";

// , MODIFICATE_MY_PROFILE

export const setProfile = (data) => {
	return {
		type: PROFILE,
		details: data,
	};
};

// export const modificateProfile = (username, description) => {

// 	return {
// 		type: MODIFICATE_MY_PROFILE,
// 		username,
// 		description,
// 	};
// };