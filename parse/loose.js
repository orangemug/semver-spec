module.exports = {
	"__comment": "loose {version} should be parse to {result}",
	"data": [
		{
			"version": "1",
      "loose": true,
			"result": {
				"major": 1,
				"minor": null,
				"patch": null,
				"prerelease": [],
				"build": []
			}
		},
		{
			"version": "1.2",
      "loose": true,
			"result": {
				"major": 1,
				"minor": 2,
				"patch": null,
				"prerelease": [],
				"build": []
			}
		},
		{
			"version": "1-beta",
      "loose": true,
			"result": null
		},
		{
			"version": "1-beta+build",
      "loose": true,
			"result": null
		},
		{
			"version": "1.2-beta",
      "loose": true,
			"result": null
		},
		{
			"version": "1.2-beta+build",
      "loose": true,
			"result": null
		}
	]
}
