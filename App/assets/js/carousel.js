
class Carousel{
    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} options.SlideToScroll Nb d'éléments à faire défiler
     * @param {Object} options.SlidesVisibles Nb d'éléments visible
     */
    constructor (element, options = {} ) {

    }
}







document.addEventListener('DOMContentLoaded', function () {
    new Carousel(document.querySelector('#carousel1'), {
        SlidesToScroll: 3,
        SlidesVisibles: 3
    })
})



