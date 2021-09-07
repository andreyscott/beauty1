//To load template for header and footer
const header = document.querySelector('#header'),
    footer = document.querySelector('#footer');
let argUrl = window.location.pathname;

document.addEventListener('DOMContentLoaded', loadDoc);
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'template/header.html', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            header.innerHTML = this.responseText;

            switch (argUrl) {
                case '/index.html':
                    header.querySelector('#home').classList.add('active');
                    break;
                case '/about.html':
                    header.querySelector('#about-us').classList.add('active');
                    break;
                case '/products-services.html':
                    header.querySelector('#our-products').classList.add('active');
                    break;
                case '/categories.html':
                    header.querySelector('#categories').classList.add('active');
                    break;
                case '/contact.html':
                    header.querySelector('#contact').classList.add('active');
                    break;
                case '/login.html':
                    header.querySelector('#login').classList.add('active');
                    break;
                case '/register.html':
                    header.querySelector('#register').classList.add('active');
                    break;
                // case '/login.html':
                //     header.querySelector('#login').classList.add('active');
                //     break;

                default:
                    break;
            }
        }
    };
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'template/footer.html', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            footer.innerHTML = this.responseText;
        }
    };
}
