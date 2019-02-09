/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { identifierName } from './compile_metadata';
import { Identifiers } from './identifiers';
import * as o from './output/output_ast';
import { typeSourceSpan } from './parse_util';
import { NgModuleProviderAnalyzer } from './provider_analyzer';
import { componentFactoryResolverProviderDef, providerDef } from './view_compiler/provider_compiler';
var NgModuleCompileResult = /** @class */ (function () {
    function NgModuleCompileResult(ngModuleFactoryVar) {
        this.ngModuleFactoryVar = ngModuleFactoryVar;
    }
    return NgModuleCompileResult;
}());
export { NgModuleCompileResult };
var LOG_VAR = o.variable('_l');
var NgModuleCompiler = /** @class */ (function () {
    function NgModuleCompiler(reflector) {
        this.reflector = reflector;
    }
    NgModuleCompiler.prototype.compile = function (ctx, ngModuleMeta, extraProviders) {
        var sourceSpan = typeSourceSpan('NgModule', ngModuleMeta.type);
        var entryComponentFactories = ngModuleMeta.transitiveModule.entryComponents;
        var bootstrapComponents = ngModuleMeta.bootstrapComponents;
        var providerParser = new NgModuleProviderAnalyzer(this.reflector, ngModuleMeta, extraProviders, sourceSpan);
        var providerDefs = [componentFactoryResolverProviderDef(this.reflector, ctx, 0 /* None */, entryComponentFactories)]
            .concat(providerParser.parse().map(function (provider) { return providerDef(ctx, provider); }))
            .map(function (_a) {
            var providerExpr = _a.providerExpr, depsExpr = _a.depsExpr, flags = _a.flags, tokenExpr = _a.tokenExpr;
            return o.importExpr(Identifiers.moduleProviderDef).callFn([
                o.literal(flags), tokenExpr, providerExpr, depsExpr
            ]);
        });
        var ngModuleDef = o.importExpr(Identifiers.moduleDef).callFn([o.literalArr(providerDefs)]);
        var ngModuleDefFactory = o.fn([new o.FnParam(LOG_VAR.name)], [new o.ReturnStatement(ngModuleDef)], o.INFERRED_TYPE);
        var ngModuleFactoryVar = identifierName(ngModuleMeta.type) + "NgFactory";
        this._createNgModuleFactory(ctx, ngModuleMeta.type.reference, o.importExpr(Identifiers.createModuleFactory).callFn([
            ctx.importExpr(ngModuleMeta.type.reference),
            o.literalArr(bootstrapComponents.map(function (id) { return ctx.importExpr(id.reference); })),
            ngModuleDefFactory
        ]));
        if (ngModuleMeta.id) {
            var id = typeof ngModuleMeta.id === 'string' ? o.literal(ngModuleMeta.id) :
                ctx.importExpr(ngModuleMeta.id);
            var registerFactoryStmt = o.importExpr(Identifiers.RegisterModuleFactoryFn)
                .callFn([id, o.variable(ngModuleFactoryVar)])
                .toStmt();
            ctx.statements.push(registerFactoryStmt);
        }
        return new NgModuleCompileResult(ngModuleFactoryVar);
    };
    NgModuleCompiler.prototype.createStub = function (ctx, ngModuleReference) {
        this._createNgModuleFactory(ctx, ngModuleReference, o.NULL_EXPR);
    };
    NgModuleCompiler.prototype._createNgModuleFactory = function (ctx, reference, value) {
        var ngModuleFactoryVar = identifierName({ reference: reference }) + "NgFactory";
        var ngModuleFactoryStmt = o.variable(ngModuleFactoryVar)
            .set(value)
            .toDeclStmt(o.importType(Identifiers.NgModuleFactory, [o.expressionType(ctx.importExpr(reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]);
        ctx.statements.push(ngModuleFactoryStmt);
    };
    return NgModuleCompiler;
}());
export { NgModuleCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2NvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tcGlsZXIvc3JjL25nX21vZHVsZV9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQW1ELGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBR3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTdELE9BQU8sRUFBQyxtQ0FBbUMsRUFBVSxXQUFXLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRztJQUNFLCtCQUFtQixrQkFBMEI7UUFBMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO0lBQUcsQ0FBQztJQUNuRCw0QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVELElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFakM7SUFDRSwwQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBQ25ELGtDQUFPLEdBQVAsVUFDSSxHQUFrQixFQUFFLFlBQXFDLEVBQ3pELGNBQXlDO1FBQzNDLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUM5RSxJQUFNLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFNLGNBQWMsR0FDaEIsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJ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LENBQUM7SUFDbkUsQ0FBQztJQUVPLGlEQUFzQixHQUE5QixVQUErQixHQUFrQixFQUFFLFNBQWMsRUFBRSxLQUFtQjtRQUNwRixJQUFNLGtCQUFrQixHQUFNLGNBQWMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxjQUFXLENBQUM7UUFDaEYsSUFBTSxtQkFBbUIsR0FDckIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQzthQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ1YsVUFBVSxDQUNQLENBQUMsQ0FBQyxVQUFVLENBQ1IsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBRyxDQUFDLEVBQzVFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUMzQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU3RCxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUE3REQsSUE2REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBpZGVudGlmaWVyTmFtZX0gZnJvbSAnLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQge05vZGVGbGFnc30gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7SWRlbnRpZmllcnN9IGZyb20gJy4vaWRlbnRpZmllcnMnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7dHlwZVNvdXJjZVNwYW59IGZyb20gJy4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge05nTW9kdWxlUHJvdmlkZXJBbmFseXplcn0gZnJvbSAnLi9wcm92aWRlcl9hbmFseXplcic7XG5pbXBvcnQge091dHB1dENvbnRleHR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclByb3ZpZGVyRGVmLCBkZXBEZWYsIHByb3ZpZGVyRGVmfSBmcm9tICcuL3ZpZXdfY29tcGlsZXIvcHJvdmlkZXJfY29tcGlsZXInO1xuXG5leHBvcnQgY2xhc3MgTmdNb2R1bGVDb21waWxlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5nTW9kdWxlRmFjdG9yeVZhcjogc3RyaW5nKSB7fVxufVxuXG5jb25zdCBMT0dfVkFSID0gby52YXJpYWJsZSgnX2wnKTtcblxuZXhwb3J0IGNsYXNzIE5nTW9kdWxlQ29tcGlsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvcikge31cbiAgY29tcGlsZShcbiAgICAgIGN0eDogT3V0cHV0Q29udGV4dCwgbmdNb2R1bGVNZXRhOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICAgIGV4dHJhUHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdKTogTmdNb2R1bGVDb21waWxlUmVzdWx0IHtcbiAgICBjb25zdCBzb3VyY2VTcGFuID0gdHlwZVNvdXJjZVNwYW4oJ05nTW9kdWxlJywgbmdNb2R1bGVNZXRhLnR5cGUpO1xuICAgIGNvbnN0IGVudHJ5Q29tcG9uZW50RmFjdG9yaWVzID0gbmdNb2R1bGVNZXRhLnRyYW5zaXRpdmVNb2R1bGUuZW50cnlDb21wb25lbnRzO1xuICAgIGNvbnN0IGJvb3RzdHJhcENvbXBvbmVudHMgPSBuZ01vZHVsZU1ldGEuYm9vdHN0cmFwQ29tcG9uZW50cztcbiAgICBjb25zdCBwcm92aWRlclBhcnNlciA9XG4gICAgICAgIG5ldyBOZ01vZHVsZVByb3ZpZGVyQW5hbHl6ZXIodGhpcy5yZWZsZWN0b3IsIG5nTW9kdWxlTWV0YSwgZXh0cmFQcm92aWRlcnMsIHNvdXJjZVNwYW4pO1xuICAgIGNvbnN0IHByb3ZpZGVyRGVmcyA9XG4gICAgICAgIFtjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJQcm92aWRlckRlZihcbiAgICAgICAgICAgICB0aGlzLnJlZmxlY3RvciwgY3R4LCBOb2RlRmxhZ3MuTm9uZSwgZW50cnlDb21wb25lbnRGYWN0b3JpZXMpXVxuICAgICAgICAgICAgLmNvbmNhdChwcm92aWRlclBhcnNlci5wYXJzZSgpLm1hcCgocHJvdmlkZXIpID0+IHByb3ZpZGVyRGVmKGN0eCwgcHJvdmlkZXIpKSlcbiAgICAgICAgICAgIC5tYXAoKHtwcm92aWRlckV4cHIsIGRlcHNFeHByLCBmbGFncywgdG9rZW5FeHByfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gby5pbXBvcnRFeHByKElkZW50aWZpZXJzLm1vZHVsZVByb3ZpZGVyRGVmKS5jYWxsRm4oW1xuICAgICAgICAgICAgICAgIG8ubGl0ZXJhbChmbGFncyksIHRva2VuRXhwciwgcHJvdmlkZXJFeHByLCBkZXBzRXhwclxuICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgY29uc3QgbmdNb2R1bGVEZWYgPSBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMubW9kdWxlRGVmKS5jYWxsRm4oW28ubGl0ZXJhbEFycihwcm92aWRlckRlZnMpXSk7XG4gICAgY29uc3QgbmdNb2R1bGVEZWZGYWN0b3J5ID0gby5mbihcbiAgICAgICAgW25ldyBvLkZuUGFyYW0oTE9HX1ZBUi5uYW1lICEpXSwgW25ldyBvLlJldHVyblN0YXRlbWVudChuZ01vZHVsZURlZildLCBvLklORkVSUkVEX1RZUEUpO1xuXG4gICAgY29uc3QgbmdNb2R1bGVGYWN0b3J5VmFyID0gYCR7aWRlbnRpZmllck5hbWUobmdNb2R1bGVNZXRhLnR5cGUpfU5nRmFjdG9yeWA7XG4gICAgdGhpcy5fY3JlYXRlTmdNb2R1bGVGYWN0b3J5KFxuICAgICAgICBjdHgsIG5nTW9kdWxlTWV0YS50eXBlLnJlZmVyZW5jZSwgby5pbXBvcnRFeHByKElkZW50aWZpZXJzLmNyZWF0ZU1vZHVsZUZhY3RvcnkpLmNhbGxGbihbXG4gICAgICAgICAgY3R4LmltcG9ydEV4cHIobmdNb2R1bGVNZXRhLnR5cGUucmVmZXJlbmNlKSxcbiAgICAgICAgICBvLmxpdGVyYWxBcnIoYm9vdHN0cmFwQ29tcG9uZW50cy5tYXAoaWQgPT4gY3R4LmltcG9ydEV4cHIoaWQucmVmZXJlbmNlKSkpLFxuICAgICAgICAgIG5nTW9kdWxlRGVmRmFjdG9yeVxuICAgICAgICBdKSk7XG5cbiAgICBpZiAobmdNb2R1bGVNZXRhLmlkKSB7XG4gICAgICBjb25zdCBpZCA9IHR5cGVvZiBuZ01vZHVsZU1ldGEuaWQgPT09ICdzdHJpbmcnID8gby5saXRlcmFsKG5nTW9kdWxlTWV0YS5pZCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5pbXBvcnRFeHByKG5nTW9kdWxlTWV0YS5pZCk7XG4gICAgICBjb25zdCByZWdpc3RlckZhY3RvcnlTdG10ID0gby5pbXBvcnRFeHByKElkZW50aWZpZXJzLlJlZ2lzdGVyTW9kdWxlRmFjdG9yeUZuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbEZuKFtpZCwgby52YXJpYWJsZShuZ01vZHVsZUZhY3RvcnlWYXIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RtdCgpO1xuICAgICAgY3R4LnN0YXRlbWVudHMucHVzaChyZWdpc3RlckZhY3RvcnlTdG10KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE5nTW9kdWxlQ29tcGlsZVJlc3VsdChuZ01vZHVsZUZhY3RvcnlWYXIpO1xuICB9XG5cbiAgY3JlYXRlU3R1YihjdHg6IE91dHB1dENvbnRleHQsIG5nTW9kdWxlUmVmZXJlbmNlOiBhbnkpIHtcbiAgICB0aGlzLl9jcmVhdGVOZ01vZHVsZUZhY3RvcnkoY3R4LCBuZ01vZHVsZVJlZmVyZW5jZSwgby5OVUxMX0VYUFIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTmdNb2R1bGVGYWN0b3J5KGN0eDogT3V0cHV0Q29udGV4dCwgcmVmZXJlbmNlOiBhbnksIHZhbHVlOiBvLkV4cHJlc3Npb24pIHtcbiAgICBjb25zdCBuZ01vZHVsZUZhY3RvcnlWYXIgPSBgJHtpZGVudGlmaWVyTmFtZSh7cmVmZXJlbmNlOiByZWZlcmVuY2V9KX1OZ0ZhY3RvcnlgO1xuICAgIGNvbnN0IG5nTW9kdWxlRmFjdG9yeVN0bXQgPVxuICAgICAgICBvLnZhcmlhYmxlKG5nTW9kdWxlRmFjdG9yeVZhcilcbiAgICAgICAgICAgIC5zZXQodmFsdWUpXG4gICAgICAgICAgICAudG9EZWNsU3RtdChcbiAgICAgICAgICAgICAgICBvLmltcG9ydFR5cGUoXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLk5nTW9kdWxlRmFjdG9yeSwgW28uZXhwcmVzc2lvblR5cGUoY3R4LmltcG9ydEV4cHIocmVmZXJlbmNlKSkgIV0sXG4gICAgICAgICAgICAgICAgICAgIFtvLlR5cGVNb2RpZmllci5Db25zdF0pLFxuICAgICAgICAgICAgICAgIFtvLlN0bXRNb2RpZmllci5GaW5hbCwgby5TdG10TW9kaWZpZXIuRXhwb3J0ZWRdKTtcblxuICAgIGN0eC5zdGF0ZW1lbnRzLnB1c2gobmdNb2R1bGVGYWN0b3J5U3RtdCk7XG4gIH1cbn1cbiJdfQ==