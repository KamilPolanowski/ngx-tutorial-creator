(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-tutorial-creator', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-tutorial-creator'] = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common));
}(this, (function (exports,rxjs,operators,core,common) { 'use strict';

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
             */ function () {
                return rxjs.of(true).pipe(operators.map(function (val) { return "" + val; }));
            },
            enumerable: true,
            configurable: true
        });
        BarService.decorators = [
            { type: core.Injectable }
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.BarService = BarService;
    exports.FooComponent = FooComponent;
    exports.TutorialModule = TutorialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-tutorial-creator.umd.js.map