// React-redux components
import { useDispatch } from 'react-redux'

//Actions
import { 
    toggleTabs
} from '../../store/worldNewsSlice'

//Axios
import axios from 'axios';

//CSS
import './tab.css'

export default function Tab({title, active}) {

    function getCards(title) {

        const isGeneral = title.toLowerCase() === 'general'? 'https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=50&apiKey=d19954720e4647e6be7bd825d0c38849' : `../../../public/respons/${title}.json`

        axios
            .get(isGeneral)
            .then(respons => {
                dispatch(toggleTabs({title, cards: respons.data.articles}))
            })
    }

    const clazz = active ? 'tab active' : 'tab'
    const dispatch = useDispatch()

    return (
        <button className={clazz} onClick={() => getCards(title)} >{title}</button>
    )
}
