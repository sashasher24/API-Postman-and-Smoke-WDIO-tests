const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Header extends Page {
    get header() {
        return $('.usa-header')
    }

    get headerMainIcon() {
        return $('#basic-mega-logo')
    }

    get headerLinks() {
        return $$('.usa-nav__link')
    }

    async assertHeaderIsDisplayed() {
        await expect(this.header).toBeDisplayed()
    }

    async assertLogoIsPresent() {
        await expect(this.headerMainIcon).toBeDisplayed()
    }

    async headerLogoLinkIsRedirectingToHomePage() {
        await (await this.headerMainIcon).click()
        await expect(browser).toHaveUrl('https://www.fdic.gov/')
    }

    async assertHeaderLinksAreClickable() {
        (await this.headerLinks).forEach(async link => {
            await expect(link.toBeClickable())
        })
    }
}

module.exports = new Header()