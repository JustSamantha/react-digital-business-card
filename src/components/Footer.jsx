import twitterIcon from '../assets/twitter-icon.png'
import facebookIcon from '../assets/facebook-icon.png'
import instagramIcon from '../assets/instagram-icon.png'
import githubIcon from '../assets/github-icon.png'

export default function Footer() {
  return (
    <footer>
      <a href="https://www.x.com" target="_blank" alt="X" className="twitter-link"><img src={twitterIcon} /></a>
      <a href="https://www.facebook.com" target="_blank" alt="Facebook"><img src={facebookIcon} /></a>
      <a href="https://www.instagram.com" target="_blank" alt="Instagram"><img src={instagramIcon} /></a>
      <a href="https://github.com/JustSamantha" target="_blank" alt="Github"><img src={githubIcon} /></a>
    </footer>
  )
}