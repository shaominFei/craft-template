const env = import.meta.env;
export const isDev = env.VITE_DEV_ENV === '0';
export const authConfig = {
  returnUrl: env.VITE_AUTH_RETURN_URL,
};
