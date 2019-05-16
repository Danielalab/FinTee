import { Loadable } from 'utils/components'
import { MENTEELIST_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'MenteeList' */ './components/MenteeListPage')
  })
}
