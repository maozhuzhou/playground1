/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/r3_identifiers", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CORE = '@angular/core';
    var Identifiers = /** @class */ (function () {
        function Identifiers() {
        }
        /* Methods */
        Identifiers.NEW_METHOD = 'factory';
        Identifiers.TRANSFORM_METHOD = 'transform';
        Identifiers.PATCH_DEPS = 'patchedDeps';
        /* Instructions */
        Identifiers.namespaceHTML = { name: 'ɵnamespaceHTML', moduleName: CORE };
        Identifiers.namespaceMathML = { name: 'ɵnamespaceMathML', moduleName: CORE };
        Identifiers.namespaceSVG = { name: 'ɵnamespaceSVG', moduleName: CORE };
        Identifiers.element = { name: 'ɵelement', moduleName: CORE };
        Identifiers.elementStart = { name: 'ɵelementStart', moduleName: CORE };
        Identifiers.elementEnd = { name: 'ɵelementEnd', moduleName: CORE };
        Identifiers.elementProperty = { name: 'ɵelementProperty', moduleName: CORE };
        Identifiers.elementAttribute = { name: 'ɵelementAttribute', moduleName: CORE };
        Identifiers.elementClassProp = { name: 'ɵelementClassProp', moduleName: CORE };
        Identifiers.elementContainerStart = { name: 'ɵelementContainerStart', moduleName: CORE };
        Identifiers.elementContainerEnd = { name: 'ɵelementContainerEnd', moduleName: CORE };
        Identifiers.elementStyling = { name: 'ɵelementStyling', moduleName: CORE };
        Identifiers.elementStylingMap = { name: 'ɵelementStylingMap', moduleName: CORE };
        Identifiers.elementStyleProp = { name: 'ɵelementStyleProp', moduleName: CORE };
        Identifiers.elementStylingApply = { name: 'ɵelementStylingApply', moduleName: CORE };
        Identifiers.containerCreate = { name: 'ɵcontainer', moduleName: CORE };
        Identifiers.nextContext = { name: 'ɵnextContext', moduleName: CORE };
        Identifiers.templateCreate = { name: 'ɵtemplate', moduleName: CORE };
        Identifiers.text = { name: 'ɵtext', moduleName: CORE };
        Identifiers.textBinding = { name: 'ɵtextBinding', moduleName: CORE };
        Identifiers.bind = { name: 'ɵbind', moduleName: CORE };
        Identifiers.enableBindings = { name: 'ɵenableBindings', moduleName: CORE };
        Identifiers.disableBindings = { name: 'ɵdisableBindings', moduleName: CORE };
        Identifiers.getCurrentView = { name: 'ɵgetCurrentView', moduleName: CORE };
        Identifiers.restoreView = { name: 'ɵrestoreView', moduleName: CORE };
        Identifiers.interpolation1 = { name: 'ɵinterpolation1', moduleName: CORE };
        Identifiers.interpolation2 = { name: 'ɵinterpolation2', moduleName: CORE };
        Identifiers.interpolation3 = { name: 'ɵinterpolation3', moduleName: CORE };
        Identifiers.interpolation4 = { name: 'ɵinterpolation4', moduleName: CORE };
        Identifiers.interpolation5 = { name: 'ɵinterpolation5', moduleName: CORE };
        Identifiers.interpolation6 = { name: 'ɵinterpolation6', moduleName: CORE };
        Identifiers.interpolation7 = { name: 'ɵinterpolation7', moduleName: CORE };
        Identifiers.interpolation8 = { name: 'ɵinterpolation8', moduleName: CORE };
        Identifiers.interpolationV = { name: 'ɵinterpolationV', moduleName: CORE };
        Identifiers.pureFunction0 = { name: 'ɵpureFunction0', moduleName: CORE };
        Identifiers.pureFunction1 = { name: 'ɵpureFunction1', moduleName: CORE };
        Identifiers.pureFunction2 = { name: 'ɵpureFunction2', moduleName: CORE };
        Identifiers.pureFunction3 = { name: 'ɵpureFunction3', moduleName: CORE };
        Identifiers.pureFunction4 = { name: 'ɵpureFunction4', moduleName: CORE };
        Identifiers.pureFunction5 = { name: 'ɵpureFunction5', moduleName: CORE };
        Identifiers.pureFunction6 = { name: 'ɵpureFunction6', moduleName: CORE };
        Identifiers.pureFunction7 = { name: 'ɵpureFunction7', moduleName: CORE };
        Identifiers.pureFunction8 = { name: 'ɵpureFunction8', moduleName: CORE };
        Identifiers.pureFunctionV = { name: 'ɵpureFunctionV', moduleName: CORE };
        Identifiers.pipeBind1 = { name: 'ɵpipeBind1', moduleName: CORE };
        Identifiers.pipeBind2 = { name: 'ɵpipeBind2', moduleName: CORE };
        Identifiers.pipeBind3 = { name: 'ɵpipeBind3', moduleName: CORE };
        Identifiers.pipeBind4 = { name: 'ɵpipeBind4', moduleName: CORE };
        Identifiers.pipeBindV = { name: 'ɵpipeBindV', moduleName: CORE };
        Identifiers.i18n = { name: 'ɵi18n', moduleName: CORE };
        Identifiers.i18nAttributes = { name: 'ɵi18nAttributes', moduleName: CORE };
        Identifiers.i18nExp = { name: 'ɵi18nExp', moduleName: CORE };
        Identifiers.i18nStart = { name: 'ɵi18nStart', moduleName: CORE };
        Identifiers.i18nEnd = { name: 'ɵi18nEnd', moduleName: CORE };
        Identifiers.i18nApply = { name: 'ɵi18nApply', moduleName: CORE };
        Identifiers.i18nPostprocess = { name: 'ɵi18nPostprocess', moduleName: CORE };
        Identifiers.load = { name: 'ɵload', moduleName: CORE };
        Identifiers.loadQueryList = { name: 'ɵloadQueryList', moduleName: CORE };
        Identifiers.pipe = { name: 'ɵpipe', moduleName: CORE };
        Identifiers.projection = { name: 'ɵprojection', moduleName: CORE };
        Identifiers.projectionDef = { name: 'ɵprojectionDef', moduleName: CORE };
        Identifiers.reference = { name: 'ɵreference', moduleName: CORE };
        Identifiers.inject = { name: 'inject', moduleName: CORE };
        Identifiers.injectAttribute = { name: 'ɵinjectAttribute', moduleName: CORE };
        Identifiers.directiveInject = { name: 'ɵdirectiveInject', moduleName: CORE };
        Identifiers.templateRefExtractor = { name: 'ɵtemplateRefExtractor', moduleName: CORE };
        Identifiers.defineBase = { name: 'ɵdefineBase', moduleName: CORE };
        Identifiers.BaseDef = {
            name: 'ɵBaseDef',
            moduleName: CORE,
        };
        Identifiers.defineComponent = { name: 'ɵdefineComponent', moduleName: CORE };
        Identifiers.ComponentDefWithMeta = {
            name: 'ɵComponentDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.defineDirective = {
            name: 'ɵdefineDirective',
            moduleName: CORE,
        };
        Identifiers.DirectiveDefWithMeta = {
            name: 'ɵDirectiveDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.InjectorDef = {
            name: 'ɵInjectorDef',
            moduleName: CORE,
        };
        Identifiers.defineInjector = {
            name: 'defineInjector',
            moduleName: CORE,
        };
        Identifiers.NgModuleDefWithMeta = {
            name: 'ɵNgModuleDefWithMeta',
            moduleName: CORE,
        };
        Identifiers.defineNgModule = { name: 'ɵdefineNgModule', moduleName: CORE };
        Identifiers.PipeDefWithMeta = { name: 'ɵPipeDefWithMeta', moduleName: CORE };
        Identifiers.definePipe = { name: 'ɵdefinePipe', moduleName: CORE };
        Identifiers.query = { name: 'ɵquery', moduleName: CORE };
        Identifiers.queryRefresh = { name: 'ɵqueryRefresh', moduleName: CORE };
        Identifiers.registerContentQuery = { name: 'ɵregisterContentQuery', moduleName: CORE };
        Identifiers.NgOnChangesFeature = { name: 'ɵNgOnChangesFeature', moduleName: CORE };
        Identifiers.InheritDefinitionFeature = { name: 'ɵInheritDefinitionFeature', moduleName: CORE };
        Identifiers.ProvidersFeature = { name: 'ɵProvidersFeature', moduleName: CORE };
        Identifiers.listener = { name: 'ɵlistener', moduleName: CORE };
        Identifiers.getFactoryOf = {
            name: 'ɵgetFactoryOf',
            moduleName: CORE,
        };
        Identifiers.getInheritedFactory = {
            name: 'ɵgetInheritedFactory',
            moduleName: CORE,
        };
        // sanitization-related functions
        Identifiers.sanitizeHtml = { name: 'ɵsanitizeHtml', moduleName: CORE };
        Identifiers.sanitizeStyle = { name: 'ɵsanitizeStyle', moduleName: CORE };
        Identifiers.defaultStyleSanitizer = { name: 'ɵdefaultStyleSanitizer', moduleName: CORE };
        Identifiers.sanitizeResourceUrl = { name: 'ɵsanitizeResourceUrl', moduleName: CORE };
        Identifiers.sanitizeScript = { name: 'ɵsanitizeScript', moduleName: CORE };
        Identifiers.sanitizeUrl = { name: 'ɵsanitizeUrl', moduleName: CORE };
        return Identifiers;
    }());
    exports.Identifiers = Identifiers;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy9yM19pZGVudGlmaWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUlILElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUU3QjtRQUFBO1FBZ01BLENBQUM7UUEvTEMsYUFBYTtRQUNOLHNCQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLDRCQUFnQixHQUFHLFdBQVcsQ0FBQztRQUMvQixzQkFBVSxHQUFHLGFBQWEsQ0FBQztRQUVsQyxrQkFBa0I7UUFDWCx5QkFBYSxHQUF3QixFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFaEYsMkJBQWUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRXBGLHdCQUFZLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFOUUsbUJBQU8sR0FBd0IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUVwRSx3QkFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRTlFLHNCQUFVLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFMUUsMkJBQWUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBRXBGLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFFdEYsNEJBQWdCLEdBQXdC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QixDQUFDO1FBRUssK0JBQW1CLEdBQXdCO1lBQ2hELElBQUksRUFBRSxzQkFBc0I7WUFDNUIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUVGLGlDQUFpQztRQUMxQix3QkFBWSxHQUF3QixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzlFLHlCQUFhLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNoRixpQ0FBcUIsR0FDRixFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDdEUsK0JBQW1CLEdBQ0EsRUFBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3BFLDBCQUFjLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUNsRix1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3JGLGtCQUFDO0tBQUEsQUFoTUQsSUFnTUM7SUFoTVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5jb25zdCBDT1JFID0gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllcnMge1xuICAvKiBNZXRob2RzICovXG4gIHN0YXRpYyBORVdfTUVUSE9EID0gJ2ZhY3RvcnknO1xuICBzdGF0aWMgVFJBTlNGT1JNX01FVEhPRCA9ICd0cmFuc2Zvcm0nO1xuICBzdGF0aWMgUEFUQ0hfREVQUyA9ICdwYXRjaGVkRGVwcyc7XG5cbiAgLyogSW5zdHJ1Y3Rpb25zICovXG4gIHN0YXRpYyBuYW1lc3BhY2VIVE1MOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5hbWVzcGFjZUhUTUwnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgbmFtZXNwYWNlTWF0aE1MOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5hbWVzcGFjZU1hdGhNTCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBuYW1lc3BhY2VTVkc6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1bmFtZXNwYWNlU1ZHJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50U3RhcnQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFN0YXJ0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRFbmQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudEVuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50UHJvcGVydHk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFByb3BlcnR5JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGVsZW1lbnRBdHRyaWJ1dGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudEF0dHJpYnV0ZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50Q2xhc3NQcm9wOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZW1lbnRDbGFzc1Byb3AnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudENvbnRhaW5lclN0YXJ0OlxuICAgICAgby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVlbGVtZW50Q29udGFpbmVyU3RhcnQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudENvbnRhaW5lckVuZDpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudENvbnRhaW5lckVuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50U3R5bGluZzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVlbGVtZW50U3R5bGluZycsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50U3R5bGluZ01hcDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVlbGVtZW50U3R5bGluZ01hcCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBlbGVtZW50U3R5bGVQcm9wOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZW1lbnRTdHlsZVByb3AnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZWxlbWVudFN0eWxpbmdBcHBseTpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZWxlbWVudFN0eWxpbmdBcHBseScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBjb250YWluZXJDcmVhdGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Y29udGFpbmVyJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIG5leHRDb250ZXh0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5leHRDb250ZXh0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIHRlbXBsYXRlQ3JlYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXRlbXBsYXRlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIHRleHQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dGV4dCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyB0ZXh0QmluZGluZzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZXh0QmluZGluZycsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBiaW5kOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWJpbmQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZW5hYmxlQmluZGluZ3M6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZW5hYmxlQmluZGluZ3MnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZGlzYWJsZUJpbmRpbmdzOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRpc2FibGVCaW5kaW5ncycsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBnZXRDdXJyZW50Vmlldzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVnZXRDdXJyZW50VmlldycsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyByZXN0b3JlVmlldzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVyZXN0b3JlVmlldycsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uMTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uMScsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb24zOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb24zJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uNDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uNCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb242OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb242JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpbnRlcnBvbGF0aW9uNzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbnRlcnBvbGF0aW9uNycsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGlvbjg6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGlvbjgnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGludGVycG9sYXRpb25WOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWludGVycG9sYXRpb25WJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIHB1cmVGdW5jdGlvbjA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uMCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uMTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb24xJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb24yOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvbjM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uMycsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uNDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb240JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb241OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvbjY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uNicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZUZ1bmN0aW9uNzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVwdXJlRnVuY3Rpb243JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlRnVuY3Rpb244OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXB1cmVGdW5jdGlvbjgnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHB1cmVGdW5jdGlvblY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHVyZUZ1bmN0aW9uVicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBwaXBlQmluZDE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZUJpbmQxJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlQmluZDI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZUJpbmQyJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlQmluZDM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZUJpbmQzJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlQmluZDQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZUJpbmQ0JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlQmluZFY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZUJpbmRWJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGkxOG46IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaTE4bkF0dHJpYnV0ZXM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bkF0dHJpYnV0ZXMnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGkxOG5FeHA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bkV4cCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaTE4blN0YXJ0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWkxOG5TdGFydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgaTE4bkVuZDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpMThuRW5kJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpMThuQXBwbHk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4bkFwcGx5JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBpMThuUG9zdHByb2Nlc3M6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aTE4blBvc3Rwcm9jZXNzJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGxvYWQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1bG9hZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbG9hZFF1ZXJ5TGlzdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVsb2FkUXVlcnlMaXN0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIHBpcGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGlwZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBwcm9qZWN0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByb2plY3Rpb24nLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb2plY3Rpb25EZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHJvamVjdGlvbkRlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cmVmZXJlbmNlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGluamVjdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnaW5qZWN0JywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIGluamVjdEF0dHJpYnV0ZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVpbmplY3RBdHRyaWJ1dGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZGlyZWN0aXZlSW5qZWN0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRpcmVjdGl2ZUluamVjdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyB0ZW1wbGF0ZVJlZkV4dHJhY3RvcjpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dGVtcGxhdGVSZWZFeHRyYWN0b3InLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgZGVmaW5lQmFzZTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkZWZpbmVCYXNlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIEJhc2VEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1QmFzZURlZicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lQ29tcG9uZW50OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRlZmluZUNvbXBvbmVudCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBDb21wb25lbnREZWZXaXRoTWV0YTogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVDb21wb25lbnREZWZXaXRoTWV0YScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lRGlyZWN0aXZlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWRlZmluZURpcmVjdGl2ZScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgRGlyZWN0aXZlRGVmV2l0aE1ldGE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1RGlyZWN0aXZlRGVmV2l0aE1ldGEnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgc3RhdGljIEluamVjdG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtUluamVjdG9yRGVmJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZpbmVJbmplY3Rvcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnZGVmaW5lSW5qZWN0b3InLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgc3RhdGljIE5nTW9kdWxlRGVmV2l0aE1ldGE6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1TmdNb2R1bGVEZWZXaXRoTWV0YScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcblxuICBzdGF0aWMgZGVmaW5lTmdNb2R1bGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZGVmaW5lTmdNb2R1bGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgUGlwZURlZldpdGhNZXRhOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtVBpcGVEZWZXaXRoTWV0YScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBkZWZpbmVQaXBlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWRlZmluZVBpcGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcblxuICBzdGF0aWMgcXVlcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVlcnknLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHF1ZXJ5UmVmcmVzaDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVxdWVyeVJlZnJlc2gnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHJlZ2lzdGVyQ29udGVudFF1ZXJ5OlxuICAgICAgby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVyZWdpc3RlckNvbnRlbnRRdWVyeScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBOZ09uQ2hhbmdlc0ZlYXR1cmU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1TmdPbkNoYW5nZXNGZWF0dXJlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIEluaGVyaXREZWZpbml0aW9uRmVhdHVyZTpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlJywgbW9kdWxlTmFtZTogQ09SRX07XG5cbiAgc3RhdGljIFByb3ZpZGVyc0ZlYXR1cmU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1UHJvdmlkZXJzRmVhdHVyZScsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBsaXN0ZW5lcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVsaXN0ZW5lcicsIG1vZHVsZU5hbWU6IENPUkV9O1xuXG4gIHN0YXRpYyBnZXRGYWN0b3J5T2Y6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Z2V0RmFjdG9yeU9mJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuXG4gIHN0YXRpYyBnZXRJbmhlcml0ZWRGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWdldEluaGVyaXRlZEZhY3RvcnknLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG4gIH07XG5cbiAgLy8gc2FuaXRpemF0aW9uLXJlbGF0ZWQgZnVuY3Rpb25zXG4gIHN0YXRpYyBzYW5pdGl6ZUh0bWw6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1c2FuaXRpemVIdG1sJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVN0eWxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXNhbml0aXplU3R5bGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRlZmF1bHRTdHlsZVNhbml0aXplcjpcbiAgICAgIG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1ZGVmYXVsdFN0eWxlU2FuaXRpemVyJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVJlc291cmNlVXJsOlxuICAgICAgby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVzYW5pdGl6ZVJlc291cmNlVXJsJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBzYW5pdGl6ZVNjcmlwdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVzYW5pdGl6ZVNjcmlwdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgc2FuaXRpemVVcmw6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1c2FuaXRpemVVcmwnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbn1cbiJdfQ==