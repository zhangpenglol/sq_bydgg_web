import { login ,getAuthMenu} from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import Layout from "@/components/layout/index.vue";
// import { component } from "vue/types/umd";

/**
 * 后台查询菜单数据
 * @param routes
 */
function generaMenu(routes, data) {
  data.forEach((item) => {
    const menu = {
      path: item.path,
      component:
        item.path === "/visualMap"
          ? (resolve) => require([`@/views${item.path}/index.vue`], resolve)
          : filterComponent(item),
          children: [],
      redirect: item.redirect ? item.redirect : null,
      name: item.menuName,
      id: item.id,
      meta: {
        title: item.meta ? item.meta.title :"",
        icon: item.meta ? item.meta.icon : "",
      },
    };
    if (item.child && item.child.length !== 0) {
      generaMenu(menu.children, item.child);
    }
    if (
      item.child &&
      item.child.length === 0 &&
      item.component === "Layout"
    ) {
      let arr = [
        {
          path: item.path,
          component: (resolve) =>
            require([`@/views${item.path}/index.vue`], resolve),
          redirect: item.redirect ? item.redirect : null,
          name: item.name,
          id: item.id,
          meta: {
            title: item.meta ? item.meta.title :"",
            icon: item.meta ? item.meta.icon : "",
          },
        },
      ];
      menu.children = arr;
    }
    routes.push(menu);
  });
  return routes;
}

function filterComponent(item) {
  if (item.component === "Layout") {
    return Layout;
  } else {
    return (resolve) => require([`@/views${item.component}`], resolve);
  }
}

export const loginInfo = ({ commit }, payload) => {
  const { name, pwd } = payload;
  return new Promise((resolve, reject) => {
    login({ name, pwd })
      .then((res) => {
        localStorage.setItem("Login_data", JSON.stringify(res));
        commit("SET_TOKEN", res.token);
        setToken(res.token);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const getRoutes = ({ commit }, userInfo) => {
  return new Promise((resolve, reject) => {
    getAuthMenu(userInfo.userId).then(res => {
        const menulist = res.data;
        let routes = generaMenu([], menulist)
        commit("SET_MENULIST", menulist);
        routes.length > 0 ? commit('SET_ROUTES', routes) : [];
        resolve(routes)
        return;
    }).catch(error => {
        reject(error)
    })
  });
};

export const logout = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit("SET_TOKEN", "");
    commit("SET_ROUTES", []);
    commit("SET_MENULIST", []);
    removeToken();
    localStorage.clear();
    sessionStorage.clear();
    resolve();
  }).catch((error) => {
    reject(error);
  });
};

// remove token
export const resetToken = ({ commit }) => {
  return new Promise((resolve) => {
    commit("SET_TOKEN", "");
    commit("SET_ROLES", []);
    removeToken();
    resolve();
  });
};
