const speakers = [{
  img: './images/speakers/image-1.png',
  name: 'Mark Zuckerberg',
  position: 'Co-founder and CEO',
  company: 'Facebook',
  website: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
  bio: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
},

{
  img: './images/speakers/image-2.png',
  name: 'Sundar Pichai',
  position: 'CEO',
  company: 'Alphabet Inc. (Google)',
  website: 'https://en.wikipedia.org/wiki/Sundar_Pichai',
  bio: `Pichai Sundararajan is an Indian-American business executive.He is the
         chief executive officer (CEO) of Alphabet Inc.`,
},

{
  img: './images/speakers/image-3.png',
  name: 'Mitchell Baker',
  position: 'CEO',
  company: 'Mozilla',
  website: 'https://en.wikipedia.org/wiki/Mitchell_Baker',
  bio: 'Winifred Mitchell Baker is the Executive Chairwoman and CEO of the Mozilla Foundation and of Mozilla Corporation, a subsidiary of the Mozilla Foundation.',
},

{
  img: './images/speakers/image-4.png',
  name: 'Satya Nadella',
  position: 'CEO',
  company: 'Mozilla',
  website: 'https://en.wikipedia.org/wiki/Satya_Nadella',
  bio: 'Satyanarayana Nadella  is an Indian-born American business executive. He is the executive chairman and CEO of Microsoft.',
},

{
  img: './images/speakers/image-5.png',
  name: 'Jack Dorsey',
  position: 'CEO',
  company: 'Twitter',
  website: 'https://en.wikipedia.org/wiki/Jack_Dorsey',
  bio: 'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist who is the co-founder and CEO of Twitter, and the founder and CEO of Square, a financial payments company.',
},

{
  img: './images/speakers/image-6.png',
  name: 'Sergey Brin',
  position: 'Co-Found Google and Alphabet Inc.',
  company: 'Mozilla',
  website: 'https://en.wikipedia.org/wiki/Sergey_Brin',
  bio: 'Sergey Mikhaylovich Brin is an American business magnate, computer scientist and Internet entrepreneur. Together with Larry Page, he co-founded Google and Alphabet Inc.',
},

];

function getSpeakers(speaker) {
  const speakerCol = `<div class="col-lg-6 col-md-6">
    <div class="row rounded overflow-hidden flex-md-row position-relative">

    <div class="col-auto d-lg-block">
        <img src="${speaker.img}" width="178" height="178"  alt="${speaker.name}">

    </div>
    <div class="col d-flex flex-column position-static">
        <h3 class="mb-0">${speaker.name}</h3>
        <div class="mb-1 position">${speaker.position} - ${speaker.company}</div>
        <p class="card-text mb-auto">${speaker.bio}</p>
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