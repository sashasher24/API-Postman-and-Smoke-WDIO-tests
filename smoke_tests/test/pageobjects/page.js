module.exports = class Page {
    open() {
        let url = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html'

        return browser.url(url)
    }
}