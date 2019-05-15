import { Loadable } from 'utils/components'
import { FINANCING_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Financing' */ './components/FinancingPage')
  })
}
