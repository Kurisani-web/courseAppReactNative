import {httpRequest} from '~/utils/httprequest';

export const sentCode = async ({data}) => {
  try {
    const res = await httpRequest.post(`forgot-password/send-code`, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async ({data}) => {
  try {
    const res = await httpRequest.put(`forgot-password/reset-password`, data);
    return res;
  } catch (error) {
    return error;
  }
};
