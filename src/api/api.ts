import { AnyRecord } from "dns"
import { profileType } from "../types/types"

import Axios from "axios"


const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a25da4cd-7dea-4af1-9083-41bac44635bc'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  }
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  Success = 0,
  CaptchaIsRequired = 10
}

type authMeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

type loginMeResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
}

export const authAPI = {
  authMe() {
    return instance.get<authMeResponseType>(`auth/me`).then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<loginMeResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const profileAPI = {
  showProfile(userId: number) {
    return instance.get(`profile/` + userId).then(response => response.data)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId).then(response => response.data)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status }).then(response => response.data)
  },
  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('avatar', photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  },
  saveProfile(profile: profileType) {
    return instance.put(`profile`, profile).then(response => response.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`).then(response => response.data)
  }
}

