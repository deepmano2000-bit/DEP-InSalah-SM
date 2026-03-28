// download.js

class DownloadManager {
    constructor() {
        this.downloads = [];
        this.history = [];
    }

    startDownload(url) {
        const download = { url, progress: 0, status: 'downloading' };
        this.downloads.push(download);
        this.trackProgress(download);
        return download;
    }

    trackProgress(download) {
        const interval = setInterval(() => {
            if (download.progress < 100) {
                download.progress += Math.random() * 10; // Simulate progress
            } else {
                clearInterval(interval);
                download.status = 'completed';
                this.saveToHistory(download);
            }
        }, 1000);
    }

    saveToHistory(download) {
        this.history.push(download);
    }

    getDownloadHistory() {
        return this.history;
    }

    cancelDownload(download) {
        download.status = 'canceled';
    }
}

// Example Usage:
const manager = new DownloadManager();
const download1 = manager.startDownload('http://example.com/file1.zip');
const download2 = manager.startDownload('http://example.com/file2.zip');

setTimeout(() => {
    console.log(manager.getDownloadHistory());
}, 12000); // Check history after 12 seconds
