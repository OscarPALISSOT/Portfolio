
class Carousel{
    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} [options.SlideToScroll=1] Nb d'éléments à faire défiler
     * @param {Object} [options.SlidesVisibles=1] Nb d'éléments visible
     * @param {Boolean} [options.Loop=false] Boucle en bord de carousel
     * @param {Boolean} [options.Pagination=false] Affiche la pagination des slides
     */
    constructor (element, options = {} ) {
        this.element = element
        this.options = Object.assign({}, {
            SlidesToScroll: 1,
            SlidesVisibles: 1,
            Loop: false,
            Pagination: false
        }, options)
        let children = [].slice.call(element.children)
        this.IsPhone = false
        this.currentItem = 0
        this.moveCallbacks = []

        //Modif du Dom
        this.root = this.CreateDivWithChild('carousel')
        this.container = this.CreateDivWithChild('carousel__container')
        this.root.setAttribute('tabindex', '0')
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
        if (this.options.Pagination){
            this.CreatePagination()
        }


        //event
        this.moveCallbacks.forEach(cb => cb(0))
        this.OnWindowResize()
        window.addEventListener('resize', this.OnWindowResize.bind(this))
        this.root.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Right'){
                this.Next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left'){
                this.Prev()
            }
        })
    }


    /**
     * Applique les dimensions aux différentes div
     */
    setStyle() {
        let ratio = this.items.length / this.SlidesVisibles
        this.container.style.width = (ratio * 100 + '%')
        this.items.forEach( item => item.style.width = ((100 / this.SlidesVisibles) /  ratio ) + '%')
    }


    CreateNavigation() {
        let nextButton = this.CreateDivWithChild('carousel__next')
        let prevButton = this.CreateDivWithChild('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.Next.bind(this))
        prevButton.addEventListener('click', this.Prev.bind(this))
        if (this.options.Loop === true){
            return
        }
        this.OnMove(index => {
            if(index === 0){
                prevButton.classList.add('carousel__prev--hidden')
            } else {
                prevButton.classList.remove('carousel__prev--hidden')
            }
            if (this.items[this.currentItem + this.SlidesVisibles] === undefined){
                nextButton.classList.add('carousel__next--hidden')
            } else {
                nextButton.classList.remove('carousel__next--hidden')
            }
        })
    }


    CreatePagination() {
        let pagination = this.CreateDivWithChild('carousel__pagination')
        let buttons = []
        this.root.appendChild(pagination)
        for (let i = 0; i < this.items.length; i = i + this.options.SlidesToScroll){
            let button = this.CreateDivWithChild('carousel__pagination__button')
            button.addEventListener('click', () => this.GoToItem(i))
            pagination.appendChild(button)
            buttons.push(button)
        }
        this.OnMove(index =>{
            let ActiveButton = buttons[Math.floor(index / this.options.SlidesToScroll)]
            if (ActiveButton){
                buttons.forEach(button => button.classList.remove('carousel__pagination__button--active'))
                ActiveButton.classList.add('carousel__pagination__button--active')
            }
        } )
    }


    Next() {
        this.GoToItem(this.currentItem + this.SlidesToScroll)
    }

    Prev() {
        this.GoToItem(this.currentItem - this.SlidesToScroll)
    }


    /**
     * Déplace le carousel vers la cible
     * @param {number} index
     *
     */
    GoToItem(index){
        if( index < 0){
            if (this.options.Loop){
                index = this.items.length - this.SlidesVisibles
            } else {
                return
            }
        } else if (index >= this.items.length || (this.items[this.currentItem + this.SlidesVisibles] === undefined && index > this.currentItem)){
            if (this.options.Loop){
                index = 0
            } else {
                return
            }
        }
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX +'%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }


    /**
     *
     * @param cb
     */
    OnMove(cb){
        this.moveCallbacks.push(cb)
    }

    OnWindowResize () {
        let phone = window.innerWidth < 800
        if (phone !== this.IsPhone){
            this.IsPhone = phone
            this.setStyle()
            this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
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


    /**
     *
     * @returns {number}
     */
    get SlidesToScroll () {
        if (this.IsPhone){
            return 1
        } else {
            return this.options.SlidesToScroll
        }
    }

    /**
     *
     * @returns {number}
     */
    get SlidesVisibles () {
        if (this.IsPhone){
            return 1
        } else {
            return this.options.SlidesVisibles
        }
    }
}



document.addEventListener('DOMContentLoaded', function () {
    new Carousel(document.querySelector('#carousel1'), {
        SlidesToScroll: 3,
        SlidesVisibles: 3,
        Loop: false,
        Pagination: true
    })
})




