import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../constants';
import { type } from 'os';

interface AnnouncementData {
  _id: string;
  topic: string;
  author: string;
  content: string;
}

interface SuccessResponse {
  status: 'success';
  data: AnnouncementData[]; // Update with your actual data type
}

interface ErrorResponse {
  status: 'error';
  statusCode?: string;
  message: string;
}

export const getAllAnnouncements = async (): Promise<
  SuccessResponse | ErrorResponse
> => {
  try {
    const response: AxiosResponse<{ data: AnnouncementData[] }> =
      await axios.get(`${API_URL}/api/announcement/`);
    return {
      status: 'success',
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.code === 'ERR_NETWORK') {
        return {
          status: 'error',
          statusCode: axiosError.code,
          message: 'خطأ في الاتصال بالخادم',
        };
      } else if (axiosError.response && axiosError.response.data) {
        return {
          status: 'error',
          message: 'error message',
        };
      }
    }
    return {
      status: 'error',
      message: 'An unexpected error occurred.',
    };
  }
};
export type { AnnouncementData, SuccessResponse, ErrorResponse };
