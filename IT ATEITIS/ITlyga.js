$ (function () {
    $('header').load('/HTML/header.html');
    $('aside').load('/html/aside.html');
    $('footer').load('HTML/footer.html');

    $('main').load('/main.html', function() {
$('nav > a').click(function(e) {
    e.preventdefault();
    let kelias = $(this).attr('href');
$('main').load (kelias);
});
});
})