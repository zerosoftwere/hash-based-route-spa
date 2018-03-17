function getContent(id) {
    var content = document.getElementById(id).content;
    return document.importNode(content, true);
}

function navigate(route, view) {
    switch (route) {
    case '':
    case '/':
        view.html(getContent('home.tpl'));
        break;
    case '/about':
        view.html(getContent('about.tpl'));
        break;
    case '/contact':
        view.html(getContent('contact.tpl'));
        break;
    default:
        view.html(getContent('404.tpl'));
        break;
    }
}

function loadView() {
    var route = window.location.hash.substr(1);
    var container = $('#root');
    navigate(route, container);
}

$(loadView);

window.addEventListener('hashchange', loadView);
