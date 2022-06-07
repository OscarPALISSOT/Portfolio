
class Carousel{
    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} options.SlideToScroll Nb d'éléments à faire défiler
     * @param {Object} options.SlidesVisibles Nb d'éléments visible
     */
    constructor (element, options = {} ) {
        this.element = element
        this.options = Object.assign({}, {
            SlidesToScroll: 1,
            SlidesVisibles: 1
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.CreateDivWithChild('carousel')
        this.container = this.CreateDivWithChild('carousel__container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.CreateDivWithChild('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.CreateNavigation()
    }


    /**
     * Applique les dimensions aux différentes div
     */
    setStyle() {
        let ratio = this.items.length / this.options.SlidesVisibles
        this.container.style.width = (ratio * 100 + '%')
        this.items.forEach( item => item.style.width = ((100 / this.options.SlidesVisibles) /  ratio ) + '%')
    }


    CreateNavigation() {
        let nextButton = this.CreateDivWithChild('carousel__next')
        let prevButton = this.CreateDivWithChild('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.Next.bind(this))
        prevButton.addEventListener('click', this.Prev.bind(this))
    }


    Next() {
        this.GoToItem(this.currentItem + this.options.SlidesToScroll)
    }

    Prev() {
        this.GoToItem(this.currentItem - this.options.SlidesToScroll)
    }


    /**
     * Deplace le carousel vers la cible
     * @param {number} index
     *
     */
    GoToItem(index){
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX +'%, 0, 0)'
        this.currentItem = index
    }

    /**
     *
     * @param {string}className
     * @return {HTMLElement}
     */
    CreateDivWithChild(className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

}







document.addEventListener('DOMContentLoaded', function () {
    new Carousel(document.querySelector('#carousel1'), {
        SlidesToScroll: 3,
        SlidesVisibles: 3
    })
})



