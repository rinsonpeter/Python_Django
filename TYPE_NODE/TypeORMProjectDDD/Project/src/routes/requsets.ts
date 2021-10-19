import { Router } from "express";
import { RequestController } from '../controllers/requestController'
const requestRouter = Router();



requestRouter.post('/', RequestController.addLeave);

requestRouter.get('/pendingRequest', RequestController.pendingLeave);

requestRouter.get('/approverequest/:id', RequestController.approval);

requestRouter.post('/rejectrequest/:id', RequestController.rejection);

requestRouter.get('/departmentwiseList', RequestController.departmentList);

requestRouter.get('/leaveDetails', RequestController.allRequests);

requestRouter.post('/leaveDetails', RequestController.dateWiseAllRequests);

requestRouter.get('/leaveDetails/:id', RequestController.departmentWiseRequests);

requestRouter.post('/leaveDetails/:id', RequestController.datewiseDepartment);


export default requestRouter;