const { default: Axios } = require("axios")


const instance = Axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'a25da4cd-7dea-4af1-9083-41bac44635bc'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const profileAPI = {
  showProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId).then(response => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then(response => response.data)
  }
}


