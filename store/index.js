import Vue from 'vue'
import Vuex from 'vuex'

// 下方为自动引入同级目录下的modules文件中的以js结尾的文件,并合成进modules中
const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
	},
	mutations: {
		
	},
	modules
})
export default store