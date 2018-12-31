/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
export { BarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdHV0b3JpYWwtY3JlYXRvci8iLCJzb3VyY2VzIjpbImJhci9iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQztJQUFBO0lBT0EsQ0FBQztJQUpDLHNCQUFJLDZCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBRyxHQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTs7Z0JBTEYsVUFBVTs7SUFPWCxpQkFBQztDQUFBLEFBUEQsSUFPQztTQU5ZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhclNlcnZpY2Uge1xyXG5cclxuICBnZXQgdmFsdWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiBvZih0cnVlKS5waXBlKG1hcCh2YWwgPT4gYCR7dmFsfWApKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==