import { Loadable } from 'utils/components'
import { MENTORING_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Mentoring' */ './components/MentoringPage')
  })
}
