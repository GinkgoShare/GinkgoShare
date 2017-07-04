import React from 'react'
import * as Colors from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { fade } from 'material-ui/utils/colorManipulator'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

const theme = {
	muiTheme: getMuiTheme({
		palette: {
			primary1Color: Colors.blueGrey100,
			primary2Color: Colors.blueGrey200,
			primary3Color: Colors.blueGrey300,
			accent1Color: Colors.greenA200,
			accent2Color: Colors.grey100,
			accent3Color: Colors.grey500,
			textColor: Colors.white,
			alternateTextColor: Colors.darkBlack,
			canvasColor: Colors.white,
			borderColor: Colors.grey300,
			disabledColor: fade(Colors.darkBlack, 0.3),
			pickerHeaderColor: Colors.blueGrey100,
			clockCircleColor: fade(Colors.darkBlack, 0.07),
			shadowColor: Colors.fullBlack,
		},
		appBar: {
			height: 60,
		},
	})
}

export default theme
