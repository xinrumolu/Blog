import InnerGroup from '@/components/InnerGroup'
import Time from '@/components/Time'

function plugin(Vue)
{
    if(Vue.installed)
    {
        return;
    }
   Vue.component("InnerGroup",InnerGroup)
   Vue.component("Time",Time)
}
export default plugin

