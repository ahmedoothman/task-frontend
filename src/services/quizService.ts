import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../constants';

interface QuizData {
  _id: string;
  name: string;
  course: string;
  topic: string;
  dueTo: string;
}

interface SuccessResponse {
  status: 'success';
  data: QuizData[]; // Update with your actual data type
}

interface ErrorResponse {
  status: 'error';
  statusCode?: string;
  message: string;
}

export const getAllQuizes = async (): Promise<
  SuccessResponse | ErrorResponse
> => {
  try {
    const response: AxiosResponse<{ data: QuizData[] }> = await axios.get(
      `${API_URL}/api/quiz/`
    );
    return { status: 'success', data: response.data.data };
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
export type { QuizData, SuccessResponse, ErrorResponse };
