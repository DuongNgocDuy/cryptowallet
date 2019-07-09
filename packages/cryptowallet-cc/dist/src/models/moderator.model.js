"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Moderator = (function (_super) {
    tslib_1.__extends(Moderator, _super);
    function Moderator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.moderator';
        _this.role = 'Moderator';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], Moderator.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Moderator.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Moderator.prototype, "email", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], Moderator.prototype, "walletID", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Moderator.prototype, "role", void 0);
    return Moderator;
}(convector_core_model_1.ConvectorModel));
exports.Moderator = Moderator;
//# sourceMappingURL=moderator.model.js.map