// React-redux components
import { useDispatch } from 'react-redux'

//Actions
import { 
    toggleTabs
} from './store/worldNewsSlice'

//Axios
import axios from 'axios';

//React components
import { useEffect } from 'react'

//Components
import Header from './components/header/header'
import WrapperTabs from './components/wrapper-tabs/wrapper-tabs'
import WrapperCards from './components/wrapper-cards/wrapper-cards'

//CSS
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=50&apiKey=d19954720e4647e6be7bd825d0c38849')
      .then(respons => {
          dispatch(toggleTabs({title: 'general', cards: respons.data.articles}))
      })
  }, [])

  return (
    <div className="container">

      <Header />
      <WrapperTabs />

      <WrapperCards />

    </div>
  )
}

export default App
