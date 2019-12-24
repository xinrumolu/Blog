import InnerGroup from '@/components/InnerGroup'

function plugin(Vue)
{
    if(Vue.installed)
    {
        return;
    }
   Vue.component("InnerGroup",InnerGroup)
}
export default plugin

