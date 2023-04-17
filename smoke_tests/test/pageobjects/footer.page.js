const Page = require('./page')

class Footer extends Page {
    get footer() {
        return $('.usa-footer')
    }

    async assertFooterIsDisplayed() {
        await expect(this.footer).toBeDisplayed()
    }
}

module.exports = new Footer()