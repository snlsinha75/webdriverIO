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
exports.discoverCommons = void 0;
//const allowedInputTypes = ["Checkbox","Dropdown","Text"]
class discoverCommons {
    contactSearch(browser, Element, InputValue, Type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Type == "Text") {
                yield Element.setValue(InputValue);
                yield browser.pause(3000);
                yield browser.keys('Enter');
            }
            else if (Type == "Dropdown") {
                yield Element.setValue(InputValue);
                yield browser.pause(3000);
                yield browser.keys('Down arrow');
                yield browser.keys('Enter');
            }
            else {
                yield Element.click();
            }
        });
    }
}
exports.discoverCommons = discoverCommons;
