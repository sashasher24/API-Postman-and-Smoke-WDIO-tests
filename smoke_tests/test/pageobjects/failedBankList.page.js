const Page = require('./page')

class FailedBankListPage extends Page {
    get numberOfBanksSelect() {
        return $('#DataTables_Table_0_length')
    }

    get allTableRows() {
        return $$('.dataTables-content-main > tr')
    }

    get breadcrumbs() {
        return $$('#usa-breadcrumbs li')
    }

    get searchInput() {
        return $('.usa-input-search')
    }

    async chooseNumberOfBanks(number) {
        await this.numberOfBanksSelect.click()
        await $(`#DataTables_Table_0_length option[value='${number}']`).click()
    }

    async assertNumberOfBanksDisplayed(number) {
        await expect(await this.allTableRows.length).toEqual(number)
    }

    async checkBreadcrumIsRedirectionCorrectly(text, path) {
        await $(`#usa-breadcrumbs a[aria-label='${text}']`).click()
        await expect(browser).toHaveUrlContaining(path)
    }

    async searchBank(name, numberOfResults) {
        await this.searchInput.setValue(name)
        await this.assertNumberOfBanksDisplayed(numberOfResults)
        await expect(this.allTableRows[0]).toHaveText(new RegExp(name, 'i'))
    }
}

module.exports = new FailedBankListPage()