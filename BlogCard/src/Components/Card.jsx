export default function Card({image, type, title, description, author}){
    return (
        <div className="card">
            <section className="card-top">
                <img className="card-image" src={image} alt="a picture of a cactus" />
                <div className="card-type">{type}</div>
                <div className="card-info">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-description">{description}</p>
                </div>
            </section>
            <div className="line"></div>
            <div className="card-author">{author}</div>
        </div>
    )
}
