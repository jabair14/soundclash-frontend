import { Col } from "react-bootstrap"

function PackCard({ id, name, price, image, preview, link, description, genre_name, author_name }) {


    return (
    <Col >
        <div class="ui cards" margin={10}>
            <div class="image">
                <img src={image}></img>
            </div>
            <div class="content">
                <a class="header">{name}</a>
                {/* chang a tags to link and direct to path */}
                <div class="meta">
                    <span class="price">${price}</span>
                </div>
                <div class="description">
                    {description}
                </div>
                <div class="genre">
                    Genre | {genre_name}
                </div>
                <div class="author">
                    Producer | {author_name}
                </div>
            </div>
        </div>
            
    </Col>
        
    
    )
}

export default PackCard;