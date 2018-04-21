const io = require('socket.io-client');

const _socket={
	_io: '',
	init(item){
		let url = `http://127.0.0.1:12312?token=${item[0].country}`
		console.log('url::', url)
		this._io = io(url, {
        	autoConnect: false
      	})
		this._io.open()
	},
	_close(){
		 console.log(`....close`)
		if(this._io){
			 console.log(`close`)
			this._io.close();
		}
	},
	getIO(){
		return this._io
	}

}

export {_socket}