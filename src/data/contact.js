import { MdPhone, MdOutlinePhone, MdMailOutline, MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
export const contacts = [
  {
    icon: <MdPhone />,
    text: "9440045717",
    link: "tel:+919440045717",

  },
  {
    icon: <MdOutlinePhone />,
    text: "8309228027",
    link: "tel:+918309228027",

  }, {
    text: "+919440045717",
    link: "https://wa.me/919440045717",
    icon: <IoLogoWhatsapp />
  },
  {
    text: "suretrust2020@gmail.com",
    link: "mailto:suretrust2020@gmail.com",
    icon: <MdMailOutline />
  },
];


export const content = `Any initiative is as strong as the community that holds it up. Together we can do more than what we can do alone. Let us bring all our abilities and strengths together to effect real change in the rural areas by targeting the educated unemployed youth. This initiative is visualized to bridge the inequality in employability among the educated youth in  rural and urban areas. There are plenty of volunteering opportunities in the initiative. `;


export const address = {
  icon: <MdLocationOn size="32px" />,
  text: "Sreeguru towers, Second floor, Gopuram road, opp. Union bank of India, Puttaparthi, Andhra Pradesh 515134"
}

export const socialLinks = [
  {
    name: "Facebook",
    icon: <BsFacebook size="24px" />,
    link: ""
  },
  {
    name: "Linkedin",
    icon: <BsLinkedin size="24px" />,
    link: ""
  },
  {
    name: "Twitter",
    icon: <BsTwitter size="24px" />,
    link: ""
  }
]