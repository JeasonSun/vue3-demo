import { App as Application } from 'vue'
import { router, routerHistory } from './router'

declare global {
  interface Window {
    // h: HTML5History
    h: typeof routerHistory
    r: typeof router
    vm: ReturnType<Application['mount']>
  }
}