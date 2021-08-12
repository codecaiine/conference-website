const speakers = [{
  img: './images/speakers/zuckerbeg.jpg',
  name: 'Mark Zuckerberg',
  position: 'Co-founder and CEO',
  company: 'Facebook',
  website: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
  bio: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
},

{
  img: './images/speakers/sundar-pichai.jpg',
  name: 'Sundar Pichai',
  position: 'CEO',
  company: 'Alphabet Inc. (Google)',
  website: 'https://en.wikipedia.org/wiki/Sundar_Pichai',
  bio: `Pichai Sundararajan is an Indian-American business executive.He is the
         chief executive officer (CEO) of Alphabet Inc.`,
},

{
  img: './images/speakers/mitchell-baker.jpg',
  name: 'Mitchell Baker',
  position: 'CEO',
  company: 'Mozilla',
  website: 'https://en.wikipedia.org/wiki/Mitchell_Baker',
  bio: 'Winifred Mitchell Baker is the Executive Chairwoman and CEO of the Mozilla Foundation and of Mozilla Corporation, a subsidiary of the Mozilla Foundation.',
},

{
  img: './images/speakers/satya_nadella.jpg',
  name: 'Satya Nadella',
  position: 'CEO',
  company: 'Mozilla',
  website: 'https://en.wikipedia.org/wiki/Satya_Nadella',
  bio: 'Satyanarayana Nadella  is an Indian-born American business executive. He is the executive chairman and CEO of Microsoft.',
},

];

function getSpeakers(speaker) {
  const speakerCol = `<div class="col-lg-6 col-md-6">
    <div class="row rounded overflow-hidden flex-md-row position-relative">

    <div class="col-auto d-lg-block">
        <img src="${speaker.img}" width="120" height="120"  alt="${speaker.name}">

    </div>
    <div class="col d-flex flex-column position-static">
        <h3 class="mb-0">${speaker.name}</h3>
        <div class="mb-1 text-muted">${speaker.position} - ${speaker.company}</div>
        <p class="card-text mb-auto">${speaker.bio}</p>
        <a href="${speaker.website}" class="stretched-link">More</a>
    </div>

</div></div>`;
  return speakerCol;
}

const speakersSection = document.querySelector('#speakers-list');

function showSpeakers() {
  const speakersList = Object.keys(speakers);
  const speakersListLength = Object.keys(speakers).length;
  for (let i = 0; i < speakersListLength; i += 1) {
    speakersSection.innerHTML += getSpeakers(speakers[speakersList[i]], i);
  }
}

speakersSection.onresize = showSpeakers();