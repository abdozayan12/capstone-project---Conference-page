const speakersData = [
  {
    id: '01',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },

  {
    id: '03',
    name: 'SohYeong Noh',
    role: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
          'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    featuredImage: 'images/speaker_01 1 (2).svg',
  },
];

const speaker = document.querySelector('.featured-speakers');

let output = ' ';
speakersData.forEach((speaker) => {
  output += `
      <div class="grid">
        <img src="${speaker.featuredImage}" alt="first speaker">
        <ul>
            <li>
                <h2>${speaker.name}</h2>
            </li>
            <li>
                <p class="p1">${speaker.role}</p>
            </li>
            <li>
                <p class="p2">${speaker.description}</p>
            </li>
        </ul>
      </div>  
      `;
});

speaker.innerHTML = output;



const speakersData2 = [

  {
    id: '02',
    name: 'Kilnam Chon',
    role: 'Berkman Professor',
    description:
          'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame ',
    featuredImage: 'images/speaker_01 1 (1).svg',
  },

  {
    id: '04',
    name: 'Julia Leda',
    role: 'President of Young Pirates of Europe',
    description:
          'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    featuredImage: 'images/speaker_01 1 (3).svg',
  },

  {
    id: '05',
    name: 'Lila tretikov',
    role: 'Executive Director of the Wikimedia Foundation',
    description:
          'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    featuredImage: 'images/speaker_01 1 (4).svg',
  },

  {
    id: '06',
    name: 'Ryan Merkley',
    role: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description:
          'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    featuredImage: 'images/speaker_01 1 (5).svg',
  },
];

const speaker2 = document.querySelector('.featured-speakers2');

let output2 = ' ';
speakersData2.forEach((speaker2) => {
  output2 += `
      <div class="grid">
        <img src="${speaker2.featuredImage}" alt="first speaker">
        <ul>
            <li>
                <h2>${speaker2.name}</h2>
            </li>
            <li>
                <p class="p1">${speaker2.role}</p>
            </li>
            <li>
                <p class="p2">${speaker2.description}</p>
            </li>
        </ul>
      </div>  
      `;
});

speaker2.innerHTML = output2;


