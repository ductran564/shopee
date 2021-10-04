

//Tạo hiệu ứng slider
var fullHomeBannerMainWidth = document.querySelector('.banner-main').clientWidth
var changeWidthImg = 0
var directionalRight = document.querySelector('.icon-banner-directional-right')
var directionalLeft = document.querySelector('.icon-banner-directional-left')
var bannerMainImgs = document.querySelector('.banner-main-imgs')
var bannerMainImg = document.querySelectorAll('.banner-main-img')


const app = {
    currentIndex: 0,

    render () {
        const bannerMainImgs = [...bannerMainImg]
        var selectBannerImgs = document.querySelector('.select-banner-imgs')
        
        const htmls = bannerMainImgs.map((bannerMainImg,index) => {
            return `
                <div class="select-banner-img ${this.currentIndex === index ? 'active' : ''}"></div>
            `
        })

        selectBannerImgs.innerHTML = htmls.join('')
    },

    definePropertiers () {
        Object.defineProperty(this,'currentSelectImg',{
            get () {
                var selectBannerImg = document.querySelectorAll('.select-banner-img')
                var arraySelectBannerImg = [...selectBannerImg]

                return arraySelectBannerImg[this.currentIndex]
            }
        }),

        Object.defineProperty(this,'currentSectionRecommendTabLocateBackground', {
            get () {
                var sectionRecommendLocateBackgrounds = document.querySelectorAll('.section-recommend-tab-locate-backgound')
                var arraysectionRecommendLocateBackgrounds = Array.from(sectionRecommendLocateBackgrounds)
                return arraysectionRecommendLocateBackgrounds[this.currentIndex]
            }
        })
    },

    loadSelectCurrentImg () {
        return this.currentSelectImg.classList.add('active')
    },

    loadCurrentSectionRecommendTabLocateBackground () {
        return this.currentSectionRecommendTabLocateBackground.classList.add('section-recommend-tab-locate-backgound--active')
    },

    nextBannerImg () {
        this.currentIndex++
        if (this.currentIndex > 15) {
            this.currentIndex = 0
        }
        this.currentImgs(this.currentIndex)

        console.log(this.currentIndex)
        this.updateCurrentSelectImg(this.currentIndex)
    },

    backBannerImg () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = 15
        }
        this.currentImgs(this.currentIndex)

        console.log(this.currentIndex)
        this.updateCurrentSelectImg(this.currentIndex)
        
    },

    currentImgs (index) {
        const currentWidthImgs = [
            '0',
            '-800',
            '-1600',
            '-2400',
            '-3200',
            '-4000',
            '-4800',
            '-5600',
            '-6400',
            '-7200',
            '-8000',
            '-8800',
            '-9600',
            '-10400',
            '-11200',
            '-12000',
        ]
        return bannerMainImgs.style.marginLeft = currentWidthImgs[index] + 'px'
    },

    updateCurrentSelectImg (currentIndex) {
        var selectBannerImg = document.querySelectorAll('.select-banner-img')
        let _this = this
        
        Array.from(selectBannerImg).map((bannerImg,index) => {
            if (currentIndex === index) {
                bannerImg.classList.add('active')
            } else {
                bannerImg.classList.remove('active')
            }
        })
    },

    selectBanner () {
        var selectBannerImg = document.querySelectorAll('.select-banner-img')
        let _this = this
        
        Array.from(selectBannerImg).map((bannerImg,index) => {
            bannerImg.onclick = function () {
                _this.currentIndex = index
                _this.updateCurrentSelectImg(_this.currentIndex)
                console.log(bannerImg)
                console.log(_this.currentIndex) 
                _this.currentImgs(index)

            }
        })
    },
    
    // Xử Lí các sự kiện DOM Event
    HandleDomEvent () {
        let _this = this
        directionalRight.onclick = function () {
            _this.nextBannerImg()
        }

        directionalLeft.onclick = function () {
            _this.backBannerImg()
        }

        setInterval(function () {
            _this.currentIndex++
            if (_this.currentIndex > 15) {
                _this.currentIndex = 0
            }
            _this.currentImgs(_this.currentIndex)
            _this.updateCurrentSelectImg(_this.currentIndex)
        },8000)
    },

    carouselArrow () {
        var sectionCategoryList = document.querySelector('.home-section-category-content-list')
        var carouselArrowPrev = document.querySelector('.carousel-arrow--prev')
        var carouselArrowNext = document.querySelector('.carousel-arrow--next')
        
        // Khi hover vào sectionCategoryList
        sectionCategoryList.onmouseover = function () {
            if (sectionCategoryList.offsetLeft === 0) {
                carouselArrowNext.classList.remove('carousel-arrow--hint')
            } else {
                carouselArrowPrev.classList.remove('carousel-arrow--hint')
            }

        }
         // Khi hover ra sectionCategoryList
        sectionCategoryList.onmouseout = function () {
            if (sectionCategoryList.offsetLeft === 0) {
                carouselArrowNext.classList.add('carousel-arrow--hint')
            } else {
                carouselArrowPrev.classList.add('carousel-arrow--hint')
            }
        }

        // khi hover vào carouselArrowNext
        carouselArrowNext.onmouseover = function () {
            if (sectionCategoryList.offsetLeft === 0) {
                carouselArrowNext.classList.remove('carousel-arrow--hint')
            }
        }
         // Khi hover ra carouselArrowNext
        carouselArrowNext.onmouseout = function () {
            if (sectionCategoryList.offsetLeft === 0) {
                carouselArrowNext.classList.add('carousel-arrow--hint')
            }
        }

        // khi hover vào carouselArrowPrev
        carouselArrowPrev.onmouseover = function () {
            if (sectionCategoryList.offsetLeft !== 0) {
                carouselArrowPrev.classList.remove('carousel-arrow--hint')
            }
        }
         // Khi hover ra carouselArrowPrev
         carouselArrowPrev.onmouseout = function () {
            if (sectionCategoryList.offsetLeft !== 0) {
                carouselArrowPrev.classList.add('carousel-arrow--hint')
            }
        }

        if (sectionCategoryList.offsetLeft === 0) {
            carouselArrowPrev.classList.add('carousel-arrow--hidden')
        }

        // khi click vào carouselArrowNext
        carouselArrowNext.onclick = function () {
            var homeSectionCategoryContLink = document.querySelector('.home-section-category-content-link')
            console.log([homeSectionCategoryContLink])
            var homeSectionCategoryContLinkClientWidth = homeSectionCategoryContLink.clientWidth
            sectionCategoryList.style.marginLeft = homeSectionCategoryContLinkClientWidth === 64 ? -194 + 'px' : -360 + 'px'
            sectionCategoryList.style.marginLeft = homeSectionCategoryContLinkClientWidth === 41 ? -132 + 'px' : -360 + 'px'
            carouselArrowPrev.classList.remove('carousel-arrow--hidden')
            carouselArrowNext.classList.add('carousel-arrow--hidden')
        }

        // khi click vào carouselArrowPrev
        carouselArrowPrev.onclick = function () {

            sectionCategoryList.style.marginLeft = 0
            carouselArrowPrev.classList.add('carousel-arrow--hidden')
            carouselArrowNext.classList.remove('carousel-arrow--hidden')
        }
    },

    //khi update SectionRecommendTabProduct
    updateSectionRecommendTabLocateBackground (currentSectionRecommendTabLocateBackground) {
        var sectionRecommendTabLocateBackgrounds = document.querySelectorAll('.section-recommend-tab-locate-backgound')
        Array.from(sectionRecommendTabLocateBackgrounds).map((sectionRecommendTabLocateBackground,index) => {
            if (currentSectionRecommendTabLocateBackground === index) {
                sectionRecommendTabLocateBackground.classList.add('section-recommend-tab-locate-backgound--active')
            } else {
                sectionRecommendTabLocateBackground.classList.remove('section-recommend-tab-locate-backgound--active')
            }
        })
    },

    updateSectionRecommendProductWrap () {
        var _this = this
        var sectionRecommendProductWraps = document.querySelectorAll('.section-recommend-products-wrap')
        Array.from(sectionRecommendProductWraps).map((sectionRecommendProductWrap,index) => {
            if (_this.currentIndex === index) {
                sectionRecommendProductWrap.style.display = 'block'
            } else {
                sectionRecommendProductWrap.style.display = 'none'
            }
        })
    },

    // khi change section recommend product
    changeSectionRecommendProduct () {
        var _this = this
        var sectionRecommentTabItems = document.querySelectorAll('.section-recommend-tab-item')
        Array.from(sectionRecommentTabItems).map((sectionRecommendTabItem,index) => {
            sectionRecommendTabItem.onclick = function () {
                _this.currentIndex = index
                _this.updateSectionRecommendTabLocateBackground(_this.currentIndex)
                _this.updateSectionRecommendProductWrap(_this.currentIndex)
            }
        })
    },

    start: function () {
        // this.nextBannerImg()
        // this.backBannerImg()
        this.render()
        this.definePropertiers()
        this.loadSelectCurrentImg()
        this.selectBanner()
        this.HandleDomEvent()
        this.carouselArrow()
        this.loadCurrentSectionRecommendTabLocateBackground()
        this.changeSectionRecommendProduct()
    }
}

app.start()