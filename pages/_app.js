import { useEffect } from 'react';
import { loadUser, login } from '../store/actions/authActions';
import 'antd/dist/antd.css'
import '../styles/tailwind.css'
import '../styles/globals.css'
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from '../store/reducers';
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
