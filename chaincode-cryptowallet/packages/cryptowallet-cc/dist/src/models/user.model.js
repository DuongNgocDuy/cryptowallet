"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var User = (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.user';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required()
    ], User.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], User.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], User.prototype, "email", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Validate(yup.string())
    ], User.prototype, "walletID", void 0);
    return User;
}(convector_core_model_1.ConvectorModel));
exports.User = User;
//# sourceMappingURL=user.model.js.map