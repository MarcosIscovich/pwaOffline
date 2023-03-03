const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  {
    path: "/newcomponente",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewComponente.vue") }],
  },
];

export default routes;
