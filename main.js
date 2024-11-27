const navBottom = document.querySelector('#nav-bottom');
const menu = document.querySelector(".menu");

function over() {
  navBottom.style.cursor = 'pointer'
};

navBottom.addEventListener("click", () => { menu.classList.toggle("menu-open");
});

let isSlideBar = false;

function slideBar() {
    const img = document.getElementById('img');
    if (isSlideBar) {
      img.src = './slide-bar.png';
      img.style.width = '20px';
      img.style.height = '25px';
      img.style.marginLeft = '.1px';
      img.style.marginTop = '.2px';
      img.style.transition = '.3s';
      isSlideBar = false;
    } else {
        img.src = './cross-bar.png';
        img.style.width = '40px';
        img.style.height = '30px';
        img.style.marginLeft = '-8px';
        img.style.marginTop = '-3px';
        img.style.transition = '.3s';
        isSlideBar = true;
    }
}

setTimeout(() => {
    const loading = document.getElementById('backGround');
    const content = document.getElementById('content');
    const teS = document.getElementById('tes')
    const isi = document.getElementById('isi')
    
    loading.style.display = 'none';
    teS.style.display = 'block';
    isi.style.display = 'block';
}, 3000);