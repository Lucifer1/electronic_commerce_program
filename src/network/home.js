import {request} from "./request";

function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}
function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}

export {getHomeData, getGoodsData}
