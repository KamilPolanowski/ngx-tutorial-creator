import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BarService {
    /**
     * @return {?}
     */
    get value() {
        return of(true).pipe(map(val => `${val}`));
    }
}
BarService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooComponent {
}
FooComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-foo',
                template: '<h1>foo</h1>',
                styles: ["h1{color:#f0f}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TutorialModule {
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