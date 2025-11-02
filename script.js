const sideMenu = document.querySelector('#sideMenu')
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

  const showMoreBtn = document.getElementById('show-more-btn');
  const extraProjects = document.querySelectorAll('.extra-projects');
  let isShown = false;

  showMoreBtn.addEventListener('click', () => {
    isShown = !isShown;
    extraProjects.forEach(project => {
      project.classList.toggle('hidden', !isShown);
    });
    showMoreBtn.textContent = isShown ? 'Show Less' : 'Show More';
  });

window.addEventListener('scroll', ()=>{
  if(scrollY > 50) {
    navBar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme',  'dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
  } else {
    navBar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme',  'dark:shadow-sm');
     navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
  }
})

//-------------Light mode / Dark mode toggle----------------//
if (localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
} 


function toggleTheme() {
  document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
}

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});
