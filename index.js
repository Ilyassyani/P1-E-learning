const toggle = document.getElementById('toggle');
const menu = document.querySelector('.head1G');
const closeBtn = document.getElementById('close');

toggle.addEventListener('click', () => 
{
    toggle.style.display = 'none';
    menu.classList.add('active');
    closeBtn.style.display = 'flex';
});

closeBtn.addEventListener('click', () => 
{
    menu.classList.remove('active');
    closeBtn.style.display = 'none';
    toggle.style.display = 'flex';
});

const menuItems = menu.querySelectorAll('.head1G-item h1');
menuItems.forEach(item => 
{
    item.addEventListener('click', () => 
    {
        if (window.innerWidth <= 768) 
        {
            menu.classList.remove('active');
            closeBtn.style.display = 'none';
            toggle.style.display = 'flex';
        }
    });
});