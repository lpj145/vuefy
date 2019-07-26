import { VTextField } from "vuetify/lib";

export default {
  name: 'a-input',
  functional: true,
  props: {
    label: String
  },
  render (h, context) {
    const {props} = context
    const elements = []
    if (props.label !== undefined) {
      elements.push(
        h('label', { staticClass: 'font-weight-bold mb-2 d-block' }, props.label)
      )
    }
    elements.push(h(VTextField, {
      ...context.data,
      props: {
        solo: true,
        outlined: true,
        flat: true
      },
      staticClass: 'height-issue-fix'
    }))
    return elements
  }
}