import SocialLinks from "./SocialLinks"

function ProfileCard() {
  const img = "https://png.pngtree.com/background/20230612/original/pngtree-an-anime-character-looking-back-at-the-camera-picture-image_3181039.jpg"
  return (
    <div className="profile-card">
      <img src={img} />
      <div className="info">
        <div className="name">
          Suresh Jaywant Dhumal
        </div>
        <div className="bio">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero saepe fugiat debitis, necessitatibus ducimus in sequi maiores provident ut voluptatibus, sapiente placeat iure consequatur vel officia! Nam temporibus sit impedit quod facilis minima velit cupiditate dolores, possimus praesentium eligendi debitis quia repellendus veritatis alias commodi. Quibusdam a quam laboriosam delectus.
        </div>
        <SocialLinks />
      </div>
    </div>
  )
}

export default ProfileCard