const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

const testimonialPhotos = Array.from(document.querySelectorAll('.hero-photo'))
const testimonialText = Array.from(document.querySelectorAll('.testimonial-text'))

const cycleUp = (arr) => {
  const current = arr.findIndex(testimonial => testimonial.classList.contains('show'))
    
  if (current === arr.length - 1) {
    arr[0].classList.add('show')
  } else {
    arr[current+1].classList.add('show')
  }

  arr[current].classList.remove('show')
}

const cycleDown = (arr) => {
  const current = arr.findIndex(testimonial => testimonial.classList.contains('show'))
    
  if (!current) {
    arr[arr.length - 1].classList.add('show')
  } else {
    arr[current-1].classList.add('show')
  }

  arr[current].classList.remove('show')
}

const handleNext = () => {
  cycleUp(testimonialPhotos)
  cycleUp(testimonialText)
}

const handlePrev = () => {
  cycleDown(testimonialPhotos)
  cycleDown(testimonialText)
}

nextBtn.addEventListener('click', handleNext)
prevBtn.addEventListener('click', handlePrev)