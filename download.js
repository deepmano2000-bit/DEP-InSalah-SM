// Download Management System

const downloadLinks = {
    windows: 'https://github.com/deepmano2000-bit/DEP-InSalah-SM/releases/download/v1.0.0/DEP-Windows.exe',
    mac: 'https://github.com/deepmano2000-bit/DEP-InSalah-SM/releases/download/v1.0.0/DEP-Mac.dmg',
    linux: 'https://github.com/deepmano2000-bit/DEP-InSalah-SM/releases/download/v1.0.0/DEP-Linux.tar.gz',
    web: 'https://deepmano2000-bit.github.io/DEP-InSalah-SM'
};

const downloadHistory = JSON.parse(localStorage.getItem('downloadHistory')) || [];

function downloadFile(platform) {
    const link = document.createElement('a');
    link.href = downloadLinks[platform];
    link.download = `${platform}-download`; // file name handling based on platform

    // Simulate download progress
    simulateDownloadProgress();

    document.body.appendChild(link);
    link.click();
    link.remove();

    // Store download in history
    downloadHistory.push({platform, date: new Date().toISOString()});
    localStorage.setItem('downloadHistory', JSON.stringify(downloadHistory));
}

function simulateDownloadProgress() {
    const progressBar = document.getElementById('progressBar');
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            progressBar.style.width = '100%';
        } else {
            progress += 10; // Increment progress
            progressBar.style.width = `${progress}%`;
        }
    }, 1000);
}

// Example calls:
// downloadFile('windows');
// downloadFile('mac');