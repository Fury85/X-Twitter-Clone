const rightPanelHTML = `
    <!-- Search -->
    <div class="search-btn w-[280px] xl:w-[320px] mx-auto fixed top-0 bg-black z-40">
        <div class="search-wrapper">
            <span class="material-symbols-outlined text-gray-500">search</span>
            <input class="search-input" placeholder="Search" />
        </div>
    </div>

    <!-- Subscribe to X Premium -->
    <div class="w-[280px] xl:w-[320px] my-4 panel-box">
        <h2 class="panel-title">Subscribe to X Premium</h2>
        <p class="text-white my-3">Subscribe to unlock new features and if eligible, receive a share of revenue</p>
        <button class="btn-subscribe"> Subscribe </button>
    </div>

    <!-- Live on X -->
        <div class="w-[280px] xl:w-[320px] panel-box">
            <h2 class="panel-title">Live on X</h2>
            <div class="p-2 hover-card hover-rounded-2xl">
                <div class="flex items-center gap-1">
                    <svg viewBox="0 0 256 256" class="w-5.5 fill-white">
                        <path d="M128 8c-9 22-22 39-39 56-18 18-27 34-27 55 0 36 29 65 66 65s66-29 66-65c0-21-9-37-27-55-17-17-30-34-39-56z" />
                    </svg>
                    <span class="font-medium text-sm">Al Jazeera English</span>
                    <span class="material-symbols-outlined text-yellow-400 text-[18px]">verified</span>
                    <span class="trend-meta">is hosting</span>
                </div>
                <h3 class="font-bold text-xl ml-2">Live: Al Jazeera English</h3>
            </div>

            <div class="live p-2 hover-card hover-rounded-2xl">
                <div class="flex items-center gap-1">
                    <svg viewBox="0 0 256 256" class="w-5.5 fill-white">
                        <path d="M128 8c-9 22-22 39-39 56-18 18-27 34-27 55 0 36 29 65 66 65s66-29 66-65c0-21-9-37-27-55-17-17-30-34-39-56z" />
                    </svg>
                    <span class="font-medium text-sm">Ten Sports</span>
                    <span class="material-symbols-outlined text-yellow-400 text-[18px]">verified</span>
                    <span class="trend-meta">is hosting</span>
                </div>
                <h3 class="font-bold text-xl ml-2">Live: Ten Sports</h3>
            </div>
        </div>

    <!-- Today's top trends -->
        <div class="today-box w-[280px] xl:w-[320px] my-4 panel-box">
            <h2 class="panel-title">Today's top trends</h2>
            <div class="trend trend-card">
                <div>
                    <p class="trend-meta">Trending in Pakistan<span class="mx-1 text-gray-500 font-bold">·</span>Trending</p>
                    <h3 class="font-bold">#PakistanZindabad</h3>
                    <p class="trend-meta">12.3K Tweets</p>
                </div>
                <div class="dot-icon">
                    <span class="material-symbols-outlined text-gray-600">more_horiz</span>
                </div>
            </div>
            <div class="trend trend-card">
                <div>
                    <p class="trend-meta">Trending in Technology<span class="mx-1 text-gray-500 font-bold">·</span>Trending</p>
                    <h3 class="font-bold">#AIRevolution</h3>
                    <p class="trend-meta">45.6K Tweets</p>
                </div>
                <div class="dot-icon">
                    <span class="material-symbols-outlined text-gray-600">more_horiz</span>
                </div>
            </div>
            <div class="trend trend-card">
                <div>
                    <p class="trend-meta">Trending in Sports<span class="mx-1 text-gray-500 font-bold">·</span>Trending</p>
                    <h3 class="font-bold">#WorldCup2025</h3>
                    <p class="trend-meta">78.9K Tweets</p>
                </div>
                <div class="dot-icon">
                    <span class="material-symbols-outlined text-gray-600">more_horiz</span>
                </div>
            </div>
            <div class="btn-more">
                <button class="btn-show-more">
                    Show more
                </button>
            </div>
        </div>

    <!-- Who to follow -->
        <div class="w-[280px] xl:w-[320px] panel-box">
            <h2 class="panel-title">Who to follow</h2>
            
            <div class="follow-card">
                <div class="avatar-md overflow-hidden">
                    <img src="/assets/images/anees.jpeg" alt="Muhammad Anees" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-bold">Muhammad Anees</h3>
                    <p class="trend-meta">@muhammadanees</p>
                </div>
                <div class="follow-btn">
                    <button data-follow class="btn-follow">
                        Follow
                    </button>
                </div>
            </div>

            <div class="follow-card my-5">
                <div class="img-box avatar-md overflow-hidden">
                    <img src="/assets/images/zargham.jpeg" alt="Zargham Ali" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-bold">Zargham Ali</h3>
                    <p class="trend-meta">@zarghamali</p>
                </div>
                <div class="follow-btn">
                    <button data-follow class="btn-follow">
                        Follow
                    </button>
                </div>
            </div>

            <div class="follow follow-card">
                <div class="img-box avatar-md overflow-hidden">
                    <img src="/assets/images/haider.jpeg" alt="Haider Farooq" class="w-full h-full object-cover">
                </div>
                <div>
                    <h3 class="font-bold">Haider Farooq</h3>
                    <p class="trend-meta">@haiderfarooq</p>
                </div>
                <div class="follow-btn">
                    <button data-follow class="btn-follow">
                        Follow
                    </button>
                </div>
            </div>

            <div class="btn-more my-2">
                <button class="btn-show-more">
                    Show more
                </button>
            </div>
        </div>

    <!-- Footer -->
    <div class="footer w-[280px] xl:w-[320px] text-gray-600 my-4">
        <p class="text-justify text-xs">
            <a href="" class="footer-link">Terms of Service |</a>
            <a href="" class="footer-link">Privacy Policy |</a>
            <a href="" class="footer-link">Cookie Policy |</a>
            <a href="" class="footer-link">Accessibility |</a>
            <a href="" class="footer-link">Ads info |</a>
            <a href="" class="footer-link">More</a>
            <span class="px-2">© 2025 X Corp.</span>
        </p>
    </div>
`;

/*Injection of rightpanel*/
const rightPanelContainer = document.getElementById('rightpanel');
if (rightPanelContainer) {
    rightPanelContainer.innerHTML = rightPanelHTML;
}

/*Follow toggle */
document.addEventListener('click', (e) => {

    const btn = e.target.closest('[data-follow]');
    if (!btn) return;
    e.stopPropagation();

    // first check status 
    const isFollowing = btn.classList.contains('following');
    if (isFollowing) {
        btn.innerHTML = 'Follow';
        btn.classList.remove('following', 'border', 'border-gray-500', 'text-white', 'bg-transparent');
        btn.classList.add('bg-white', 'text-black');
    }
    else {
        btn.innerHTML = 'Following';
        btn.classList.add('following', 'border', 'border-gray-500', 'text-white', 'bg-transparent');
        btn.classList.remove('bg-white', 'text-black');
    }
});