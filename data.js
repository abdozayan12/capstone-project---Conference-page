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
    id: '02',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
          'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },

  {
    id: '03',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
          'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },

  {
    id: '04',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
          'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },

  {
    id: '05',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
          'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },

  {
    id: '06',
    name: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
          'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006 ',
    featuredImage: 'images/speaker_01 1.svg',
  },
];

const speaker = document.querySelector('.featured-speakers');

let output = ' ';
speakersData.forEach((speaker) => {
  output += `
    
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
    
      `;
});

speaker.innerHTML = output;
