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
  Object.keys(section).forEach((key) => {
    const element = document.querySelector(`#${key}`);
    if (element) {
      element.querySelector('.section__text').innerHTML = section[key].text
      element.querySelector('img.section__img').src = section[key].image.src
      element.querySelector('img.section__img').alt = section[key].image.alt
    }
  });
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
