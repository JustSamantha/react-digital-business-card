import profilePicture from '../assets/profile-picture.png'

export default function Header() {
  return (
    <header>
      <img src={profilePicture} />
      <h1>Samantha Castillo</h1>
      <h2>Frontend Developer</h2>
      <p>samanthacastillo.com</p>
    </header>
  )
}