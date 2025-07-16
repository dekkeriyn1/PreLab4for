export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },

      // Point of Sale Routes
      {
        path: 'tables',
        component: () => import('@/pages/tables.vue'),
      },
      {
        path: 'queue',
        component: () => import('@/pages/queue.vue'),
      },
      {
        path: 'menu',
        component: () => import('@/pages/menu.vue'),
      },
      {
        path: 'stock',
        component: () => import('@/pages/stock.vue'),
      },

      // การเงิน Routes
      {
        path: 'income',
        component: () => import('@/pages/income.vue'),
      },
      {
        path: 'expend',
        component: () => import('@/pages/expend.vue'),
      },
      {
        path: 'transaction',
        component: () => import('@/pages/transaction.vue'),
      },

      // ผู้ดูแลระบบ Routes
      {
        path: 'users',
        component: () => import('@/pages/users.vue'),
      },
      {
        path: 'setting',
        component: () => import('@/pages/setting.vue'),
      },

      // Legacy Routes (ถ้าต้องการเก็บไว้)
      {
        path: 'typography',
        component: () => import('@/pages/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/pages/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/pages/cards.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
