import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BarService = /** @class */ (function () {
    function BarService() {
    }
    Object.defineProperty(BarService.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return of(true).pipe(map(function (val) { return "" + val; }));
        },
        enumerable: true,
        configurable: true
    });
    BarService.decorators = [
        { type: Injectable }
    ];
    return BarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    FooComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-foo',
                    template: '<h1>foo</h1>',
                    styles: ["h1{color:#f0f}"]
                }] }
    ];
    return FooComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FooComponent
                    ],
                    exports: [
                        FooComponent
                    ],
                    providers: [
                        BarService
                    ]
                },] }
    ];
    return TutorialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BarService, FooComponent, TutorialModule };

//# sourceMappingURL=ngx-tutorial-creator.js.map