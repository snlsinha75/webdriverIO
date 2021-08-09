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
exports.helper = void 0;
class helper {
    waitForPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            browser.waitUntil(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const state = browser.execute(function () {
                        return document.readyState;
                    });
                    //console.log("state:" + state)
                    return (yield state) === 'complete';
                });
            }, {
                timeout: 60000,
                timeoutMsg: 'Oops! Check your internet connection'
            });
        });
    }
}
exports.helper = helper;
