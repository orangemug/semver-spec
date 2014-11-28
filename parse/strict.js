module.exports = {
	"__comment": "strict {version} should be parse to {result}",
	"data": [
		{
			"version": "1.2.3",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": [],
				"build": []
			}
		},
		{
			"version": "1.2.3-0",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": [0],
				"build": []
			}
		},
		{
			"version": "1.2.3-1",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": [1],
				"build": []
			}
		},
		{
			"version": "1.2.3-beta",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": ["beta"],
				"build": []
			}
		},
		{
			"version": "1.2.3-beta+otherbuild",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": ["beta"],
				"build": ["otherbuild"]
			}
		},
		{
			"version": "1.2.3+otherbuild",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": {},
				"build": ["otherbuild"]
			}
		},
		{
			"version": "1.2.3+otherbuild",
			"result": {
				"major": 1,
				"minor": 2,
				"patch": 3,
				"prerelease": [],
				"build": ["otherbuild"]
			}
		},
		{
			"version": "1",
			"result": null
		},
		{
			"version": "1.2",
			"result": null
		},
		{
			"version": "1.2-beta",
			"result": null
		},
		{
			"version": "1.2-beta+build",
			"result": null
		}
	]
}
