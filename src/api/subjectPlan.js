import http from "@/utils/request";
//专项规划管理查询接口
export function findSpecialManage(params) {
  return http({
    method: "get",
    url: "/idlcore/findLandSpecialPlan",
    params,
  });
}
//专项规划管理删除接口
export function deleteSpecialManage(ids) {
  return http({
    method: "delete",
    url: "/idlcore/deleteLandSpecialPlan",
    params: { ids },
  });
}
//新增专项规划管理
export function saveLandSpecialPlan(ojb) {
  return http({
    method: "post",
    url: "/idlcore/saveLandSpecialPlan",
    data: ojb,
  });
}

//修改专项规划管理
export function updateLandSpecialPlan(obj) {
  return http({
    method: "put",
    url: "/idlcore/updateLandSpecialPlan",
    data: obj,
  });
}

//更具id查询专项规划详情接口
export function findLandSpecialPlanById(id) {
  return http({
    method: "get",
    url: "/idlcore/findLandSpecialPlanById",
    params: { id },
  });
}
