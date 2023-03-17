import request from '../utils/request'

// get 方式，传参使用 params
// post 方式，传参使用 data
export function sigin(data: {}) {
  return request({
    url: '/api/course/search',
    method: 'post',
    data
  })
}