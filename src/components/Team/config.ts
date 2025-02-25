import type { ImageMetadata } from 'astro';

import Abdumalik from "../../assets/Team/Executives/New_Abdumalik.jpg";
import Ananya from "../../assets/Team/Executives/New_Ananya.jpg";
import Angelina from "../../assets/Team/Executives/New_Angelina.jpg";
import Dana from "../../assets/Team/Executives/New_Dana.jpg";
import Dora from "../../assets/Team/Executives/New_Dora.jpg";
import Elena from "../../assets/Team/Executives/New_Elena.jpg";
import Fahad from "../../assets/Team/Executives/New_Fahad.jpg";
import Jaelyn from "../../assets/Team/Executives/New_Jaelyn.jpg";
import Jessica from "../../assets/Team/Executives/New_Jessica.jpg";
import Julia from "../../assets/Team/Executives/New_Julia.jpg";
import Kagesan from "../../assets/Team/Executives/New_Kagesan.jpg";
import Keerthika from "../../assets/Team/Executives/New_Keerthika.jpg"
import Khadije from "../../assets/Team/Executives/New_Khadije.jpg";
import Krishna from "../../assets/Team/Executives/New_Krishna.jpg";
import Nhien from "../../assets/Team/Executives/New_Nhien.jpg";
import Pavishan from "../../assets/Team/Executives/New_Pavishan.jpg";
import Mehak from "../../assets/Team/Executives/New_Mehak.jpg";
import Sondoss from "../../assets/Team/Executives/New_Sondoss.jpg";


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
      name: 'Keerthika Selvakumar',
      position: 'Co - President',
      src: Keerthika,
      alt: 'Keerthika Selvakumar',
    },
    {
      name: 'Khadije Ramadan',
      position: 'Co - President',
      src: Khadije,
      alt: 'Khadije Ramadan',
    },
    {
      name: 'Dora Wu',
      position: 'Vice President External ',
      src: Dora,
      alt: 'Dora Wu',
    },
    {
      name: 'Dana Abughaduma',
      position: 'Vice President Internal',
      src: Dana,
      alt: 'Dana Abughaduma',
    },
    {
      name: 'Julia Gorovitz',
      position: 'Outreach Coordinator',
      src: Julia,
      alt: 'Julia Gorovitz',
    },
    {
      name: 'Abdumalik Okhunjonav',
      position: 'Outreach Coordinator',
      src: Abdumalik,
      alt: 'Abdumalik Okhunjonav',
    },
    {
      name: 'Kagesan Sriharan',
      position: 'Director of Finance',
      src: Kagesan,
      alt: 'Kagesan Sriharan',
    },
    {
      name: 'Fahad Bastians',
      position: 'Chem-Aid Director',
      src: Fahad,
      alt: 'Fahad Bastians',
    },
    {
      name: 'Krishna Bajaj',
      position: 'Director of Academics',
      src: Krishna,
      alt: 'Krishna Bajaj',
    },
    {
      name: 'Jessica Yang',
      position: 'Director of Academics',
      src: Jessica,
      alt: 'Jessica Yang',
    },
    {
      name:'Pavishan Sivaneswaran',
      position: 'Director of Marketing - Social Media',
      src: Pavishan,
      alt:'Pavishan Sivaneswaran',
    },
    {
      name:'Sondoss Sayeh',
      position: 'Director of Marketing - Graphic Design',
      src: Sondoss,
      alt:'Sondoss Sayeh',
    },
    {
      name:'Jaelyn Lee',
      position: 'Director of Marketing - Graphic Design',
      src: Jaelyn,
      alt:'Jaelyn Lee',
    },
    {
      name:'Elena Osipyan',
      position: 'Director of Marketing - Graphic Design',
      src: Elena,
      alt:'Elena Osipyan',
    },
    {
      name:'Mehak Mahajan',
      position: 'Director of Marketing - Web Master',
      src: Mehak,
      alt:'Mehak Mahajan',
    },
    {
      name:'Angelina Cao',
      position: 'Director of Events',
      src: Angelina,
      alt:'Angelina Cao',
    },
    {
      name:'Ananya Balaji',
      position: 'Director of Events',
      src: Ananya,
      alt:'Ananya Balaji',
    },
    {
      name:'Nhien Dinh',
      position: 'Director of Events',
      src: Nhien,
      alt:'Nhien Dinh',
    },
  ],
};
