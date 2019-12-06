import { VCol } from "vuetify/lib";
import FIcon from '../FIcon'

export default {
  name: 'info-card',
  functional: true,
  props: {
    title: {
      type: String,
      default: 'Title Here'
    },
    icon: {
      type: String,
      default: 'AlertCircleIcon'
    },
    iconBgColor: {
      type: String,
      default: 'bg-info'
    },
    iconColor: {
      type: String,
      default: 'secondary-text'
    }
  },
  render (h, ctx) {
    const {data, props} = ctx
    // const iconData = {
    //   staticClass: 'icon icon-shape rounded-circle elevation-2',
    //   class: {
    //     [props.iconBgColor]: true,
    //     [props.iconColor]: true
    //   }
    // }

    return h(VCol, data, [
      h('div', {
        staticClass: 'bg-white card-shadow pa-5 radius-25'
      }, [
        h('div', {staticClass: 'v-row'}, [h('div', {staticClass: 'v-col'})])
      ])
    ])

    // return (
    //   <VCol {...data}>
    //     <div class="bg-white card-shadow pa-5 radius-25">
    //       <div class="layout wrap">
    //         <div class="flex">
    //           <h5 class="body-2 text-uppercase text-muted mb-0 font-weight-bold">{props.title}</h5>
    //           <span class="headline font-weight-thin mb-0">{ctx.slots().default}</span>
    //         </div>
    //         <div class="flex shrink text-muted">
    //           <div {...iconData}>
    //             <FIcon icon={props.icon} size="1.5x"></FIcon>
    //           </div>
    //         </div>
    //         <div class="flex xs12 text-muted">
    //           {ctx.slots().description}
    //         </div>
    //       </div>
    //     </div>
    //   </VCol>
    // )
  }
}