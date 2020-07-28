import Router from 'vue-router'
import Vue from 'vue'
import pages from '@/views/index'
Vue.use(Router)

const router = new Router({
	routes: [
		{
			name: 'index',
			path: '/',
			component: pages.liveIndex,
		},
		{
			name: 'liveIndex',
			path: '/liveIndex',
			component: pages.liveIndex,
		},
		{
			name: 'liveDownload',
			path: '/liveDownload',
			component: pages.liveDownload,
		},
	],
})

export default router;