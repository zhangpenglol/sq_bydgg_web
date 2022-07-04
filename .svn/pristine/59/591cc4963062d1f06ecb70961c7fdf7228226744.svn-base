import http from "@/utils/request";
//查询区域数据
export function findArcSysArea() {
  return http({
    method: "get",
    url: "/idlcore/findArcSysArea",
  });
}
//字典表数据明细
export function findDictItemByParentId(parentId) {
  return http({
    method: "get",
    url: "/idlcore/findDictItemByParentId",
    params: { parentId },
  });
}

//查询数据字典不分页
export function findDict(parentId) {
  return http({
    method: "get",
    url: "/idlcore/findDict",
    params: { parentId },
  });
}

//查询数据字典
export function findDictItem(params) {
  return http({
    method: "get",
    url: "/idlcore/findDictItem",
    params,
  });
}

//查询字典详情
export function findDictDetail(typeCode) {
  return http({
    method: "get",
    url: "/idlcore/findDictDetail",
    params: { typeCode },
  });
}
//上传附件
export function saveFileInfo(obj) {
  return http({
    method: "post",
    url: "/idlcore/saveFileInfo",
    data: obj,
  });
}
//删除附件
export function deleteFileInfo(ids) {
  return http({
    method: "delete",
    url: "/idlcore/deleteFileInfo",
    params: { ids },
  });
}