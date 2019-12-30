"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const request = supertest_1.default(app_1.default);
const faketTasksControllers_1 = require("../controllers/faketTasksControllers");
app_1.default.get('/tasks', faketTasksControllers_1.getTasks);
it('Get all tasks', (done) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield request.get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Successfully!');
    done();
}));
// app.post('/addtask', createTask);
// it('Add task', async done => {
//      const res = await request.post('/addtask');
//      expect(res.status).toBe(200);
//      done()
// });
// app.post('/addtask', );
// app.delete('/tasks/:id',);
//# sourceMappingURL=fakeRequests.test.js.map