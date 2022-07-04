import Mock from "mockjs";
import qs from "querystring";

Mock.mock(
  /^\/idlcore\/specialManage\/plan\/findSpecialManage(\?.+)?$/,
  "get",
  function (options) {
    const query = qs.parse(options.url);
    console.log(options);
    return new Mock.mock({
      [`data|${query.rows || 10}`]: [
        {
          planName: "规划@string(3)",
          regionName: "@city()",
          startYear: "@date(yyyy)",
          endYear: "@date(yyyy)",
          demolishedArea: "@float(60, 100, 3, 3)",
          reclamationArea: "@float(60, 100, 3, 3)",
          balanceArea: "@float(60, 100, 3, 3)",
          fileUrl: "http://……",
          fileName: "文件名",
          fileTime: "2019-4-13 17:13:00",
        },
      ],
      status: 200,
      message: "success",
      "total|50-200": 0,
    });
  }
);

Mock.mock(
  /^\/idlcore\/specialManage\/plan\/findSpecialManage(\?.+)?$/,
  "delete",
  function (options) {
    const query = qs.parse(options.url);
    console.log(options);
    return new Mock.mock({
      data: null,
      status: 200,
      message: "success",
    });
  }
);
