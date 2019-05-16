import { Loadable } from 'utils/components'
import { MENTEE_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Mentee' */ './components/MenteePage')
  })
}
