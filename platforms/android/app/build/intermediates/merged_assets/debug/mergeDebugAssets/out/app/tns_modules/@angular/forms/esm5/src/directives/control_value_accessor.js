/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 * @publicApi
 */
export var NG_VALUE_ACCESSOR = new InjectionToken('NgValueAccessor');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF92YWx1ZV9hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQTZIN0M7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQXVCLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogRGVmaW5lcyBhbiBpbnRlcmZhY2UgdGhhdCBhY3RzIGFzIGEgYnJpZGdlIGJldHdlZW4gdGhlIEFuZ3VsYXIgZm9ybXMgQVBJIGFuZCBhXG4gKiBuYXRpdmUgZWxlbWVudCBpbiB0aGUgRE9NLlxuICpcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBjcmVhdGUgYSBjdXN0b20gZm9ybSBjb250cm9sIGRpcmVjdGl2ZVxuICogdGhhdCBpbnRlZ3JhdGVzIHdpdGggQW5ndWxhciBmb3Jtcy5cbiAqXG4gKiBAc2VlIERlZmF1bHRWYWx1ZUFjY2Vzc29yXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBXcml0ZXMgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgZm9ybXMgQVBJIHRvIHdyaXRlIHRvIHRoZSB2aWV3IHdoZW4gcHJvZ3JhbW1hdGljXG4gICAqIGNoYW5nZXMgZnJvbSBtb2RlbCB0byB2aWV3IGFyZSByZXF1ZXN0ZWQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBXcml0ZSBhIHZhbHVlIHRvIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSB3cml0ZXMgYSB2YWx1ZSB0byB0aGUgbmF0aXZlIERPTSBlbGVtZW50LlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICogICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG9iaiBUaGUgbmV3IHZhbHVlIGZvciB0aGUgZWxlbWVudFxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sJ3MgdmFsdWVcbiAgICogY2hhbmdlcyBpbiB0aGUgVUkuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgZm9ybXMgQVBJIG9uIGluaXRpYWxpemF0aW9uIHRvIHVwZGF0ZSB0aGUgZm9ybVxuICAgKiBtb2RlbCB3aGVuIHZhbHVlcyBwcm9wYWdhdGUgZnJvbSB0aGUgdmlldyB0byB0aGUgbW9kZWwuXG4gICAqXG4gICAqIFdoZW4gaW1wbGVtZW50aW5nIHRoZSBgcmVnaXN0ZXJPbkNoYW5nZWAgbWV0aG9kIGluIHlvdXIgb3duIHZhbHVlIGFjY2Vzc29yLFxuICAgKiBzYXZlIHRoZSBnaXZlbiBmdW5jdGlvbiBzbyB5b3VyIGNsYXNzIGNhbGxzIGl0IGF0IHRoZSBhcHByb3ByaWF0ZSB0aW1lLlxuICAgKlxuICAgKiBAdXNhZ2VOb3Rlc1xuICAgKiAjIyMgU3RvcmUgdGhlIGNoYW5nZSBmdW5jdGlvblxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc3RvcmVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBhcyBhbiBpbnRlcm5hbCBtZXRob2QuXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICogICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBXaGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIGluIHRoZSBVSSwgY2FsbCB0aGUgcmVnaXN0ZXJlZFxuICAgKiBmdW5jdGlvbiB0byBhbGxvdyB0aGUgZm9ybXMgQVBJIHRvIHVwZGF0ZSBpdHNlbGY6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGhvc3Q6IHtcbiAgICogICAgKGNoYW5nZSk6ICdfb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQgYnkgdGhlIGZvcm1zIEFQSSBvbiBpbml0aWFsaXphdGlvblxuICAgKiB0byB1cGRhdGUgdGhlIGZvcm0gbW9kZWwgb24gYmx1ci5cbiAgICpcbiAgICogV2hlbiBpbXBsZW1lbnRpbmcgYHJlZ2lzdGVyT25Ub3VjaGVkYCBpbiB5b3VyIG93biB2YWx1ZSBhY2Nlc3Nvciwgc2F2ZSB0aGUgZ2l2ZW5cbiAgICogZnVuY3Rpb24gc28geW91ciBjbGFzcyBjYWxscyBpdCB3aGVuIHRoZSBjb250cm9sIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAqIGJsdXJyZWQgb3IgXCJ0b3VjaGVkXCIuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqICMjIyBTdG9yZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHN0b3JlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYXMgYW4gaW50ZXJuYWwgbWV0aG9kLlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAqICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIE9uIGJsdXIgKG9yIGVxdWl2YWxlbnQpLCB5b3VyIGNsYXNzIHNob3VsZCBjYWxsIHRoZSByZWdpc3RlcmVkIGZ1bmN0aW9uIHRvIGFsbG93XG4gICAqIHRoZSBmb3JtcyBBUEkgdG8gdXBkYXRlIGl0c2VsZjpcbiAgICpcbiAgICogYGBgdHNcbiAgICogaG9zdDoge1xuICAgKiAgICAnKGJsdXIpJzogJ19vblRvdWNoZWQoKSdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGZuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBieSB0aGUgZm9ybXMgQVBJIHdoZW4gdGhlIGNvbnRyb2wgc3RhdHVzIGNoYW5nZXMgdG9cbiAgICogb3IgZnJvbSAnRElTQUJMRUQnLiBEZXBlbmRpbmcgb24gdGhlIHN0YXR1cywgaXQgZW5hYmxlcyBvciBkaXNhYmxlcyB0aGVcbiAgICogYXBwcm9wcmlhdGUgRE9NIGVsZW1lbnQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqIFRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiB3cml0aW5nIHRoZSBkaXNhYmxlZCBwcm9wZXJ0eSB0byBhIG5hdGl2ZSBET00gZWxlbWVudDpcbiAgICpcbiAgICogYGBgdHNcbiAgICogc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAqICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgVGhlIGRpc2FibGVkIHN0YXR1cyB0byBzZXQgb24gdGhlIGVsZW1lbnRcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG4vKipcbiAqIFVzZWQgdG8gcHJvdmlkZSBhIGBDb250cm9sVmFsdWVBY2Nlc3NvcmAgZm9yIGZvcm0gY29udHJvbHMuXG4gKlxuICogU2VlIGBEZWZhdWx0VmFsdWVBY2Nlc3NvcmAgZm9yIGhvdyB0byBpbXBsZW1lbnQgb25lLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IE5HX1ZBTFVFX0FDQ0VTU09SID0gbmV3IEluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPignTmdWYWx1ZUFjY2Vzc29yJyk7XG4iXX0=