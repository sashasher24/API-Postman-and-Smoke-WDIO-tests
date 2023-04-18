const FailedBankListPage = require('../pageobjects/failedBankList.page')
const Header = require('../pageobjects/header.page')
const Footer = require('../pageobjects/footer.page')

describe('Header base functionality', () => {
    beforeEach(async() => {
        await FailedBankListPage.open()
    })

    it('should display header logo', async() => {
        await Header.assertLogoIsPresent()
    })

    it('header links should be clicksble', async() => {
        await Header.assertHeaderLinksAreClickable()
    })

    it('header logo should redirect to home page', async() => {
        await Header.headerLogoLinkIsRedirectingToHomePage()
    })
})

describe('List of banks page', () => {
    beforeEach(async() => {
        await FailedBankListPage.open()
    })

    it('should have header and footer', async() => {
        await Header.assertHeaderIsDisplayed()
        await Footer.assertFooterIsDisplayed()
    })

    it('should display chosen number of banks', async() => {
        await FailedBankListPage.assertNumberOfBanksDisplayed(12)
        await FailedBankListPage.chooseNumberOfBanks(24)
        await FailedBankListPage.assertNumberOfBanksDisplayed(24)
    })

    it('should have working breadcrumbs', async() => {
        await FailedBankListPage.checkBreadcrumbIsRedirectingCorrectly('Bank failures', '/bank-failures')
    })

    it('should have a working table search', async() => {
        await FailedBankListPage.searchBank('silic', 1)
    })

    it('should have link to bank page', async() => {
        await FailedBankListPage.checkBankPageLink('Almena State Bank', '/almenastate')
    })

    it('should have wotking page navigation', async() => {
        await FailedBankListPage.checkPageNavigation(2)
    })

    it('should have working sorting by name', async() => {
        await FailedBankListPage.checkBankNameSorting()
    })

    it('should have clickable aside links', async() => {
        await FailedBankListPage.assertAsideTestAreClickableLinks()
    })
})