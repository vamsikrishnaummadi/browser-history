import './index.css'

const SingleItem = props => {
  const {historyItem, removeSum} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    removeSum(id)
  }

  return (
    <div className="container">
      <li className="historyitem-container">
        <p className="date">{timeAccessed}</p>
        <div className="middle">
          <img className="website" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button className="button" onClick={onDelete} type="button">
          <img
            className="delete-but"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            testid="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default SingleItem
