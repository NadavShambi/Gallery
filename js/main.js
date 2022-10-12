
$(init)

function init(){
  renderPortfoliosItems()
  // $('.portfolio-link').on('click',(puki)=>{onRenderModal(puki.currentTarget.dataset.id)})
  $('.portfolio-link').on('click',function(){onRenderModal(this.dataset.id)})
  $('.contact-form .btn').on('click',function(){openSendEmail()})
  

}


function openSendEmail(){
  const $elForm = $('.contact-form')
  const $subject = $elForm.find('.subject').val()
  const $email = $elForm.find('.email').val()
  const $body = $elForm.find('.body').val()
  window.open(
  `https://mail.google.com/mail/?view=cm&fs=1&to=nadav.shambi@gmail.com&su=${$subject}&body=${$body}`)
  
}


function renderPortfoliosItems(){
  const projects = getProjects()
  // open css file  
  const strHTML =  projects.map(project=>{
    return`
    <div class="col-md-4 col-sm-6 portfolio-item pt-3 ">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" data-id="${project.id}">
            <div class="portfolio-hover d-flex align-items-center justify-content-center bg-dark">
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
  $elModal.find('.btn-danger').text(project.labels[0])
  $elModal.find('.btn-info').text(project.labels[1])
}

