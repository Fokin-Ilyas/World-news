// React-redux components
import { useSelector } from 'react-redux'

//Components
import Tab from '../tab/tab'

//CSS
import './wrapper-tabs.css'

export default function WrapperTabs() {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const tabs = useSelector(state => state.world_news.world_news)

    return (
        <div className="wrapper-tabs">
            {tabs.map(tab => (
                <Tab 
                    key={tab.id} 
                    title={capitalizeFirstLetter(tab.title)}
                    active={tab.active} />
            ))}
        </div>
    )
}
