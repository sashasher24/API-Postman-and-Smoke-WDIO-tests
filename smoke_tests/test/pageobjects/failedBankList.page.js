const Page = require('./page')

class FailedBankListPage extends Page {
    get numberOfBanksSelect() {
        return $('#DataTables_Table_0_length')
    }

    get allTableRows() {
        return $$('.dataTables-content-main tr')
    }

    get breadcrumbs() {
        return $$('#usa-breadcrumbs li')
    }

    get searchInput() {
        return $('.usa-input-search')
    }

    get allBankNames() {
        return $$('.dataTables-content-main a')
    }

    get asideLinks() {
        return $$('aside a')
    }

    async chooseNumberOfBanks(number) {
        await this.numberOfBanksSelect.click()
        await $(`#DataTables_Table_0_length option[value='${number}']`).click()
    }

    async assertNumberOfBanksDisplayed(number) {
        await expect(await this.allTableRows.length).toEqual(number)
    }

    async checkBreadcrumbIsRedirectingCorrectly(text, path) {
        await $(`#usa-breadcrumbs a[aria-label='${text}']`).click()
        await expect(browser).toHaveUrlContaining(path)
    }

    async searchBank(name, numberOfResults) {
        await this.searchInput.setValue(name)
        await this.assertNumberOfBanksDisplayed(numberOfResults)
        await expect(this.allTableRows[0]).toHaveText(new RegExp(name, 'i'))
    }

    async checkBankPageLink(name, path) {
        await (await $(`//tbody[@class='dataTables-content-main']//a[text()='${name}']`)).click()
        await expect(browser).toHaveUrlContaining(path)
    }

    async checkPageNavigation(pageNumber) {
        let pageToOpen = await $(`.dataTables_paginate a[data-dt-idx='${pageNumber}']`)

        await pageToOpen.click()
        await expect(pageToOpen).toHaveAttributeContaining('class', 'current')
    }

    async checkBankNameSorting() {
        let names = [];

        await $$('.dataTables-content-header th')[0].click();
        for (let i = 0; i < await this.allBankNames.length; i++) {
            (await this.allBankNames[i]).getText().then(text =>
                names.push(text)
            )
        }

        expect(JSON.stringify(names) === JSON.stringify(names.sort((a, b) => (a > b ? 1 : -1)))).toBeTruthy()
    }

    async assertAsideTestAreClickableLinks() {
        (await this.asideLinks).forEach(async link => {
            await expect(link.toBeClickable())
            await expect(link.toHaveAttribute('href'))
        })
    }
}

module.exports = new FailedBankListPage()