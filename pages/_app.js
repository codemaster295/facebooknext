import { useEffect } from 'react';
import { loadUser, login } from '../store/actions/authActions';
import '../styles/globals.css'
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from '../store/reducers';
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  console.log(state, "statestatestate")
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
