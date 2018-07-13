<template>
	<div id="clock_module">
		<span>
			{{`${clock.Year}/${clock.Month}/${clock.Date}`}}
		</span>
		<span id="clock">
			{{`${clock.Hour}:${clock.Minute}:${clock.Second}`}}
		</span>
	</div>
</template>

<script>
	export default {
		name: "Clock",
		mounted() {
			this.getClock();
			setTimeout(() => {
				setInterval(this.getClock, 1000);
			}, 1000 - (new Date()).getUTCMilliseconds());
		},
		data () {
			return {
				clock: {
					Year: 2000,
					Month: 1,
					Date: 1,
					Hour:0,
					Minute:0,
					Second:0
				}
			}
		},
		methods: {
			getClock: function () {
				const date = new Date();
				this.clock = {
					Year: this.addZero(date.getFullYear()),
					Month: this.addZero(date.getMonth()),
					Date: this.addZero(date.getDate()),
					Hour: this.addZero(date.getHours()),
					Minute: this.addZero(date.getMinutes()),
					Second: this.addZero(date.getSeconds())
				}
			},
			addZero: function (value) {
				return ("0" + value).slice(-2);
			}
		}
	}
</script>

<style scoped>
	span {
		display: block;
		float: right;
		width: 80%;
		font-size: 4vw;
	}

	span#clock{
		font-size: 8vw;
	}
</style><template>
	<div id="clock_module">
		<span>
			{{`${clock.Year}/${clock.Month}/${clock.Date}`}}
		</span>
		<span id="clock">
			{{`${clock.Hour}:${clock.Minute}:${clock.Second}`}}
		</span>
	</div>
</template>

<script>
	export default {
		name: "Clock",
		mounted() {
			this.getClock();
			setTimeout(() => {
				setInterval(this.getClock, 1000);
			}, 1000 - (new Date()).getUTCMilliseconds());
		},
		data () {
			return {
				clock: {
					Year: 2000,
					Month: 1,
					Date: 1,
					Hour:0,
					Minute:0,
					Second:0
				}
			}
		},
		methods: {
			getClock: function () {
				console.log("get clock");
				const date = new Date();
				this.clock = {
					Year: this.addZero(date.getFullYear()),
					Month: this.addZero(date.getMonth()),
					Date: this.addZero(date.getDate()),
					Hour: this.addZero(date.getHours()),
					Minute: this.addZero(date.getMinutes()),
					Second: this.addZero(date.getSeconds())
				}
			},
			addZero: function (value) {
				return ("0" + value).slice(-2);
			}
		}
	}
</script>

<style scoped>
	span {
		display: block;
		float: right;
		width: 80%;
		font-size: 4vw;
	}

	span#clock{
		font-size: 8vw;
	}
</style>