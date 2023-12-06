import Icon from "./Icon"

function Pagination() {
  return (
    <div className="pagination">
      <Icon identifier="pg_back_arrow" iconName="arrow_back" />
      <div className="pagination-item">
        1
      </div>
      <div className="pagination-item">
        2
      </div>
      <div className="pagination-item">
        3
      </div>
      <div className="pagination-item">
        4
      </div>
      <div className="pagination-item">
        5
      </div>
      <div className="pagination-item">
        6
      </div>
      <div className="pagination-item">
        7
      </div>
      <div className="pagination-item">
        8
      </div>
      <Icon iconName="arrow_forward" />
    </div>
  )
}

export default Pagination