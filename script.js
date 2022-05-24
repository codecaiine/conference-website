class Speakers {
  constructor(img, name, title, description) {
    this.img = img;
    this.name = name;
    this.title = title;
    this.description = description;
  }
}

const container = document.getElementById('feature-wrapper');
const speakerList = document.createElement('ul');
speakerList.classList.add('speaker-list');
container.appendChild(speakerList);

const speaker1 = new Speakers(
  'images/image-1.png',
  'Mitchell Baker',
  'CEO - Mozilla',
  'Winifred Mitchell Baker is the Executive Chairwoman and CEO of the Mozilla Foundation and of Mozilla Corporation, a subsidiary of the Mozilla Foundation.',
);
const speaker2 = new Speakers(
  'images/image-2.png',
  'Satya Nadella',
  'CEO Microsoft',
  'Satyanarayana Nadella is an Indian-born American business executive. He is the executive chairman and CEO of Microsoft.',
);
const speaker3 = new Speakers(
  'images/image-3.png',
  'Serguei Brin',
  'Co-Founder Google and Alphabet Inc.',
  'Sergey Mikhaylovich Brin is an American business magnate, computer scientist and Internet entrepreneur.',
);
const speaker4 = new Speakers(
  'images/image-4.png',
  'Jack Dorsey',
  'CEO Twitter',
  'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist who is the co-founder and CEO of Twitter, and the founder and CEO of Square, a financial payments company.',
);
const speaker5 = new Speakers(
  'images/image-5.png',
  'Mark Zuckerbeg',
  'CEO Meta',
  'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
);
const speaker6 = new Speakers(
  'images/image-6.png',
  'Sundar Pichai',
  'CEO Google - Alphabet',
  'Pichai Sundararajan is an Indian-American business executive.He is the chief executive officer (CEO) of Alphabet Inc.',
);

const speakerArr = [speaker1, speaker2, speaker3, speaker4, speaker5, speaker6];

function createSpeaker() {
  for (let i = 0; i < speakerArr.length; i += 1) {
    const list = document.createElement('li');
    list.classList.add('speaker-item');
    const img = document.createElement('img');
    img.setAttribute('src', speakerArr[i].img);
    const name = document.createElement('h4');
    name.textContent = speakerArr[i].name;
    const italics = document.createElement('i');
    italics.textContent = speakerArr[i].title;
    const title = document.createElement('p');
    title.classList.add('colored-text');
    title.appendChild(italics);
    const description = document.createElement('p');
    description.textContent = speakerArr[i].description;
    const div1 = document.createElement('div');
    const hr = document.createElement('hr');
    title.appendChild(hr);
    const div2 = document.createElement('div');
    div1.appendChild(img);
    div2.appendChild(name);
    div2.appendChild(title);
    div2.appendChild(description);
    list.appendChild(div1);
    list.appendChild(div2);
    speakerList.appendChild(list);
  }
}
window.onload = createSpeaker;
