//CSS
import './card.css'

export default function Card({urlToImage, sourceName, title, description, publishedAt}) {
    return (
        <div className="card_2">
            <img src={urlToImage} alt={sourceName} />
            <div className="card_2-name">{sourceName}</div>
            <h2 className="card_2-title">{title}</h2>
            <p className="card_2-description">{description}</p>
            <div className="card_2-published">
                <strong>Published At:</strong> {publishedAt}
            </div>
        </div>
    )
}
