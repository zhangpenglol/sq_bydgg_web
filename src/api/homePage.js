import http from "@/utils/request";
//首页面积数据
export function homePageCount(params) {
  return http({
    method: "get",
    url: "/idlcore/homePageCount",
    params,
  });
}

//首页图表数据
export function homePageChart(params) {
    return http({
      method: "get",
      url: "/idlcore/homePageChart",
      params,
    });
}
