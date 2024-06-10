import AsyncStorage from '@react-native-async-storage/async-storage';
import {httpRequest} from '~/utils/httprequest';

const getToken = async () => {
  const res = await AsyncStorage.getItem('currentUser');
  return JSON.parse(res).token;
};

export const getAllCourse = ({page, perPage, nameCourse, type}) => {
  try {
    const res = httpRequest.get('course/get-all-course', {
      params: {page, per_page: perPage, nameCourse, type},
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseFree = async ({page, perPage}) => {
  try {
    const res = httpRequest.get('course/get-course-free', {
      params: {page, per_page: perPage},
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCoursePrice = async ({page, perPage}) => {
  try {
    const res = httpRequest.get('course/get-course-price', {
      params: {page, per_page: perPage},
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getCourseTeacher = async ({
  page,
  perPage,
  nameCourse,
  teacherId,
}) => {
  try {
    const token = await getToken();
    const res = await httpRequest.get(`course/get-course-teacher`, {
      headers: {authorization: 'Bearer ' + token},
      params: {
        page,
        per_page: perPage,
        nameCourse,
        teacherId,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseById = async ({id}) => {
  try {
    const res = await httpRequest.get(`course/get-course/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
