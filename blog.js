let flag = true

$('.header-btn').on('click', () => {
    if (flag) {
        $('.header-body').css('display', 'flex')
        flag = false
    } else {
        $('.header-body').css('display', 'none')
        flag = true
    }
})

$(window).on('load', () => {
    setTimeout(() => {
        $('body').toggleClass('preLoad')
    }, 500)
})

$(window).on('scroll', () => {
    let height = $(document).scrollTop()
    if (height > 90) {
        $('header').addClass('scroll')
        $('.header-title').css('height', '40px')
        $('.header-title').css('line-height', '40px')
    }
    else {
        $('header').removeClass('scroll')
        $('.header-title').css('height', '50px')
        $('.header-title').css('line-height', '50px')
    }
})

$('.header-body-link').click(function (e) {
    e.preventDefault()

    let href = $(this).attr('href')

    if ($(`.${href}`).length > 0) {
        $('html,body').stop().animate(
            { scrollTop: $(`.${href}`).offset().top }, 500);
    }

})