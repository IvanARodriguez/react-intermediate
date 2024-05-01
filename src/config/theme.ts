import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

const themeConfiguration = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: orange[800],
		},
	},
})

export default themeConfiguration
