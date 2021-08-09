"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoverPage = void 0;
class DiscoverPage {
    get namedField() {
        return $('//*[@id="targetingSearch.contactNames.includeExclude.autocomplete"]/span/input');
    }
    login(inputValue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.namedField.setValue(inputValue);
        });
    }
    get searchButton() {
        return $('(//span[contains(text(),"Search")])[6]');
    }
    get filterButton() {
        return $('//*[@id="resultsFilters.dropdownButton"]');
    }
    get filterType() {
        return $('//*[@id="resultsFilters.filterType_1"]');
    }
    get firstFilterValue() {
        return $('//*[@id="undefined.coverageFocus.checkbox-0.checkboxInput"]');
    }
    get applybutton() {
        return $('//*[@id="resultsFilters.applyButton"]');
    }
    get outletProfileRHP() {
        return $('(//*[@id="targetingRhpTab.outletProfile"])[1]');
    }
    get actionButton() {
        return $('//*[contains(text(),"Actions")]');
    }
    get cancelButton() {
        return $('//*[contains(text(),"Cancel")]');
    }
    get intercom() {
        return $('//*[@id="intercom-container"]');
    }
    get intercomWriteButton() {
        return $('//*[@id="intercom-container"]/div/div/div[2]/div[2]/div/textarea');
    }
    get intercomCloseButton() {
        return $('//*[@id="intercom-container"]/div/div/div[1]/div/div');
    }
    getTitle(pageTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            // var title = await browser.getTitle()
            // await expect(title).toHaveTextContaining('Test')
        });
    }
}
exports.DiscoverPage = DiscoverPage;
