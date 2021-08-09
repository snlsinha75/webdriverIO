export class DiscoverPage {

    get namedField () { 
        return $('//*[@id="targetingSearch.contactNames.includeExclude.autocomplete"]/span/input') 
    }

    async login (inputValue: string) {
        await this.namedField.setValue(inputValue);
    }

    get searchButton () { 
        return $('(//span[contains(text(),"Search")])[6]') 
    }

    get filterButton () { 
        return $('//*[@id="resultsFilters.dropdownButton"]') 
    }

    get filterType () { 
        return $('//*[@id="resultsFilters.filterType_1"]') 
    }

    get firstFilterValue () { 
        return $('//*[@id="undefined.coverageFocus.checkbox-0.checkboxInput"]') 
    }

    get applybutton () { 
        return $('//*[@id="resultsFilters.applyButton"]') 
    }

    get outletProfileRHP () { 
        return $('(//*[@id="targetingRhpTab.outletProfile"])[1]') 
    }

    get actionButton () { 
        return $('//*[contains(text(),"Actions")]') 
    }
    
    get cancelButton () { 
        return $('//*[contains(text(),"Cancel")]') 
    }

    get intercom () { 
        return $('//*[@id="intercom-container"]') 
    }

    get intercomWriteButton () { 
        return $('//*[@id="intercom-container"]/div/div/div[2]/div[2]/div/textarea') 
    }

    get intercomCloseButton () { 
        return $('//*[@id="intercom-container"]/div/div/div[1]/div/div') 
    }

    
    async getTitle (pageTitle: string) {
        // var title = await browser.getTitle()
        // await expect(title).toHaveTextContaining('Test')
        
    }
    
}
