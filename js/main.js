
$(init)

function init(){
  renderPortfoliosItems()
  // $('.portfolio-link').on('click',(puki)=>{onRenderModal(puki.currentTarget.dataset.id)})
  $('.portfolio-link').on('click',function(){onRenderModal(this.dataset.id)})

}


function renderPortfoliosItems(){
  const projects = getProjects()
  // open css file  
  const strHTML =  projects.map(project=>{
    return`
    <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" data-id="${project.id}">
            <div class="portfolio-hover d-flex align-items-center justify-content-center">
              <div class="portfolio-hover-content ">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid align-self-center" src="img/portfolio/${project.id}.png" alt="" >
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
    `
  })
  $('.portfolio-projects').html(strHTML) 
}


function onRenderModal(id){
  const project = getProjectById(id)
  const $elModal = $('.modal-body')
  $elModal.find('h2').text(project.name)
  $elModal.find('.item-intro').text(project.title)
  $elModal.find('img').attr('src',`img/portfolio/${id}.png`)
  $elModal.find('.desc').text(project.desc)
  $elModal.find('.to-project').attr('href',`${project.url}`)
  $elModal.find('.date').text(`Published At: ${project.publishedAt}`)
  $elModal.find('.btn-dark').text(project.labels[0])
  $elModal.find('.btn-info').text(project.labels[1])
}

  `

<!--@m Modal 1 -->

              <!-- Project Details Go Here -->
              <h2>Project Name</h2>
              <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
              <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                blanditiis
                dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                cupiditate,
                maiores repudiandae, nostrum, reiciendis facere nemo!</p>
              <ul class="list-inline">
                <li>Date: January 2017</li>
                <li>Client: Threads</li>
                <li>Category: Illustration</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`


