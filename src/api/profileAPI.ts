import { PhotosType, profileType } from "../types/types";
import { instance, APIResponseType } from "./api";

type SavePhotoResponseDataType = {
  photos: PhotosType
}

export const profileAPI = {
  showProfile(userId: number) {
    return instance.get<profileType>(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then(response => response.data);
  },
  updateStatus(status: string) {
    return instance.put<APIResponseType>(`profile/status`, { status: status }).then(response => response.data);
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append('avatar', photoFile);
    return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },
  saveProfile(profile: profileType) {
    return instance.put<APIResponseType>(`profile`, profile).then(response => response.data);
  }
};
