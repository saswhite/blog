let flag = true

$('.header-btn').on('click', () => {
    if (flag) {
        $('.header-body').toggleClass('dn')
        flag = false
    } else {
        $('.header-body').toggleClass('dn')
        flag = true
    }
})

$(window).on('load', () => {
    $("a[href='home']").addClass('col')
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

    if ($(document).scrollTop() >= ($('.contact').offset().top - $('.contact').outerHeight() / 2)) {
        judge()
        $("a[href='contact']").addClass('col')
    }
    else if ($(document).scrollTop() >= ($('.blog').offset().top - $('.blog').outerHeight() / 2)) {
        judge()
        $("a[href='blog']").addClass('col')
    }
    else if ($(document).scrollTop() >= ($('.services').offset().top - $('.services').outerHeight() / 2)) {
        judge()
        $("a[href='services']").addClass('col')
    }
    else if ($(document).scrollTop() >= ($('.about').offset().top - $('.about').outerHeight() / 2)) {
        judge()
        $("a[href='about']").addClass('col')
    }
    else if ($(document).scrollTop() >= ($('.home').offset().top - $('.home').outerHeight() / 2)) {
        judge()
        $("a[href='home']").addClass('col')
    }
})

function judge() {
    $(".header-body-link").removeClass('col')
}


$('.header-body-link').click(function (e) {
    e.preventDefault()

    let href = $(this).attr('href')

    if ($(`.${href}`).length > 0) {
        $('html,body').stop().animate(
            { scrollTop: $(`.${href}`).offset().top }, 500);
    }
    judge()
    $(this).addClass('col')
})

let flagW = false


$(window).on('resize', function (e) {
    if ($(window).width() > 900) {
        flagW = true
    }

    if ($(window).width() > 900) {
        $('.header-body').removeClass('dn')
    } else if (($(window).width() <= 900) && flagW) {
        $('.header-body').addClass('dn')
        flag = true
        flagW = false
    }

})





