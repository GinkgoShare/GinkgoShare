import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './config/routes'

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin()

ReactDOM.render(routes, document.getElementById('app'))