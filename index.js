#!/usr/bin/env node
const net = require('net')

const args = process.argv.slice(2)
const ASN = args[0]
const networks = args.slice(1)

// Message Fields
const TYPE = 'type'
const SRCE = 'src'
const DEST = 'dst'
const MESG = 'msg'
const TABL = 'table'

// Message Types
const DATA = 'data'
const DUMP = 'dump'
const UPDT = 'update'
const RVKE = 'revoke'
const NRTE = 'no route'

// Update Message Fields
const NTWK = 'network'
const NMSK = 'netmask'
const ORIG = 'origin'
const LPRF = 'localpref'
const APTH = 'ASPath'
const SORG = 'selfOrigin'

// internal route info
const CUST = 'cust'
const PEER = 'peer'
const PROV = 'prov'

class Router {
	// routes = undefined
	// updates = undefined
	// relations = undefined
	// sockets = undefined

	constructor(networks) {
		const routes = []
		const updates = []
		const relations = {}
		const sockets = {}
		for (relationship in networks) {
			const [network, relation] = relationship.split('-')
			console.log('Starting socket for', network, relation)
			const client = new net.Socket()
			client.connect(network, () => {
				console.log('connected')
			}) // sockets[network] = socket.socket(socket.AF_UNIX, socket.SOCK_SEQPACKET)
			// sockets[network].setblocking(0)
			// sockets[network].connect(network)
			relations[network] = relation
		}
	}

	lookup_routes(daddr) {
		// Lookup all valid routes for an address """
		const outroutes = []
		return outroutes
	}

	get_shortest_as_path(routes) {
		// select the route with the shortest AS Path """
		const outroutes = []
		return outroutes
	}

	get_highest_preference(routes) {
		// select the route with the shortest AS Path """
		const outroutes = []
		return outroutes
	}

	get_self_origin(routes) {
		// select self originating routes """
		const outroutes = []
		return outroutes
	}

	get_origin_routes(routes) {
		// select origin routes: IGP > EGP > UNK """
		const outroutes = []
		return outroutes
	}

	filter_relationships(srcif, routes) {
		// Don't allow Peer->Peer, Peer->Prov, or Prov->Peer forwards """
		const outroutes = []
		return outroutes
	}

	get_route(srcif, daddr) {
		//	Select the best route for a given address	"""
		const peer = None
		const routes = lookup_routers(daddr)
		// Rules go here
		if (routes) {
			// 1. Highest Preference
			routes = this.get_highest_preference(routes)
			// 2. Self Origin
			routes = this.get_self_origin(routes)
			// 3. Shortest ASPath
			routes = this.get_shortest_as_path(routes)
			// 4. IGP > EGP > UNK
			routes = this.get_origin_routes(routes)
			// 5. Lowest IP Address

			// Final check: enforce peering relationships
			routes = this.filter_relationships(srcif, routes)
		}
		return peer ? this.sockets[peer] : undefined
	}

	forward(srcif, packet) {
		// Forward a data packet	"""
		return false
	}

	coalesce() {
		// coalesce any routes that are right next to each other	""" (this is the most difficult task, save until last)
		return false
	}

	update(srcif, packet) {
		// handle update packets	"""
		return false
	}

	revoke(packet) {
		// handle revoke packets	"""
		return true
	}

	dump(packet) {
		// handles dump table requests	"""
		return true
	}

	handle_packet(srcif, packet) {
		// dispatches a packet """
		return false
	}

	send_error(conn, msg) {
		// Send a no_route error message """
		return
	}

	run() {
		// while (true) {
		// const socks = select.select(self.sockets.values(), [], [], 0.1)[0]
		// for (conn of socks) {
		// try:
		//     k = conn.recv(65535)
		// except:
		//     # either died on a connection reset, or was SIGTERM's by parent
		//     return
		// if k:
		//     for sock in self.sockets:
		//         if self.sockets[sock] == conn:
		//             srcif = sock
		//     msg = json.loads(k)
		//     if not self.handle_packet(srcif, msg):
		//         self.send_error(conn, msg)
		// else:
		//     return
		// }
		// }
	}
}

const router = new Router(networks)
router.run()
