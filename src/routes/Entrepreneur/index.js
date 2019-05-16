import { Loadable } from 'utils/components'
import { ENTREPRENEUR_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Entrepreneur' */ './components/EntrepreneurPage')
  })
}
