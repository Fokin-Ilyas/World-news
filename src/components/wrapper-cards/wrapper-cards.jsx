// React-redux components
import { useSelector } from 'react-redux'

//Components
import Card from '../card/card'

//CSS
import './wrapper-cards.css'

export default function WrapperCards() {

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const cards = useSelector(state => state.world_news.world_news).filter(tab => tab.active)
    const clearCards = cards[0].news.filter(card => {
        if (card.urlToImage) {
            return card
        }
    })

    return (
        <div className="wrapper-cards">
            {clearCards.map(card => (
                <Card
                    key={card.publishedAt + makeid(10)} 

                    urlToImage={card.urlToImage}
                    sourceName={card.source.name}
                    title={card.title}
                    description={card.description}
                    publishedAt={card.publishedAt}
                />
            ))}
        </div>
    )
}

