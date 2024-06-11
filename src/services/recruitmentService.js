import AsyncStorage from '@react-native-async-storage/async-storage';
import {httpRequest} from '~/utils/httprequest';

const getToken = async () => {
  const res = await AsyncStorage.getItem('currentUser');
  return JSON.parse(res).token;
};

export const postRecruitment = async ({data}) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(`recruitment/post-recruitment`, data, {
      headers: {authorization: 'Bearer ' + token},
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllRecruitment = async ({page, perPage, nameRecruitment}) => {
  try {
    const token = await getToken();

    const res = await httpRequest.get(`recruitment/get-all-recruitment`, {
      headers: {authorization: 'Bearer ' + token},
      params: {
        page,
        per_page: perPage,
        nameRecruitment,
      },
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export const getMyRecruitment = async ({page, perPage}) => {
  try {
    const token = await getToken();

    const res = await httpRequest.get(`recruitment/get-my-recruitment`, {
      headers: {authorization: 'Bearer ' + token},
      params: {
        page,
        per_page: perPage,
      },
    });

    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteRecruitment = async ({id}) => {
  try {
    const token = await getToken();

    const res = await httpRequest.delete(`recruitment/delete/${id}`, {
      headers: {authorization: 'Bearer ' + token},
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const editRecruitment = async ({id, data}) => {
  try {
    const token = await getToken();
    const res = await httpRequest.put(`recruitment/edit/${id}`, data, {
      headers: {authorization: 'Bearer ' + token},
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const getRecruitmentStudent = async () => {
  try {
    const token = await getToken();

    const res = await httpRequest.get(`recruitment/`, {
      headers: {authorization: 'Bearer ' + token},
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const handleApplyCV = async data => {
  try {
    const token = await getToken();

    const res = await httpRequest.put(`recruitment/handle-recruitment`, data, {
      headers: {authorization: 'Bearer ' + token},
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const applyRecruitment = async ({data}) => {
  try {
    const token = await getToken();

    const res = await httpRequest.put(`recruitment/apply-recruitment`, data, {
      headers: {authorization: 'Bearer ' + token},
    });

    return res;
  } catch (error) {
    return error;
  }
};
