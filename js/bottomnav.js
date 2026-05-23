const isBottomNavPagesFolder = window.location.pathname.includes('/pages/');

const homeBottomLink = isBottomNavPagesFolder
    ? '../index.html'
    : './index.html';

const exploreBottomLink = isBottomNavPagesFolder
    ? './explore.html'
    : './pages/explore.html';

const notificationsBottomLink = isBottomNavPagesFolder
    ? './notifications.html'
    : './pages/notifications.html';

const followBottomLink = isBottomNavPagesFolder
    ? './follow.html'
    : './pages/follow.html';

const chatBottomLink = isBottomNavPagesFolder
    ? './chat.html'
    : './pages/chat.html';

const profileBottomLink = isBottomNavPagesFolder
    ? './profile.html'
    : './pages/profile.html';

const bottomNavHTML = `
<nav id="bottomNav" class="bottom-nav">

    <a href="${homeBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">home</span>
    </a>

    <a href="${exploreBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">search</span>
    </a>

    <a href="${notificationsBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">notifications</span>
    </a>

    <a href="${chatBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">mail</span>
    </a>

    <a href="${followBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">person_add</span>
    </a>

    <a href="${profileBottomLink}" data-bottom-nav class="bottom-nav-item">
        <span class="material-symbols-outlined bottom-nav-icon">person</span>
    </a>

</nav>
`;

/* inject navbar */
const bottomNavContainer = document.getElementById('bottomnav');
if (bottomNavContainer) {
    bottomNavContainer.innerHTML = bottomNavHTML;
}

/* actual navbar */
const bottomNav = document.getElementById('bottomNav');

/* only show on mobile */
function handleBottomNavVisibility() {
    if (!bottomNav) return;
    if (window.innerWidth < 499) {
        bottomNav.style.display = 'flex';
        document.body.style.paddingBottom = '70px';
    }
    else {
        bottomNav.style.display = 'none';
        document.body.style.paddingBottom = '0';
    }
}

handleBottomNavVisibility();
window.addEventListener('resize', handleBottomNavVisibility);

/* active page highlight */
const bottomCurrentPage =
    window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-bottom-nav]').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === bottomCurrentPage) {
        const icon =
            link.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.style.fontVariationSettings = "'FILL' 1";
        }
        link.style.color = 'white';
    }

    else {
        link.style.color = '#6b7280';
    }
});