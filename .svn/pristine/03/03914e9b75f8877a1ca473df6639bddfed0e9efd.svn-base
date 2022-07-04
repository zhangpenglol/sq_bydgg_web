import http from "@/utils/request";
//复垦项目管理查询
export function findReclamationProject(params) {
  return http({
    method: "get",
    url: "/idlcore/findReclamationProject",
    params,
  });
}

//复垦项目管理批量删除
export function deleteAllProject(params) {
  return http({
    method: "delete",
    url: "/idlcore/deleteAllProject",
    params,
  });
}
//新增/修改复垦项目管理
export function addAndUpdateProject(data) {
  return http({
    method: "post",
    url: "/idlcore/addAndUpdateProject",
    data,
  });
}

//查询复垦进度
export function findLandReclamationProgress(params) {
  return http({
    method: "get",
    url: "/idlcore/findLandReclamationProgress",
    params,
  });
}

//删除复垦进度
export function deleteLandReclamationProgress(id) {
  return http({
    method: "delete",
    url: "/idlcore/deleteLandReclamationProgress",
    params: { id },
  });
}

//新增复垦进度
export function saveLandReclamationProgress(obj) {
  return http({
    method: "post",
    url: "/idlcore/saveLandReclamationProgress",
    data: obj,
  });
}

//修改复垦进度
export function updateLandReclamationProgress(obj) {
  return http({
    method: "put",
    url: "/idlcore/updateLandReclamationProgress",
    data: obj,
  });
}
