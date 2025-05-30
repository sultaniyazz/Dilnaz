import axios from "axios";
import { fetchAdminError, fetchbooksError, fetchedAdminData, fetchedbooks, fetchingAdminData, fetchingbooks } from "../features/dataSlice";

export const getAllBooksData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingbooks());
    try {
      const res = await axios.get(url);
      dispatch(fetchedbooks(res.data));
    } catch (err) {
      dispatch(fetchbooksError(err.message));
      console.log(err.message);
    }
  };
};
export const getAllAdminData = (url) => {
  return async (dispatch) => {
    dispatch(fetchingAdminData());
    try {
      const res = await axios.get(url);
      dispatch(fetchedAdminData(res.data));


    } catch (err) {
      dispatch(fetchAdminError(err.message));
    }
  };
};