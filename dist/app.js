"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', routes_1.default);
app.listen(5000, () => console.log('Server start on port 5000'));
exports.default = app;
//# sourceMappingURL=app.js.map