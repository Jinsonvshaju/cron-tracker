import { CreateAction } from "../../util/reducer/ReducerUtils";
import { USER_ACTION_TYPES } from "./UserType";
export const setCurrentUser = (user) => CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);