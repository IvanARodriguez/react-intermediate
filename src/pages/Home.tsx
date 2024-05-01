import { Box, Container } from '@mui/material'
import Header from '../components/Header'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Home() {
	const tempItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<Box>
			<Header />
			<Typography variant='h4' textAlign={'center'}>
				Collection
			</Typography>
			<Container
				maxWidth='xl'
				sx={{
					display: 'grid',
					padding: '3rem var(--size-2)',
					gap: 'var(--size-1)',
					gridTemplateColumns: {
						sm: '1fr',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
						xl: 'repeat(5, 1fr)',
					},
				}}
			>
				{tempItems.map((_, i) => (
					<ActionAreaCard key={i} />
				))}
			</Container>
		</Box>
	)
}

export default Home

function ActionAreaCard() {
	return (
		<Card>
			<CardMedia
				component='img'
				height='140'
				image='https://images.unsplash.com/photo-1714317559964-498c611e2c0c?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Lizard
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
		</Card>
	)
}
