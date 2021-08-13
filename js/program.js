const programs = [{
  icon: '<i class="fa fa-users fa-2x"></i>',
  title: 'Network',
  details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!.',
},

{
  icon: '<i class="fa fa-rocket fa-2x"></i>',
  title: 'Workshops',
  details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!.',
},

{
  icon: '<i class="fa fa-comments-o fa-2x"></i>',
  title: 'Forum',
  details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!.',
},

{
  icon: '<i class="fa fa-microphone fa-2x"></i>',
  title: 'Talks',
  details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veritatis!.',
},

];

function getPrograms(program) {
  const programCol = `<div class="col-lg-6 col-md-6">
    <div class="card"> <div class="row">
          <div class="col-2"> ${program.icon}</div>
           <div class="col-4">
                <h4>${program.title}</h4>
            </div>
            <div class="col-6">
                <p class="card-text mb-auto">${program.details}</p>
            </div>
        </div>
    </div>
  </div>`;
  return programCol;
}

const programsSection = document.querySelector('.programs-list');

function showPrograms() {
  const programsList = Object.keys(programs);
  const programsListLength = Object.keys(programs).length;
  for (let i = 0; i < programsListLength; i += 1) {
    programsSection.innerHTML += getPrograms(programs[programsList[i]], i);
  }
}

programsSection.onresize = showPrograms();