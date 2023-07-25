import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  /* const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'template_amvg4dh',
        refForm.current,
        'qXQLJ_u9NUEg4qp1D'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }*/
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_eylulqb',
        'template_het1niq',
        refForm.current,
        'qXQLJ_u9NUEg4qp1D'
      )
      .then(
        () => {
          alert('Sit back and relax.Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Oops failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in freelance opportunities-especially ambitious and
            large projects. However, if you have other request or question,
            don't hesitatte to contact me using below form{' '}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sushweta Bhattacharya
          <br />
          India,
          <br />
          Jaypee Institute of Information Technology
          <br />
          Noida
          <br />
          <span>sushwetabm@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.58, 77.33]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.58, 77.33]}>
              <Popup>
                Sushweta hibernates here, come over for a cup of tea :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
