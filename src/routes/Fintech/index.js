import { Loadable } from 'utils/components'
import { FINTECH_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Fintech' */ './components/FintechPage')
  })
}
