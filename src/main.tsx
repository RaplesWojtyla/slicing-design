import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='px-16 py-6 font-poppins'>
			<App />
		</div>
	</StrictMode>,
)
