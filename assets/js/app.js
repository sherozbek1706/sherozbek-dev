

let projectLists = document.querySelector(".project-list");

const renderLists = () => {
  data.forEach((list) => {
    let { image__url, site__url, site__name, site__category_name, site__type } =
      list;

    let listEl = `
        <li class="project-item  active" data-filter-item data-category="${site__type}">
          <a href="${site__url}" target="_blank">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${image__url}" alt="finance" loading="lazy">
            </figure>
            <h3 class="project-title">${site__name}</h3>
            <p class="project-category">${site__category_name}</p>
          </a>
        </li>
      `;
    projectLists.innerHTML += listEl;
  });
};
renderLists();
