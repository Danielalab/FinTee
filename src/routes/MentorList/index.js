import { Loadable } from 'utils/components'
import { MENTORLIST_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'MentorList' */ './components/MentorListPage')
  })
}
