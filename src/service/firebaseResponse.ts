export type ServiceResponse<T> = {
  isSuccess: boolean;
  data?: T;
  error?: string;
};
