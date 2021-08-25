const keys = document.querySelectorAll('.key')
const imgs= document.querySelectorAll('.img')
keys.forEach((key) => {
  key.addEventListener('click', () => play(key))
})
function play(key) {
  const noteAudio = document.getElementById(key.dataset.key)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
