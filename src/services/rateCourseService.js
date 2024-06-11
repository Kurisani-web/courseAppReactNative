import getToken from "~/common/getToken";
import { httpRequest } from "~/utils/httprequest";

export const sentRate = async ({ courseId, data }) => {
  try {
    const token = await getToken();
    const res = await httpRequest.post(
      `rate-course/sent-rate/${courseId}`,
      data,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getRate = async ({ courseId }) => {
  try {
    const res = await httpRequest.get(
      `rate-course/get-rate-course/${courseId}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};