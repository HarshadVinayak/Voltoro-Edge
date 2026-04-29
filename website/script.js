document.addEventListener('DOMContentLoaded', () => {
    const downloadContainer = document.getElementById('dynamic-download-container');
    const userAgent = navigator.userAgent.toLowerCase();
    
    let osInfo = {
        name: 'Mac',
        icon: '',
        ext: '.dmg',
        file: 'downloads/voltoro-edge.dmg'
    };

    if (userAgent.indexOf('win') !== -1) {
        osInfo = {
            name: 'Windows',
            icon: '🪟',
            ext: '.exe',
            file: '#'
        };
    }

    const downloadHtml = `
        <a href="${osInfo.file}" class="btn btn-primary btn-hero" id="main-download-btn">
            <span class="btn-icon">${osInfo.icon}</span>
            <div class="btn-text">
                <span class="btn-label">Download Voltoro Edge</span>
                <span class="btn-subtext">Version 1.0 for ${osInfo.name} (${osInfo.ext})</span>
            </div>
        </a>
    `;

    if (downloadContainer) {
        downloadContainer.innerHTML = downloadHtml;
        if (osInfo.name === 'Windows' && osInfo.file === '#') {
            document.getElementById('main-download-btn').addEventListener('click', (e) => {
                e.preventDefault();
                alert('Windows installer is coming soon! For now, you can build it from source on a Windows machine.');
            });
        }
    }

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-up').forEach(el => revealObserver.observe(el));

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 7, 18, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 20, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
