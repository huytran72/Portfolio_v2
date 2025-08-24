import { Col, Row } from "react-bootstrap"
import AnimationLottie from "@/components/share/animation-lottie"
import codingJSON from "assets/lottie/coding.json"
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development"
import { CONTACT_LOTTIE } from "assets/lottie/string/contact"

import GlowCard from "components/share/glow-card"
import { FaGraduationCap } from "react-icons/fa6"
import Divider from "components/sections/divider"
import { APP_DATA } from "helpers/data"
import SocialMedia from "components/sections/social.media"

const About = () => {
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            Know Who <span className="brand-red">I'M</span>
          </h3>
          <div>
            <div>
              <p>
                Hi Everyone, I am Huy Tran (Harry) from San Jose, California,
                United State of America of America.
              </p>

              <p>
                I’m currently working as a freelance developer, collaborating
                with start-ups and building scalable, user-focused applications.
                I hold a Bachelor’s degree in Software Engineering from San Jose
                State University.
              </p>

              <p>
                I have completed Bachelor's degree in Software Engineering at
                San Jose State University.
              </p>
            </div>
          </div>
          <div>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>♟ Playing Chess – sharpening strategy and focus</li>
              <li>
                ✍️ Writing Tech Blogs – sharing knowledge and ideas with the
                community
              </li>
              <li>🌍 Traveling – experiencing new cultures and perspectives</li>
              <li>
                🎮 Gaming – exploring virtual worlds and strategic thinking
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">
              "Pursuing Your Dreams Is How You Become Homeless ~.~"
            </p>
            <p className="text-center brand-red">--Jimmy O Yang</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h3 className="text-center brand-red">Education</h3>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2023-2025</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">Software Engineer</p>
                        <p className="company">
                          San Jose State University (SJSU)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>

              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2021-2023</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">Computer Infomation System</p>
                        <p className="company">San Jose City College (SJCC)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
          <SocialMedia
            youtube={APP_DATA.YOUTUBE_URL}
            facebook={APP_DATA.FACEBOOK_URL}
            tiktok={APP_DATA.TIKTOK_URL}
            udemy={APP_DATA.UDEMY_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">Contact me: baohuy82.th@gmail.com</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  )
}

export default About
