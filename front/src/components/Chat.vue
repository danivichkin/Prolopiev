<template>
	<v-app>
		<v-app-bar dence>
			<div>
				<v-toolbar-title>Welcome {{ login }} to chat</v-toolbar-title>
				<v-spacer></v-spacer>
			</div>
		</v-app-bar>
		<div>
			<Chat
				:participants="participants"
				:myself="myself"
				:messages="messages"
				:onType="onType"
				:onMessageSubmit="onMessageSubmit"
				:chatTitle="chatTitle"
				:placeholder="placeholder"
				:colors="colors"
				:borderStyle="borderStyle"
				:hideCloseButton="hideCloseButton"
				:closeButtonIconSize="closeButtonIconSize"
				:submitIconSize	="submitIconSize"/>
		</div>
	</v-app>
</template>

<script>
import {Chat} from 'vue-quick-chat'

export default {
	components: {
		Chat
	},
	data() {
		return {
			login: '',
			participants: [
				{
					name: 'Arnaldo',
					id: 1
				},
				{
					name: 'José',
					id: 2
				}
			],
			myself: {
				name: 'Matheus S.',
				id: 3
			},
			messages: [
				{
					content: 'received messages',
					myself: false,
					participantId: 1,
					timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123}
				},
				{
					content: 'sent messages',
					myself: true,
					participantId: 3,
					timestamp: {year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123}
				},
				{
					content: 'other received messages',
					myself: false,
					participantId: 2,
					timestamp: {year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123}
				}
			],
			chatTitle: 'My chat title',
			placeholder: 'send your message',
			colors: {
				header: {
					bg: '#d30303',
					text: '#fff'
				},
				message: {
					myself: {
						bg: '#fff',
						text: '#bdb8b8'
					},
					others: {
						bg: '#fb4141',
						text: '#fff'
					}
				},
				submitIcon: '#b91010'
			},
			borderStyle: {
				topLeft: "10px",
				topRight: "10px",
				bottomLeft: "10px",
				bottomRight: "10px",
			},
			hideCloseButton: false,
			submitIconSize: "20px",
			closeButtonIconSize: "20px"
		}
	},
	methods: {
		onType: function (event) {
			//here you can set any behavior
		},
		onMessageSubmit: function (message) {
			//here you can set any behavior
		}
	},
	mounted() {
		this.login = localStorage.getItem("login")
	}
}
</script>

<style scoped>

</style>
