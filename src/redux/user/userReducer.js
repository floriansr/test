import { PROFILE } from "redux/user/userType";

// , MODIFICATE_MY_PROFILE

const initialState = {
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        data: action.details,
      };
    // case MODIFICATE_MY_PROFILE:
    //   return {
    //     data : {
    //     ...state.data,
    //     description: action.description,
    //     username: action.username,
    //     }
    //   };
    default:
      return state;
  }
};

export default userReducer;