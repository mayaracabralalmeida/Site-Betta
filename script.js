$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});

const peixe = document.getElementById("peixe");
const tamanhopeixe = document.getElementById("--peixe")
tamanhopeixe = 100;
let x = 0;
let y = 200;
let direcao = 1; // 1 = direita, -1 = esquerda
const velocidade = 2;
const larguraPeixe = 100;

function nadar() {
  x += velocidade * direcao;

  // bateu na direita
  if (x >= window.innerWidth - larguraPeixe) {
    direcao = -1;
  }

  // bateu na esquerda
  if (x <= 0) {
    direcao = 1;
  }

  // movimento vertical leve
  y += (Math.random() - 0.5) * 2;

  // 👇 AQUI está o segredo: sempre atualizar tudo junto
  peixe.style.transform = `translate(${x}px, ${y}px) scaleX(${direcao})`;

  if (x <= 0) {
  tamanhopeixe = 200;
}
}