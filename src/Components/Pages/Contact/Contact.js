import BannerSection from '../../childs/BannerSection'
import Service from '../Service/Service'
import ContactDetailes from './ContactDetailes'

function Contact() {
  return (
    <>
    <BannerSection Title={"Contact Us"}/>
    <ContactDetailes/>
    <Service/>
    </>
  )
}

export default Contact