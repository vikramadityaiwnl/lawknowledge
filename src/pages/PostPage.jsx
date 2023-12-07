import Container from "../components/Container"
import ContentCard from "../components/ContentCard"
import Divider from "../components/Divider"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import Summary from "../components/Summary"
import TableOfContent from "../components/TableOfContent"

const dummy_header = {
  img: "https://img.freepik.com/premium-photo/knowledge-ideas-human-head_597582-485.jpg",
  category: "House",
  title: "How and when to buy a house?",
  date: "06 Dec 2023"
}

function PostPage() {
  return (
    <div className="blogpage">
      <Navbar />

      <div className="main-content">
        <Header content={dummy_header} />

        <Container identifier="post-data" columns={3}>
          <ContentCard element={<TableOfContent />} />
          
          <div className="main-post">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aut quasi porro ea aliquid enim expedita eum reiciendis nihil unde minima officiis rerum saepe libero. Obcaecati, architecto beatae expedita impedit voluptatibus consectetur nihil placeat minus nostrum facilis atque, sed vitae sequi a repellat nulla, enim alias sit quidem reprehenderit illum! Iusto tempore incidunt magni illo fuga dolor in, nobis maxime reprehenderit et odit dicta perspiciatis sapiente rem, autem quia voluptatum doloribus optio nisi modi assumenda harum? Dolore assumenda est mollitia velit error ut voluptatum aliquam ducimus dolores ad officiis, corporis delectus cumque, repudiandae libero temporibus in architecto porro quod iusto cum? Veniam, dolorem ab consectetur aspernatur facilis debitis beatae vel magnam quia minus quam libero ullam placeat similique, provident sequi labore. Id labore error amet saepe dolore. Beatae iusto accusantium sapiente, eum perspiciatis odio animi repudiandae quisquam dolore rem exercitationem dicta distinctio alias vitae totam labore nobis commodi. Corporis maxime perspiciatis, cupiditate numquam odit porro, nobis quod consequuntur delectus eveniet maiores iste quae doloribus reprehenderit quibusdam sequi ipsa voluptatem tenetur architecto vel, alias facere deserunt repellat distinctio. Ducimus dolor fugiat possimus quo animi culpa quam. Mollitia velit, dolores natus voluptate maxime nam voluptates. Sunt labore tenetur iure nemo mollitia? Magni, laboriosam quis corporis ut deserunt pariatur odio molestias cum repellendus fugiat ad vel, dolorum cumque labore! Facere quae sed repellat. Deserunt totam corrupti dicta quas nobis assumenda ipsum exercitationem, atque, doloremque consequuntur veniam! Consequuntur neque distinctio ducimus? Soluta est voluptatibus repudiandae iusto voluptates? Provident, quis saepe mollitia sapiente eveniet cum illum debitis ratione quibusdam consequuntur eum quod labore optio! Perspiciatis incidunt, velit eius molestias quasi dicta eos ab veritatis cumque maxime ea voluptates cum consequatur id inventore dolor corrupti, quas dolores recusandae odit deserunt quibusdam. Omnis amet voluptate cupiditate, natus explicabo perspiciatis aliquam quaerat. Provident, ipsam aut possimus neque cupiditate iusto optio voluptas voluptate adipisci commodi unde itaque cum, similique non quidem? Quam a quae voluptatum pariatur iure dolor impedit rerum itaque quidem! At provident tempora dolor? Fugiat voluptatem reprehenderit est aspernatur numquam nobis possimus minus, ipsa laboriosam, sit adipisci atque. Ipsam illum minus vero culpa minima voluptate eos repellat, odio nemo reprehenderit, blanditiis eaque eligendi magnam fugit quis consequuntur. Debitis ullam dolores dolorem velit perferendis nobis esse sequi, recusandae quo architecto consectetur veritatis itaque libero porro eum nulla beatae ut? Alias blanditiis accusantium praesentium atque iusto vitae quia harum ipsam dolor repellat reiciendis officiis sequi sed cumque molestiae, ipsum sapiente incidunt beatae rerum facilis saepe eius? Optio sapiente voluptatem tenetur minima facilis cum corrupti impedit amet suscipit ex? Distinctio voluptatibus, adipisci exercitationem nostrum aliquam nisi obcaecati voluptates dicta laudantium. Omnis magnam repellat delectus voluptate minima perspiciatis minus porro dignissimos error accusantium quasi quos velit, molestiae beatae officia perferendis voluptatem laudantium deserunt. Soluta cupiditate hic ipsam? Nam, consectetur. Id laboriosam consequatur error ea culpa sint molestias amet fuga modi voluptas autem, nesciunt cumque maxime dolorum animi corrupti sed eligendi dicta explicabo consectetur quia rem mollitia! Rerum esse assumenda rem explicabo veniam obcaecati adipisci in ipsam. Fuga tempore ratione natus officiis?
          </div>
        </Container>

        <Divider />

        <Container identifier="post-summary" columns={2}>
          <ContentCard element={<ProfileCard />} />
          <ContentCard element={<Summary />} />
        </Container>

        {/* TODO: Add Recommanded posts */}
      </div>

      <Footer />
    </div>
  )
}

export default PostPage