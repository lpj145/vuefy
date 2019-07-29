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

    const fieldOptions = {
      ...context.data,
      props: {
        solo: true,
        outlined: true,
        flat: true
      }
    }

    fieldOptions.staticClass = context.data.attrs.height === undefined ? '' : 'height-issue-fix'
    elements.push(h(VTextField, fieldOptions))
    return elements
  }
}