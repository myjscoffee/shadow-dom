class CvvInfo extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);
    const info = document.createElement('span');
    info.setAttribute('class', info);
    const text = this.getAttribute('data-text');
    info.textContent = text;

    let imageUrl;
    if (this.hasAttribute('img')) {
      imageUrl = this.getAttribute('img');
    } else {
      imageUrl = 'assets/default.png';
    }

    const img = document.createElement('img');
    img.src = imageUrl;
    icon.appendChild(img);

    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    shadowRoot.appendChild(style);
    console.log(style.isConnected);
    shadowRoot.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}
customElements.define('cvv-info', CvvInfo);
