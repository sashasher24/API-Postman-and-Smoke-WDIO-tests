/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open() {
        let url = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/index.html'

        return browser.url(url)
    }
}