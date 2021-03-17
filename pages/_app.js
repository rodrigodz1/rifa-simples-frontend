import '../styles/globals.css'
//import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
