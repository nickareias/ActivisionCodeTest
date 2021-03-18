// Set up youtube embed according to youtube api documentation
let tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player
function onYouTubeIframeAPIReady () {
  player = new YT.Player('modal-video-player', {
    height: '100%',
    width: '100%',
    videoId: 'x993FRC4rXA',
    events: {
      'onReady': onPlayerReady
    }
  })
}

function onPlayerReady (event) {
  $('#learn-more').removeAttr("disabled")
}

function hideModal () {
  $('#video-modal').addClass('modal-background--hiding')
  $('#video-modal').animate({
    opacity: 0
  }, 400, () => {
    pauseVideo()
    $('#video-modal').addClass('modal-background--hidden')
    $('#video-modal').removeClass('modal-background--hiding')
  })
}

function showModal () {
  playVideo()
  $('#video-modal').removeClass('modal-background--hidden')
  $('#video-modal').animate({
    opacity: 1
  }, 400)
}

function playVideo () {
  player.playVideo()
}

function pauseVideo () {
  player.pauseVideo()
}

// Set up event listeners
$(document).ready(() => {
  $('#learn-more').click(() => {
    showModal()
  })

  $('#video-modal').click((e) => {
    if (['video-modal', 'modal-close-button'].includes(e.target.id)) {
      hideModal()
    }
  })
})