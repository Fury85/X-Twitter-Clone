function openMorePopup() {
  document.getElementById('morePopup').style.display = 'block';
  document.getElementById('moreOverlay').style.display = 'block';
}
function closeMorePopup() {
  document.getElementById('morePopup').style.display = 'none';
  document.getElementById('moreOverlay').style.display = 'none';
}

const isPagesFolder = window.location.pathname.includes('/pages/');

const homeLink = isPagesFolder ? '../index.html' : './index.html';

const exploreLink = isPagesFolder
  ? './explore.html'
  : './pages/explore.html';

const notificationsLink = isPagesFolder
  ? './notifications.html'
  : './pages/notifications.html';

const followLink = isPagesFolder
  ? './follow.html'
  : './pages/follow.html';

const chatLink = isPagesFolder
  ? './chat.html'
  : './pages/chat.html';

const profileLink = isPagesFolder
  ? './profile.html'
  : './pages/profile.html';

const profileImage = isPagesFolder
  ? '../assets/images/farhan.jpeg'
  : './assets/images/farhan.jpeg';

const sidebarHTML = `
  <!-- X Logo -->
  <div class="logo invert sidebar-item flex-center lg:justify-start w-full my-3 hover:cursor-pointer">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="w-7.5">
      <g>
        <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
      </g>
    </svg>
  </div>

  <!-- Nav Links -->
<div class="flex flex-col items-center lg:items-start my-2 w-full">
    <ul class="flex flex-col items-center lg:items-stretch text-xl space-y-2.75 w-full">
      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${homeLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">home</span>
          <span class="hidden lg:inline">Home</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${exploreLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">search</span>
          <span class="hidden lg:inline">Explore</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${notificationsLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">notifications</span>
          <span class="hidden lg:inline">Notifications</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${followLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">person_add</span>
          <span class="hidden lg:inline">Follow</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${chatLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">mail</span>
          <span class="hidden lg:inline">Chat</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="#" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">auto_awesome</span>
          <span class="hidden lg:inline">Grok</span>
        </a>
      </li>

      <li data-nav class="sidebar-item w-fit lg:w-full">
        <a href="${profileLink}" class="flex-center lg:justify-start gap-5 w-full">
          <span class="material-symbols-outlined sidebar-icon">person</span>
          <span class="hidden lg:inline">Profile</span>
        </a>
      </li>

      <li data-nav data-more class="sidebar-item w-fit lg:w-full flex-center lg:justify-start gap-5">
        <span class="material-symbols-outlined sidebar-icon">pending</span>
        <span class="hidden lg:inline">More</span>
      </li>

    </ul>

    <!-- Post Button -->
      <button class="sidebar-post-btn">
        Post
      </button>
      <button class="md:flex lg:hidden w-12 h-12 items-center justify-center bg-white text-black rounded-full hover:bg-gray-100 cursor-pointer my-3">
        <span class="material-symbols-outlined">edit</span>
      </button>
  </div>

  <!-- Profile Section -->
  <div class=" w-full flex-center lg:justify-between gap-3 mt-auto py-4 hover-card hover-rounded">
    <div class="avatar">
      <img src="${profileImage}" alt="Profile">
    </div>
    <div class="profile-info hidden lg:block">
      <h2 class="font-bold">Muhammad Farhan</h2>
      <p class="post-meta text-xs">@MuhammadFarhan</p>
    </div>
    <div class="three-icon hidden lg:block">
      <span class="material-symbols-outlined">more_horiz</span>
    </div>
  </div>
`;

/*Injection of sidebar*/
const sidebarContainer = document.getElementById('sidebar');
if (sidebarContainer) {
  sidebarContainer.innerHTML = sidebarHTML;

  // Hook More button
  const moreBtn = sidebarContainer.querySelector('[data-more]');
  if (moreBtn) moreBtn.addEventListener('click', () => openMorePopup());
}

/* More popup*/
if (!document.getElementById('morePopup')) {
  const popupHTML = `
  <div id="moreOverlay" style="display:none;position:fixed;inset:0;z-index:9998;"></div>
  <div id="morePopup" style="display:none;position:fixed;bottom:72px;left:8px;z-index:9999;background:#16181c;border:1px solid #2f3336;border-radius:16px;min-width:250px;box-shadow:0 8px 32px rgba(0,0,0,0.7);">
    <div style="padding:8px 0;">
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">verified</span><span style="font-weight:500;">Premium</span>
      </a>
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">bookmark</span><span style="font-weight:500;">Bookmarks</span>
      </a>
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">list_alt</span><span style="font-weight:500;">Lists</span>
      </a>
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">group</span><span style="font-weight:500;">Communities</span>
      </a>
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">monetization_on</span><span style="font-weight:500;">Monetization</span>
      </a>
      <div style="border-top:1px solid #2f3336;margin:4px 0;"></div>
      <a href="#" style="display:flex;align-items:center;gap:16px;padding:12px 16px;cursor:pointer;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background=''">
        <span class="material-symbols-outlined" style="font-size:22px;">settings</span><span style="font-weight:500;">Settings &amp; Support</span>
      </a>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', popupHTML);
}

document.getElementById('moreOverlay').addEventListener('click', closeMorePopup);

/*Auto highlight on active page*/

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('#sidebar [data-nav] a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.closest('[data-nav]').classList.add('font-bold');
    const icon = link.querySelector('.material-symbols-outlined');
    if (icon) icon.style.fontVariationSettings = "'FILL' 1";
  }
});