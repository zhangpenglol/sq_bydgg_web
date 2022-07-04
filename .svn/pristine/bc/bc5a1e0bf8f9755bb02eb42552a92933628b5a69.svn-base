import http from "@/utils/request";
//查询拆旧地块
export function findLandDemolitionOld(params) {
  return http({
    method: "get",
    url: "/idlcore/findLandDemolitionOld",
    params,
  });
}
//查询拆旧地块通过实施ID
export function findLandDemolitionOldByExecuteId(id) {
  return http({
    method: "get",
    url: "/idlcore/findLandDemolitionOldByExecuteId",
    params: { executeId: id },
  });
}
//根据id查询拆旧地块详情
export function findOldLandDetailById(id) {
  return http({
    method: "get",
    url: "/idlcore/findOldLandDetailById",
    params: { id: id },
  });
}

//审查/验收拆旧地块
export function updateLandDemolitionOld(data) {
  return http({
    method: "post",
    url: "/idlcore/updateLandDemolitionOld",
    data,
  });
}

//修改拆旧地块详情
export function UpdateOldLandDetail(data) {
  return http({
    method: "post",
    url: "/idlcore/UpdateOldLandDetail",
    data,
  });
}
//删除拆旧地块详情
export function deleteLandDemolitionOld(ids) {
  return http({
    method: "delete",
    url: "/idlcore/deleteLandDemolitionOld",
    params: { ids: ids.toString() },
  });
}
