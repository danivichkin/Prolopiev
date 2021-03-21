<template>
	<div>
		<v-text-field v-model="login" placeholder="Login"/>
		<v-btn @click="redirect" :disabled="login===''">sumbit</v-btn>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			login: ''
		}
	},
	methods: {
		redirect() {
			localStorage.setItem("login", this.login);
			this.$router.push("/chat")
		}
	}
}
</script>

<style scoped>

</style>
