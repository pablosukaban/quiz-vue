import {
  createRouter,
  createMemoryHistory,
  type RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router'
import StartPage from './pages/StartPage.vue'
import QuizPage from './pages/QuizPage.vue'

export enum ERoutes {
  START = 'start',
  QUIZ = 'quiz',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'start',
    component: StartPage,
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
