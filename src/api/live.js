import { http } from './index';

const getLiveData = (data) => http('post', '/apicloud/Alive/get_alive_info', data);

export {
	getLiveData,
}