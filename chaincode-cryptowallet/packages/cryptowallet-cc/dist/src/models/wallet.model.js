"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Wallet = (function (_super) {
    tslib_1.__extends(Wallet, _super);
    function Wallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.wallet';
        _this.balance = 0;
        _this.transactionDetails = new Array();
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Wallet.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Wallet.prototype, "ownerID", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Wallet.prototype, "ownerName", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number()
            .integer()
            .min(0))
    ], Wallet.prototype, "balance", void 0);
    return Wallet;
}(convector_core_model_1.ConvectorModel));
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.model.js.map