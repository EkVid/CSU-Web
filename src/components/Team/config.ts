import type { ImageMetadata } from 'astro';

import Sukriti from "../../assets/Team/Executives/Sukriti Kothari.jpg";
import Keerthika from "../../assets/Team/Executives/Keerthika Selvakumar.jpg";
import Khadije from "../../assets/Team/Executives/Khadije Ramadan.jpg";
import Aymen from "../../assets/Team/Executives/Aymen Rizwan.jpg";
import Dora from "../../assets/Team/Executives/Dora Wu.jpg";
import Papina from "../../assets/Team/Executives/Papina Gnaneswaran.jpg";
import Kagesan from "../../assets/Team/Executives/Kagesan Sriharan.jpg";
import Anindro from "../../assets/Team/Executives/Anindro Bhattacharya.jpg";
import Dana from "../../assets/Team/Executives/Dana Abughaduma.jpg";
import Vanessa from "../../assets/Team/Executives/Vanessa Hing.jpg";
import Jaelyn from "../../assets/Team/Executives/Jaelyn Lee.jpg";
import Austin from "../../assets/Team/Executives/Austin Yang.jpg"
import Nhien from "../../assets/Team/Executives/Nhien Dinh.jpg";
import De_Mario from "../../assets/Team/Executives/De-Mario Knowles.jpg";
import Rachel from "../../assets/Team/Executives/Rachel Ye.jpg";


export interface TeamMember {
  name: string;
  position: string;
  src: ImageMetadata;
  alt: string;
}

type TeamGroups = 'Executives';

export const team: Record<TeamGroups, TeamMember[]> = {
  Executives: [
    {
      name: 'Sukriti Kothari',
      position: 'Co - President',
      src: Sukriti,
      alt: 'Sukriti Kothari',
    },
    {
      name: 'Keerthika Selvakumar',
      position: 'Co - President',
      src: Keerthika,
      alt: 'Keerthika Selvakumar',
    },
    {
      name: 'Khadije Ramadan',
      position: 'Vice President External ',
      src: Khadije,
      alt: 'Khadije Ramadan',
    },
    {
      name: 'Aymen Rizwan',
      position: 'Vice President of Internal',
      src: Aymen,
      alt: 'Aymen Rizwan',
    },
    {
      name: 'Dora Wu',
      position: 'Outreach Coordinator',
      src: Dora,
      alt: 'Dora Wu',
    },
    {
      name: 'Papina Gnaneswaran',
      position: 'Outreach Coordinator',
      src: Papina,
      alt: 'Papina Gnaneswaran',
    },
    {
      name: 'Kagesan Sriharan',
      position: 'Director of Finance',
      src: Kagesan,
      alt: 'Kagesan Sriharan',
    },
    {
      name: 'Anindro Bhattacharya',
      position: 'Chem - Aid Director',
      src: Anindro,
      alt: 'Anindro Bhattacharya',
    },
    {
      name:'Dana Abughaduma',
      position: 'Director of Marketing - Social Media',
      src: Dana,
      alt:'Dana Abughaduma',
    },
    {
      name:'Vanessa Hing',
      position: 'Director of Marketing - Graphic Design',
      src: Vanessa,
      alt:'Vanessa Hing',
    },
    {
      name:'Jaelyn Lee',
      position: 'Director of Marketing - Graphic Design',
      src: Jaelyn,
      alt:'Jaelyn Lee',
    },
    {
      name:'Austin Yang',
      position: 'Director of Marketing - Web Master',
      src: Austin,
      alt:'Austin Yang',
    },
    {
      name:'Nhien Dinh',
      position: 'Director of Events',
      src: Nhien,
      alt:'Nhien Dinh',
    },
    {
      name:'De-Mario Knowles',
      position: 'Director of Events',
      src: De_Mario,
      alt:'De-Mario Knowles',
    },
    {
      name:'Rachel Ye',
      position: 'Director of Events',
      src: Rachel,
      alt:'Rachel Ye',
    },
  ],
};
