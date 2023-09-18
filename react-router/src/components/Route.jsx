import PropTypes from 'prop-types'

const Route = ({ path, component }) => {
  return null
}

// The route should recive an string as apath and a ReactElement as a component
// Will throw an error other wise
Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}
export default Route
