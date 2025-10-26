import profilePicture from '../assets/profile-picture.png'
import emailIcon from '../assets/email-icon.png'
import linkedinIcon from '../assets/linkedin-icon.png'

export default function Header() {
  return (
    <header>
      <img src={profilePicture} />
      <h1>Samantha Castillo</h1>
      <h2>Frontend Developer</h2>
      <a href="https://www.samanthacastillo.com" alt="Samantha Castillo Website" target="_blank">samanthacastillo.com</a>
      <div>
        <a href="mailto:test@google.com" target="_blank" alt="Send email">
          <button className="email-button"><img src={emailIcon} />Email</button>
        </a>
        <a href="https://www.linkedin.com/in/samcastillo28/" target="_blank" alt="Open LinkedIn profile">
          <button className="linkedin-button"><img src={linkedinIcon} />LinkedIn</button>
        </a>
      </div>
    </header>
  )
}