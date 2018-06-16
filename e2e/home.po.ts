import { browser, by, element } from 'protractor';

export class HomePage {
    navigateTo() {
        return browser.get('/home/school-types');
    }
    getElementPostersCount() {
        return element.all(by.css('mm-element-poster')).count();
    }
    clickOnElementPosterByIndex(index: number) {
        return element.all(by.css(`mm-element-poster`)).get(index).click();
    }

    isFlipped() {
        return element(by.css('.element-poster--back')).isPresent();
    }
}
