
const requireComponent = require.context('./',true,/\.vue$/);
const install = (Vue) =>{
    if(install.installed) return;
    install.installed;
    console.log(requireComponent.keys())
    requireComponent.keys().forEach(fileName => {
        // 拿到当前的组件
        const config = requireComponent(fileName)
        // 拿到当前组件的组件名
        const componentName = config.default||config
        Vue.component(componentName.name,config.default||config)
    });
}
// 环境检测
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default{
    install
}