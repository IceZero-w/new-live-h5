<template>
	<div class="download-box">
		<div class="download-guide" v-if="dialogShow">
			<div>如果在微信中无法直接下载，可以点击</div>
			<div class="guide-text">右上角选择在<span class="text-underline">浏览器中打开</span>即可下载。</div>
		</div>
		<div class="download-app-box">
			<img class="app-logo" src="../assets/app-logo.png" alt="">
			<div class="app-name">聚圈</div>
		</div>
		<img class="download-btn" @click="downloadApp()" src="../assets/down-btn2.png" />
	</div>
</template>
<script>
function openIframe(src) {
	const ifr = document.createElement("iframe");
	ifr.src = src;
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
	window.setTimeout(function(){
			document.body.removeChild(ifr);
	},2000)
}
export default {
	data() {
		return {
			dialogShow: false,
		};
	},
	methods: {
		// 下载app
		downloadApp() {
			//尝试打开URL scheme，在2秒后检查当前时间，如果实际时间已过2200 毫秒，说明唤起成功（唤起 APP会让浏览器的定时器变慢）
			window.location.href = `live://data/roomId=${this.$route.query.roomId}`;
			var t = Date.now();
			setTimeout(() => {
				if (Date.now() - t < 2200) {
					// 如果是ios系统，则直接
					if (this.isIOS()) {
						openIframe(`https://itunes.apple.com/cn/app/id1502999426?mt=${this.$route.query.roomId}`)
					} else {
						this.androidFn();
					}
				}
			}, 2000);
		},
		androidFn() {
			if (this.isWeixin()) {
				this.dialogShow = true;
				return;
			}
			openIframe('http://api2.hcjuquan.com/apks/juquan.apk')
		},
	}
}
</script>
<style lang="scss" scoped>
.download-box {
	position: fixed;
	top: 0;
	bottom: -10px;
	left: 0;
	right: 0;
	background: url('../assets/download-bgd.png');
	background-size: 100% 100%;

	.download-guide {
		position: absolute;
		width: 667px;
		height: 248px;
		background: url('../assets/dotted-line.png');
		background-size: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
		left: 50%;
		transform: translateX(-50%);
		box-sizing: border-box;
		padding-top: 60px;
		font-size: 34px;

		.guide-text {
			margin-top: 20px;
			.text-underline {
				text-decoration: underline;
			}
		}
	}

	.download-app-box {
		position: absolute;
		top: 450px;
		left: 50%;
		transform: translateX(-50%);
		color: #fff;

		.app-logo {
			margin-bottom: 14px;
		}
	}

	.download-btn {
		width: 392px;
		height: 90px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 804px;
	}
}
</style>