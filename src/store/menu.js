let menulist = [
    {
      path: "/home",
      component: "Layout",
      name: "home",
      meta: {
        title: "首页",
        icon: "icon-shouyefill",
      },
      child: [],
    },
    {
      path: "/visualMap",
      component: "visualMap",
      name: "visualMap",
      meta: {
        title: "可视化系统",
        icon: "icon-ditu1",
      },
      child: [],
    },
    {
      path: "/cesiumMap",
      component: "cesiumMap",
      name: "cesiumMap",
      meta: {
        title: "cesium",
        icon: "icon-ditu1",
      },
      child: [],
    },
    {
      path: "/subjectPlan",
      component: "Layout",
      meta: {
        title: "专项规划管理",
        icon: "icon-yanfaguanli-lixiangguanli",
      },
      child: [
        {
          path: "/subjectPlan",
          name: "subjectPlan",
          component: "/subjectPlan/index",
          meta: {
            title: "专项规划管理",
            icon: "usermanager",
          },
        },
        {
          path: "/addsubject",
          name: "addsubject",
          component: "/subjectPlan/addSubject/index",
          meta: {
            title: "新增/修改专项规划",
            icon: "usermanager",
          },
        },
      ],
    },
    {
      path: "/targetmanage",
      component: "Layout",
      meta: {
        title: "指标使用管理",
        icon: "icon-zichantudiquanshengmingzhouqihetongjianguan_1",
      },
      child: [
        {
          path: "/targetexchange",
          name: "targetexchange",
          component: "/targetmanage/targetexchange/index",
          meta: {
            title: "指标流转",
            icon: "usermanager",
          },
        },
        {
          path: "/addtarget",
          name: "addtarget",
          component: "/targetmanage/targetexchange/addtarget/index",
          meta: {
            title: "新增/编辑指标流转记录",
            icon: "usermanager",
          },
        },
        {
          path: "/schememanager",
          name: "schememanager",
          component: "/targetmanage/schememanager/index",
          meta: {
            title: "实施方案管理",
            icon: "usermanager",
          },
        },
        {
          path: "/plotmanager",
          name: "plotmanager",
          component: "/targetmanage/plotmanager/index",
          meta: {
            title: "建新地块管理",
            icon: "usermanager",
          },
        },
      ],
    },
    {
      path: "/reclamationManager",
      component: "Layout",
      meta: {
        title: "挂钩复垦管理",
        icon: "icon-zichantudiquanshengmingzhouqihetongjianguan_1",
      },
      child: [
        {
          path: "/reclamationManager",
          name: "reclamationManager",
          component: "/reclamationManager",
          meta: {
            title: "复垦项目管理",
            icon: "usermanager",
          },
        },
        {
          path: "/dismantlingOld",
          name: "dismantlingOld",
          component: "/reclamationManager/dismantlingOld/index",
          meta: {
            title: "拆旧地块管理",
            icon: "usermanager",
          },
        },
        {
          path: "/amend",
          name: "amend",
          component: "/reclamationManager/dismantlingOld/amend/index",
          meta: {
            title: "修改/审查拆旧地块",
            icon: "usermanager",
          },
        },
        {
          path: "/unverification",
          name: "unverification",
          component: "/reclamationManager/dismantlingOld/unverification/index",
          meta: {
            title: "查看/验收未核验的拆旧地块",
            icon: "usermanager",
          },
        },
        {
          path: "/verification",
          name: "verification",
          component: "/reclamationManager/dismantlingOld/verification/index",
          meta: {
            title: "查看/编辑已验收的拆旧地块",
            icon: "usermanager",
          },
        },
      ],
    },
    {
      path: "/usermanager",
      component: "Layout",
      name: "usermanager",
      meta: {
        title: "系统管理",
        icon: "icon-caozuoxitong_mianxing",
      },
      child: [
        {
          path: "/platformSetting",
          name: "platformSetting",
          component: "/system/platformSetting/index",
          meta: {
            title: "平台设置",
            icon: "platformSetting",
          },
        },
        {
          path: "/areamanager",
          name: "areamanager",
          component: "/system/areamanager/index",
          meta: {
            title: "区域管理",
            icon: "areamanager",
          },
        },
        {
          path: "/addarea",
          name: "addarea",
          component: "/system/areamanager/addarea/index",
          meta: {
            title: "添加区域",
            icon: "addarea",
          },
        },
        {
          path: "/usermanager",
          name: "usermanager",
          component: "/system/usermanager/index",
          meta: {
            title: "用户管理",
            icon: "usermanager",
          },
        },
        {
          path: "/adduser",
          name: "adduser",
          component: "/system/usermanager/adduser/index",
          meta: {
            title: "添加用户",
            icon: "adduser",
          },
        },
        {
          path: "/rolemanager",
          name: "rolemanager",
          component: "/system/rolemanager/index",
          meta: {
            title: "角色管理",
            icon: "rolemanager",
          },
        },
        {
          path: "/addrole",
          name: "addrole",
          component: "/system/rolemanager/addrole/index",
          meta: {
            title: "添加角色",
            icon: "addrole",
          },
        },
        {
          path: "/logmanager",
          name: "logmanager",
          component: "/system/logmanager/index",
          meta: {
            title: "日志管理",
            icon: "rolemanager",
          },
        },
        {
          path: "/opemanager",
          name: "opemanager",
          component: "/system/opemanager/index",
          meta: {
            title: "运维管理",
            icon: "rolemanager",
          },
        },
        {
          path: "/test",
          name: "test",
          component: "/system/test/index",
          meta: {
            title: "测试",
            icon: "rolemanager",
          },
        },
      ],
    },
  ];