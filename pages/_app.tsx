import '../styles/index.css'
import '../styles/main.css'
import 'antd/dist/antd.css'
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => { return <Component {...pageProps} /> }

export default MyApp
