import http from "@/utils/request";
//查询实施方案
export function findTargetExecuteProject(params) {
  return http({
    method: "get",
    url: "/idlcore/findTargetExecuteProject",
    params,
  });
}

//删除实施方案
export function deleteTargetExecuteProject(ids) {
  return http({
    method: "delete",
    url: "/idlcore/deleteTargetExecuteProject",
    params: { ids },
  });
}

