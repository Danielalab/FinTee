export default theme => ({
  root: {
    ...theme.flexColumnCenter
  },
  section: {
    ...theme.flexColumnCenter
  },
  footer: {
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  list: {
    width: 'auto',
  },
  grid: {
    width: '100%',
  },
  sizeImage: {
    height: '100px',
    width: '400px',
  },
  image: {
    height: 'auto',
    width: '100%',
  }
})
