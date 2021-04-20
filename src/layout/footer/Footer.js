import FooterLinks from './FooterLinks'
import TwitterImg from './social-link-imgs/Twitter.svg'
import FacebookImg from './social-link-imgs/Facebook.svg'
import InstagrameImg from './social-link-imgs/Instagram.svg'
import MediumImg from './social-link-imgs/Medium.svg'
import LinkedInImg from './social-link-imgs/Linkedin.svg'

const Footer = () => {
    return (
        <div>
            <FooterLinks link1="about" link2="blog" link3="support"/>
            <p>Logo</p>
            <FooterLinks link1="about" link2="blog" link3="support"/>
            <hr/>
            <ul>
                <li><img src={TwitterImg} alt="twitter logo" className="fill-current text-purple-700 w-5 h-5" /></li>
                <li><img src={FacebookImg} alt="instagram logo" className="purple-700 w-5 h-5" /></li>
                <li><img src={MediumImg} alt="medium logo" className="purple-700 w-5 h-5" /></li>
                <li><img src={InstagrameImg} alt="instagram logo" className="purple-700 w-5 h-5" /></li>
                <li><img src={LinkedInImg} alt="linkedin logo" className="purple-700 w-5 h-5" /></li>
                
            </ul>
            <p>Privacy statement</p>
        </div>
    )
}

export default Footer
