const { NotImplementedError } = require('../extensions/index.js')

// const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	#queue = []

	getUnderlyingList() {
		return this.#queue.reduceRight((next, value) => {
			return { value, next }
		}, null)
	}

	enqueue(value) {
		this.#queue.push(value)
	}

	dequeue() {
		return this.#queue.shift()
	}
}

module.exports = {
	Queue,
}

const a = {
	value: 732,
	next: {
		value: 883,
		next: {
			value: 133,
			next: {
				value: 428,
				next: {
					value: 606,
					next: {
						value: 168,
						next: {
							value: 2,
							next: {
								value: 608,
								next: {
									value: 363,
									next: { value: 965, next: { value: 355, next: null } },
								},
							},
						},
					},
				},
			},
		},
	},
}
