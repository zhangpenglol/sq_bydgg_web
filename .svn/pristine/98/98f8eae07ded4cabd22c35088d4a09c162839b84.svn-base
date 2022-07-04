import http from "@/utils/request";

//角色列表查询
export function findArcSysRole(params) {
  return http({
    method: "get",
    url: "/idlcore/findArcSysRole",
    params,
  });
}

//根据用户查询角色
export function findArcSysRoleByUserId(params) {
  return http({
    method: "get",
    url: "/idlcore/findArcSysRoleByUserId",
    params: params,
  });
}

//修改角色
export function saveRole(params) {
  return http({
    method: "post",
    url: "/idlcore/saveRole",
    data: params,
  });
}

//修改角色
export function updateArcSysRole(params) {
    return http({
      method: "post",
      url: "/idlcore/updateArcSysRole",
      params: params,
    });
  }

//批量删除角色
export function deleteAllArcSysRole(params) {
  return http({
    method: "post",
    url: "/idlcore/deleteAllArcSysRole",
    params: params,
  });
}
