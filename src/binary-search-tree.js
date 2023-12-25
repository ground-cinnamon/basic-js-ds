const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this.rootNode = null
	}

	root() {
		return this.rootNode
	}

	add(data) {
		this.rootNode = this.addData(this.rootNode, data)
	}

	addData(node, data) {
		if (!node) {
			return new Node(data)
		}

		if (data === node.data) {
			return node
		}

		if (data < node.data) {
			node.left = this.addData(node.left, data)
		} else {
			node.right = this.addData(node.right, data)
		}

		return node
	}

	has(data) {
		return searchData(this.rootNode, data)

		function searchData(node, data) {
			if (!node) {
				return false
			}

			if (data === node.data) {
				return true
			} else if (data < node.data) {
				return searchData(node.left, data)
			} else {
				return searchData(node.right, data)
			}
		}
	}

	find(data) {
		const foundNode = findNode(this.rootNode, data)

		return foundNode !== null ? foundNode : null

		function findNode(node, data) {
			if (!node) {
				return null
			}

			if (data === node.data) {
				return node // Node found
			} else if (data < node.data) {
				return findNode(node.left, data)
			} else {
				return findNode(node.right, data)
			}
		}
	}

	remove(data) {
		this.rootNode = removeNode(this.rootNode, data)

		function removeNode(node, data) {
			if (!node) {
				return null
			}

			if (data < node.data) {
				node.left = removeNode(node.left, data)
			} else if (data > node.data) {
				node.right = removeNode(node.right, data)
			} else {
				if (!node.left) {
					return node.right
				} else if (!node.right) {
					return node.left
				}

				node.data = findMinValue(node.right)

				node.right = removeNode(node.right, node.data)
			}

			return node
		}

		function findMinValue(node) {
			while (node.left) {
				node = node.left
			}
			return node.data
		}
	}

	min() {
		if (!this.rootNode) {
			return null
		}

		let node = this.rootNode
		while (node.left) {
			node = node.left
		}

		return node.data
	}

	max() {
		if (!this.rootNode) {
			return null
		}

		let node = this.rootNode
		while (node.right) {
			node = node.right
		}

		return node.data
	}
}

module.exports = {
	BinarySearchTree,
}
