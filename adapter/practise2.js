var getCity = function () {
	var cities = [
		{name: 'shenzhen', id:1},
		{name: 'guangzhou', id:2}
	]
	return cities
}

var render = function(fn) {
	document.write(JSON.stringify(fn()))
}

render(getCity)

var newCities = {
	shenzhen:1,
	guangzhou:2
}

var getCitiesAdapter = function(oldCitiesfn) {
	var cities = {}
			oldCities = oldCitiesfn()

	for(let i = 0, c; c = oldCities[i++];) {
		cities[c.name] = c.id
	}

	return function() {
		return cities
	}
}

render(getCitiesAdapter(getCity))