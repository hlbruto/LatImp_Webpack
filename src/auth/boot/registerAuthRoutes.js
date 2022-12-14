import { boot } from "quasar/wrappers";

export default boot(({ router }) => {
  /* router.addRoute("/", {
    name: "auth.register",
    path: "/register",
    meta: {
      unauthOnly: true,
    },
    component: () => import("src/auth/pages/IdentityPasswordRegisterPage.vue"),
  }); */

  router.addRoute("/", {
    name: "auth.login",
    path: "/",
    meta: {
      unauthOnly: true,
    },
    component: () => import("src/auth/pages/IdentityPasswordLoginPage.vue"),
  });

  /* router.addRoute("/", {
    name: "auth.requestPasswordReset",
    path: "/forgot-password",
    meta: {
      unauthOnly: true,
    },
    component: () =>
      import("src/auth/pages/PasswordResetRequestViaEmailPage.vue"),
  });

  router.addRoute("/", {
    name: "auth.resetPassword",
    path: "/password-reset",
    meta: {
      unauthOnly: true,
    },
    component: () => import("src/auth/pages/PasswordResetViaEmailPage.vue"),
  }); */

  router.addRoute("/", {
    path: "/",
    component: () => import("layouts/AuthenticatedLayout.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("src/pages/IndexPage.vue"),
      },
      {
        path: "/videos",
        name: "videos",
        component: () => import("src/pages/VideoPage.vue"),
      },
      {
        path: "/favoritos",
        name: "favoritos",
        component: () => import("src/pages/FavoritePage.vue"),
      },
      {
        path: "/podcast",
        name: "podcast",
        component: () => import("src/pages/PodcastPage.vue"),
      },
      {
        path: "/usuarios",
        name: "usuarios",
        component: () => import("src/pages/UsersPage.vue"),
      },
      {
        path: "/clientes",
        name: "clientes",
        component: () => import("src/pages/CustomerPage.vue"),
      },
    ],
  });
});
