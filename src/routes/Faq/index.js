import { Loadable } from 'utils/components'
import { FAQ_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Faq' */ './components/FaqPage')
  })
}
