import { Loadable } from 'utils/components'
import { MENTOR_PATH as path } from 'constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Mentor' */ './components/MentorPage')
  })
}
