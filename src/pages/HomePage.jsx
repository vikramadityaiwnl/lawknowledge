import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import FeaturePostCard from '../components/FeaturePostCard'
import Divider from '../components/Divider'
import PostCard from '../components/PostCard'
import ContentCard from '../components/ContentCard'
import SearchBox from '../components/SearchBox'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import SocialLinks from '../components/SocialLinks'

const dummy = {
  category: "House",
  title: "How to buy a house?",
  date: "04 Dec 2023"
}
const categories = [
  "House",
  "Networking",
  "Car",
  "IPC",
  "Land",
  "Other"
]

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />

      <div className="main-content">
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

        <Divider />

        <Container columns={3}>
          <Container identifier="posts" columns={2}>
            <PostCard content={dummy} />
            <PostCard content={dummy} />
            <PostCard content={dummy} />
            <PostCard content={dummy} />
            <PostCard content={dummy} />
            <PostCard content={dummy} />
            <PostCard content={dummy} />

            <Pagination />
          </Container>
          <Container identifier="sidebar">
            <ContentCard element={<SearchBox />} />
            <ContentCard element={<Categories data={categories} />} />
            <ContentCard element={<div className="googleads"></div>} />
            <ContentCard element={<SocialLinks />} />
          </Container>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage