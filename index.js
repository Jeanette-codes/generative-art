import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HeroUIProvider } from '@heroui/react'
import { App } from './src'

import { store } from './src/store'

// y = mx + b
// m is slope which is change in Y / change in X
// b is y-intercept where line intersects y
// yIntercept = b=y+mx

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <HeroUIProvider>
            <App />
        </HeroUIProvider>
    </Provider>
)
