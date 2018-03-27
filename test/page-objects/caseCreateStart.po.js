BrowserUtils = require('../utils/browser.utils.js')

class CaseCreateStart {

    constructor() {

       this.browserUtils = new BrowserUtils

       this._jurisdiction = by.css('#cc-jurisdiction');
       this._jurisdictionCss = '#cc-jurisdiction'
       this._jurisdictionOptions = by.css('#cc-jurisdiction option')

       this._caseType = by.css('#cc-case-type');
       this._caseTypeCss = '#cc-case-type'
       this._caseTypeOptions = by.css('#cc-case-type option')

       this._event = by.css('#cc-event');
       this._evenCss = '#cc-event'
       this._evenOptions = by.css('##cc-event option')

       this._pageTitle = by.css('.container-fluid h1')

       this._submitButton = by.css('.container-fluid .button')
    }

    isLoaded() {

        browser.waitForAngular
        this.browserUtils.waitForPageElemToLoad(element(this._pageTitle))

    }

    getPageTitleLabel() {

        return element(this._pageTitle).getText()
    }

    getSelectedOption(dropDownCss) {

    }

    jurisdictionDropDownIsClickable() {
        return element(this._jurisdiction).isDisplayed()
    }

    getJurisdictionSelectedOptionText() {

    }

    caseTypeDropDownIsClickable() {
        return element(this._caseType).isDisplayed()
    }

    getCaseTypeSelectedOptionText() {

    }

    eventDropDownIsClickable() {
        return element(this._event).isDisplayed()
    }

    getCaseEventSelectedOptionText() {

    }

    selectJurisdictionOptionByText(optionText) {

    }

    selectCaseTypeOptionByText(optionText) {

    }

    selectEventOptionByText(optionText) {

    }

    submitButtonIsClickable() {

        return element(this._submitButton).isDisplayed()

    }

    clickSubmitButton() {

         browser.waitForAngular
         element(this._submitButton).click()
         browser.waitForAngular

    }

}

module.exports = CaseCreateStart

