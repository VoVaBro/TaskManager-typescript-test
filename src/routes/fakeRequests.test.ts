import axios from 'axios';
import app from '../app';
import supertest from 'supertest'

const request = supertest(app);

import functions from '../controllers/faketTasksControllers'


app.get('/tasks', functions.getTasks);

axios.get('/tasks')

it('Get all tasks', async () => {
    const res = await request.get('/tasks');
     expect(res.status).toBe(200);
     expect(res.body.message).toEqual('Successfully!');
});



// app.post('/addtask', createTask);
//
// it('Add task', async () => {
//      const res = await request
//          .post('/addtask')
//          .send({
//              text:'New task',
//              priority: 60
//          });
//      expect(res.status).toEqual(200);
//      expect(res.body).toHaveProperty('post');
// });


// app.post('/addtask', );
// app.delete('/tasks/:id',);