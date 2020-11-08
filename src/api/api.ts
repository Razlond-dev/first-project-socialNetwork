import { AnyRecord } from "dns"

import Axios from "axios"
import { userType } from "../types/types"


export const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a25da4cd-7dea-4af1-9083-41bac44635bc'
  }
})

export enum ResultCodeEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeForCaptchaEnum {
  Success = 0,
  CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export type GetItemsType = {
  items: Array<userType>
  totalCount: number
  error: string | null
}







