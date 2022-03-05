import ramananImage from "../images/lst/ramnan.jpeg";
import ektaImage from "../images/lst/1.jpeg";
import amarVivekImage from "../images/amar.jpeg";
import vijayaImg from "../images/lst/4.jpeg";
import kritikaImage from "../images/lst/kritika.jpeg";

import wyMod from "../assets/lst/wm.pdf";
import ssMod from "../assets/lst/ss.pdf";
import lMode from "../assets/lst/l.pdf";
import cMode from "../assets/lst/c.pdf";
import krMode from "../assets/lst/kr.pdf";
export const intro = [
  `Life skill is a term used to describe a set of basic skills acquired either through learning or  by direct life experience.  This enables individuals and groups to effectively handle issues and problems commonly encountered in daily life.`,
  `They include creativity, critical thinking, problem-solving, decision-making, the ability to communicate and collaborate, along with personal and social responsibility that contribute to wholesome wellbeing of an individual. `,
  `
  Sure Trust was initially founded to empower rural unemployed youth by bridging the gap between knowledge acquired at the university and skills required by the industries in a dynamic environment. To address this issue certain technical courses such as AI, Python , Machine Learning , Project Management and Spoken English were launched. Overtime, these courses exponentially grew to 40+ in number, catering to different needs of the industry.
  `,
  `However, some of us felt , mere technical or academic knowledge does not make an individual wholesome. There is a dire need to unleash the latent potential of a student. Every student is unique regardless of what background he/she comes from or what qualifications they have secured during their undergrad program. It is to tap and elicit this ‘uniqueness’ in them and also nurture it, we decided to launch ‘Lifeskills Training Sessions’ . They now become an asset to their company and immediate neighborhood. `,
];

export const trainingModules = [
  {
    title: "Personality Branding & Networking",
    module: krMode,
    body: [
      {
        mentor: "Mrs. Kritika Ram",
        text: "Chief Operating Officer, Feminist Approach To Technology (FAT) , Delhi , India",
        image: kritikaImage,
      },
    ],
  },

  {
    title: "Lateral Thinking",
    module: lMode,
    body: [
      {
        mentor: "V.J.Ramanan",
        text: "Moved to US in 2000. Worked at various chip / semiconductor / networking companies like AMD, Nvidia, Cisco. Presently working for Nokia. Scope of work: Design of processors and networking switches, Performance Modeling and characterization of next generation architecture.",
        image: ramananImage,
      },
    ],
  },
  {
    title: "Communication Skills ",
    module: cMode,
    body: [
      {
        mentor: "Mrs. G Usha, M.Sc",
        text: `Scientist / Engineer "SE", Solar Panel Division, Power Systems Group,U R RAO SATELLITE CENTER, Bangalore`,
        image:
          "https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/Usha.jfif/:/cr=t:0%25,l:0.3%25,w:97.7%25,h:73.53%25/rs=w:600,h:600,cg:true,m",
      },
      {
        mentor: "Mrs. Vijayalakshmi Suresh, M.Com, B.Ed",
        text: `Multimedia Volunteer : Vidya Vahini – Sri Satya Sai Central Trust. Occupation : Option Trader in US Stock Market.`,
        image: vijayaImg,
      },
    ],
  },

  {
    title: "Social Service",
    module: ssMod,
    body: [
      {
        mentor: "Mr. Amar Vivek Aggarwal  B.A (Hons), M.B.A and LL.B",
        text: `Founding partner-Avsai Legal; and Legal Practitioner-practicing Attorney for more than 31yrs., at various High Courts, and Hon’ble Supreme Court of India. Last Assignment: Additional Advocate General, Haryana, at High Courts of Delhi, Punjab and Hy, and Supreme Court, from December 2014 till November, 2019.`,
        image: amarVivekImage,
      },
    ],
  },
  {
    title: "Wellbeing and Yoga",
    module: wyMod,
    body: [
      {
        mentor: "Ekta Pathak, CFA, MBA finance",
        text: `Currently she is  a founder of Ekrang - a holistic yoga platform. Ekta is on a mission to teach self love using Yoga to corporates, education institutions, kids, teenagers, Not-for-profit institutions, and cluster batches in India and abroad. She also provides personal sessions, tailored to the specific health need of Individuals. Ekta is a regular speaker in various national & international conferences, platforms, podcasts and Pro-bono events`,
        image: ektaImage,
      },
    ],
  },
];
