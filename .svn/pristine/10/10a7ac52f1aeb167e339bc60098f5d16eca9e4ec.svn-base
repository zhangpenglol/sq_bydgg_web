import request from "@/utils/request.js";
import md5 from "js-md5";

export function login(params) {
  return request({
    url:
      "/idlcore/login?username=" +
      params.name +
      "&password=" +
      md5(`${params.pwd}`) ,
    method: "get",
  });
}

//查询用户信息
export function findUser(params) {
  return request({
    method: "get",
    url: "/idlcore/findUser",
    params,
  });
}


//新增用户信息
export function saveUser(params) {
  return request({
    method: "get",
    url: "/idlcore/saveUser",
    params,
  });
}


//修改用户信息
export function updateUser(params) {
  return request({
    method: "get",
    url: "/idlcore/updateUser",
    params,
  });
}

//查询菜单信息
export function getAuthMenu() {
  return request({
    method: "get",
    url: "/idlcore/findPrivilege",
  });
}