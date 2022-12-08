const addContentToHtml = async () => {
  const content = await getContent("data.json");

  addSection(content.section);
  addSocial(content["footer-social"]);
  addContact(content.contact);
};

const getContent = async (url) => {
  const res = await fetch(url);
  const content = await res.json();

  return content;
};

const addSection = (section) => {
  const main = document.querySelector('main')
  if (main) {
    let html = ''
    Object.keys(section).forEach((key) => {
      html += `
       <section id="${key}">
          <div class="container">
              <div class="section">
                  <div class="section__text animation-fadeInLeft">
                  ${section[key].text}
                  </div>
                  <img class="section__img animation-fadeInRight" src="${section[key].image.src}" alt="${section[key].image.alt}">
              </div>
          </div>
      </section>
      `
    });
    main.innerHTML += html
  }
};

const addSocial = (social) => {
  const footerSocialListElement = document.querySelector(".footer-social__list");
  if (footerSocialListElement) {
    let links = "";
    Object.keys(social).forEach((key) => {
      links += `<li class="footer-social__list__item"><a href="${social[key]}" class="footer-social__list__link"> <i
      class="fa fa-${key}"></i></a></li>`;
    });
    footerSocialListElement.innerHTML = links
  }
};

const addContact = (contact) => {
  Object.keys(contact).forEach((key) => {
    const element = document.querySelector(`#${key}`);
    if (element) {
      element.innerHTML +=
        key == "email"
          ? `<a href="mailto:${contact[key]}">${contact[key]}</a>`
          : contact[key];
    }
  });
};

addContentToHtml();
