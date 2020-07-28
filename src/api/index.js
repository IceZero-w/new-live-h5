import axios from 'axios';
import { Toast } from 'mint-ui';

const Axios = new axios.create({
	baseURL: '/',
});

function http(method, url, data) {
	let param = {};
	if (method.toLowerCase() === 'get') {
		param = {
			params: data,
		};
	} else if (method.toLowerCase() === 'post') {
		param = data;
	}
	
	const promise = new Promise((resolve, reject) => {
		Axios[method](url, param).then((res) => {
			resolve(res.data)
		}).catch((err) => {
			Toast({
				message: err.mess || '系统错误',
				duration: 1500,
				className: 'my-toast',
			});
			reject(err);
		})
	})
	console.log(promise, 'skodkosd')
	return promise;
}

export {
	http,
}