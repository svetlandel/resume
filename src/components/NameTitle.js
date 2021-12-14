
function NameTitle() {
    const firstName = "Jane"
    const lastName = "Doe"
    const avatar = "/images.jfif"
    const title = "Software developer"
    const description = "I'm the best developer in the World!"

    return (
      <aside>
        <div className="profile">
          <img className="profile__image" src={avatar} />
        </div>
        <br />
        <div className="profile__name">
          <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
        </div>
        <div className="title">
          <h2><span className="profile--bold">{title}</span></h2>
        </div>
        <div className="description">
          <h2><span className="description">{description}</span></h2>
        </div>
      </aside>
    )
  }

  export default NameTitle;