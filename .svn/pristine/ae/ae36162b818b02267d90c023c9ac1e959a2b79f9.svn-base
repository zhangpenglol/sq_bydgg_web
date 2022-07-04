import http from "@/utils/request";
//查询查询指标流转
export function findTargetMoving(params) {
  return http({
    method: "get",
    url: "/idlcore/findTargetMoving",
    params,
  });
}

// 删除指标流转
export function deleteTargetMoving(ids) {
  return http({
    method: "delete",
    url: "/idlcore/deleteTargetMoving",
    params: { ids: ids.toString() },
  });
}

//根据id查询指标流转
export function findTargetMovingById(id) {
  return http({
    method: "get",
    url: "/idlcore/findTargetMovingById",
    params: { id },
  });
}
//新增指标流转
export function saveTargetMoving(data) {
  return http({
    method: "post",
    url: "/idlcore/saveTargetMoving",
    data,
  });
}

//修改指标流转
export function updateTargetMoving(data) {
  return http({
    method: "put",
    url: "/idlcore/updateTargetMoving",
    data,
  });
}
