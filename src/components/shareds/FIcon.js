import * as icons from 'vue-feather-icons'

export default {
  name: 'f-icon',
  functional: true,
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  render (h, ctx) {
    const data = {
      ...ctx.data,
      props: {
        ...ctx.props
      }
    }
    return h(icons[ctx.props.icon], data)
  }
}
