/* Active sidebar icon */
document.querySelectorAll("[data-nav]").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll("[data-nav]").forEach(i =>
            i.classList.remove("bg-white/10")
        );
        item.classList.add("bg-white/10");
    });
});

/* Tabs switchwing */
document.querySelectorAll("[data-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
        const group = tab.dataset.group;

        document.querySelectorAll(`[data-tab][data-group="${group}"]`).forEach(t => {
            t.classList.remove("border-b-4", "border-blue-500", "font-bold");
            t.classList.add("text-gray-500");
        });

        tab.classList.add("border-b-4", "border-blue-500", "font-bold");
        tab.classList.remove("text-gray-500");

        document.querySelectorAll(`[data-content="${group}"]`).forEach(c => c.classList.add("hidden"));
        const target = tab.dataset.target;
        document.getElementById(target)?.classList.remove("hidden");
    });
});

/* Follow & following toggle */
document.querySelectorAll("[data-follow]").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "Follow") {
            btn.innerText = "Following";
            btn.classList.remove("bg-white", "text-black");
            btn.classList.add("border", "border-gray-500", "text-white");
        } else {
            btn.innerText = "Follow";
            btn.classList.add("bg-white", "text-black");
            btn.classList.remove("border", "border-gray-500", "text-white");
        }
    });
});


/* Send message */
const chatInput = document.querySelector("[data-chat-input]");
const chatSend = document.querySelector("[data-chat-send]");
const chatBox = document.querySelector("[data-chat-box]");

if (chatInput && chatSend && chatBox) {
    chatSend.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", e => {
        if (e.key === "Enter") sendMessage();
    });
}

function sendMessage() {
    if (!chatInput.value.trim()) return;

    const msg = document.createElement("div");
    msg.className = "flex justify-end";
    msg.innerHTML = `<div class="bg-blue-500 text-black px-4 py-2 rounded-2xl max-w-md text-sm">
    ${chatInput.value} </div> `;
    chatBox.appendChild(msg);
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}


/*Mobile sidebar toggle*/
const menuBtn = document.querySelector("[data-menu]");
const sidebar = document.querySelector("[data-sidebar]");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
}

/*Like, retweet and bookmark toggle*/
function parseCount(str) {
    if (!str) return 0;
    str = str.trim();
    if (str.endsWith('K')) return parseFloat(str) * 1000;
    if (str.endsWith('M')) return parseFloat(str) * 1000000;
    return parseInt(str) || 0;
}

function formatCount(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(n);
}

function initInteractions() {
    document.querySelectorAll('[data-post-id]').forEach(post => {
        const id = post.dataset.postId;
        const saved = JSON.parse(localStorage.getItem('post_' + id) || '{}');

        // Like
        const likeBtn = post.querySelector('[data-like]');
        if (likeBtn) {
            const icon = likeBtn.querySelector('.material-symbols-outlined');
            const countEl = likeBtn.querySelector('[data-count]');
            const baseCount = parseCount(countEl?.textContent.trim());
            if (countEl) countEl.textContent = countEl.textContent.trim();

            function applyLike(active) {
                if (active) {
                    icon.textContent = 'favorite';
                    icon.style.color = '#f91880';
                    likeBtn.style.color = '#f91880';
                    if (countEl) countEl.textContent = formatCount(baseCount + 1);
                }
                else {
                    icon.textContent = 'favorite_border';
                    icon.style.color = '';
                    likeBtn.style.color = '';
                    if (countEl) countEl.textContent = formatCount(baseCount);
                }
            }

            applyLike(!!saved.liked);

            likeBtn.addEventListener('click', e => {
                e.stopPropagation();
                const s = JSON.parse(localStorage.getItem('post_' + id) || '{}');
                s.liked = !s.liked;
                localStorage.setItem('post_' + id, JSON.stringify(s));
                applyLike(s.liked);
            });
        }

        // Retweet
        const retweetBtn = post.querySelector('[data-retweet]');
        if (retweetBtn) {
            const icon = retweetBtn.querySelector('.material-symbols-outlined');
            const countEl = retweetBtn.querySelector('[data-count]');
            const baseCount = parseCount(countEl?.textContent.trim());

            function applyRetweet(active) {
                if (active) {
                    icon.style.color = '#00ba7c';
                    retweetBtn.style.color = '#00ba7c';
                    if (countEl) countEl.textContent = formatCount(baseCount + 1);
                } else {
                    icon.style.color = '';
                    retweetBtn.style.color = '';
                    if (countEl) countEl.textContent = formatCount(baseCount);
                }
            }

            applyRetweet(!!saved.retweeted);

            retweetBtn.addEventListener('click', e => {
                e.stopPropagation();
                const s = JSON.parse(localStorage.getItem('post_' + id) || '{}');
                s.retweeted = !s.retweeted;
                localStorage.setItem('post_' + id, JSON.stringify(s));
                applyRetweet(s.retweeted);
            });
        }

        // Bookmark
        const bookmarkBtn = post.querySelector('[data-bookmark]');
        if (bookmarkBtn) {
            const icon = bookmarkBtn.querySelector('.material-symbols-outlined');

            function applyBookmark(active) {
                if (active) {
                    icon.textContent = 'bookmark';
                    icon.style.color = '#1d9bf0';
                    bookmarkBtn.style.color = '#1d9bf0';
                } else {
                    icon.textContent = 'bookmark_border';
                    icon.style.color = '';
                    bookmarkBtn.style.color = '';
                }
            }

            applyBookmark(!!saved.bookmarked);

            bookmarkBtn.addEventListener('click', e => {
                e.stopPropagation();
                const s = JSON.parse(localStorage.getItem('post_' + id) || '{}');
                s.bookmarked = !s.bookmarked;
                localStorage.setItem('post_' + id, JSON.stringify(s));
                applyBookmark(s.bookmarked);
            });
        }
    });
}

initInteractions();