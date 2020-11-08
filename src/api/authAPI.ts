import { instance, APIResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./api";

export type authMeResponseDataType = {
    id: number
    email: string
    login: string
}

export type loginMeResponseDataType = {
    userId: number
}

export const authAPI = {
  authMe() {
    return instance.get<APIResponseType<authMeResponseDataType>>(`auth/me`).then(response => response.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<APIResponseType<loginMeResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  }
};
