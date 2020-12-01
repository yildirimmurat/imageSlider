/* making an animated photo slider */

$(document).ready(function() {

    
    var firstImageItem = $(imageWrapper).find('.imageItem').first()
    var middleImageItem = $(imageWrapper).find('.imageItem').eq(middleImageNumber)
    var lastImageItem = $(imageWrapper).find('.imageItem').last()
    $(firstImageItem).addClass('firstImage')
    $(middleImageItem).addClass('middleImage')
    $(lastImageItem).addClass('lastImage')
    
    
    var counter = $('.counter')
    var firstIndex = $(counter).find('span').first()
    $(firstIndex).text(1)
    // var index = parseInt($(firstIndex).text())
    // index += 1
    // $(firstIndex).text(index)
    // console.log(index)
    $(counter).find('span').last().text(lengthImage)
    
    
    
    
})
var lengthImage = 7
var middleImageNumber = Math.floor(lengthImage / 2)
var imageWrapper = $('.img-wrapper')

var toLeft=0
var toRight=0
var imageWidth = $('.img-wrapper').find('.imageItem').first().outerWidth()


// Button click event definition
$('#button1').on("click", imagesLeft)
$('#button2').on("click", imagesRight)

// rotate left event handler
function imagesLeft() {
    var imageWrapper = $('.img-wrapper')
    var leftMostImageItem = imageWrapper.find('.imageItem.firstImage')
    var middleImageItem = imageWrapper.find('.imageItem.middleImage')
    $(leftMostImageItem).clone().removeClass('firstImage').appendTo(imageWrapper)
    
    $(imageWrapper).animate({
        "left": "-="+imageWidth+"px"
    }, 500);
    
    $(leftMostImageItem).removeClass('firstImage')
    var nextSibling = $(leftMostImageItem).next()
    $(nextSibling).addClass('firstImage')
    
    $(middleImageItem).removeClass('middleImage')
    var nextMiddle = $(middleImageItem).next()
    $(nextMiddle).addClass('middleImage')
    
    toLeft += imageWidth
    

    var counter = $('.counter')
    var firstIndex = $(counter).find('span').first()
    var index = parseInt($(firstIndex).text())
    index -= 1
    if(index === 0) {
        index = lengthImage
    }
    $(firstIndex).text(index)
    
    
}

function imagesRight() {
    var imageWrapper = $('.img-wrapper')
    var middleImageItem = imageWrapper.find('.imageItem.middleImage')
    var rightMostImageItem = imageWrapper.find('.imageItem.lastImage')
    
    $(rightMostImageItem).clone().removeClass('lastImage').prependTo(imageWrapper)
    $(imageWrapper).css("left", "-=" + imageWidth + "px")

    $(imageWrapper).animate({
        "left": "+="+imageWidth+"px"
    }, 500);

    $(rightMostImageItem).removeClass('lastImage')
    var previousSibling = $(rightMostImageItem).prev()
    $(previousSibling).addClass('lastImage')

    $(middleImageItem).removeClass('middleImage')
    var nextMiddle = $(middleImageItem).prev()
    $(nextMiddle).addClass('middleImage')

    toRight += imageWidth
    
    var counter = $('.counter')
    var firstIndex = $(counter).find('span').first()
    var index = parseInt($(firstIndex).text())
    index += 1
    if(index === lengthImage + 1) {
        index = 1
    }
    $(firstIndex).text(index)
}
