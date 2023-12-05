import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import FeaturePostCard from '../components/FeaturePostCard'

const dummy = {
  category: "House",
  title: "How to buy a house?",
  date: "04 Nov 2023"
}

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="featured-posts">
        <Container rows={0} columns={2}>
          <Container rows={2} columns={2}>
            <FeaturePostCard content={dummy} />
            <FeaturePostCard content={dummy} />
            <FeaturePostCard content={dummy} />
          </Container>
          <FeaturePostCard content={dummy} />
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage