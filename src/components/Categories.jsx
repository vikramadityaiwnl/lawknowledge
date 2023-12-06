import Container from "./Container"

function Categories({data}) {
  return (
    <div className="categories">
      <Container columns={2}>
        {
          data.map((val, idx) => {
            return <div className="category" key={idx}>
              {val}
            </div>
          })
        }
      </Container>
    </div>
  )
}

export default Categories