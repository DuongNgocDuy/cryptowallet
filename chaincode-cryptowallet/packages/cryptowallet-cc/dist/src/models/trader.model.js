"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Trader = (function (_super) {
    tslib_1.__extends(Trader, _super);
    function Trader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.trader';
        _this.role = 'Trader';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Trader.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Trader.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Trader.prototype, "email", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Trader.prototype, "walletID", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Trader.prototype, "role", void 0);
    return Trader;
}(convector_core_model_1.ConvectorModel));
exports.Trader = Trader;
//# sourceMappingURL=trader.model.js.map