import { FaFacebook } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
// import { SiUdemy } from "react-icons/si"
// import { FaTiktok } from "react-icons/fa"
// import { SiYoutubeshorts } from "react-icons/si"

interface Iprops {
  // youtube: string
  // tiktok: string
  // udemy: string
  facebook: string
  linkedin: string
}

const SocialMedia = (props: Iprops) => {
  const { facebook, linkedin } = props

  return (
    <div className="my-4 d-flex items-center gap-3">
      {/* <a
        href={youtube}
        target="_blank"
        className="highlight"
        title="Youtube Hỏi Dân IT"
      >
        <SiYoutubeshorts size={30} />
      </a> */}
      {/* <a
        href={tiktok}
        target="_blank"
        className="highlight"
        title="Tiktok Hỏi Dân IT"
      >
        <FaTiktok size={30} />
      </a> */}
      {/* <a
        href={udemy}
        target="_blank"
        className="highlight"
        title="Udemy Hỏi Dân IT"
      >
        <SiUdemy size={30} />
      </a> */}
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Huy Tran"
      >
        <FaFacebook size={30} />
      </a>

      <a
        href={linkedin}
        target="_blank"
        className="highlight"
        title="LinkedIn Huy Tran"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  )
}

export default SocialMedia
