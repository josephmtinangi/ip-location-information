var button = document.querySelector('#button');
button.addEventListener('click', getLocation);

function getLocation() {
	var ip = document.getElementById('ip').value;
	// prepare url
	var url = 'https://ipapi.co/' + ip + '/json/';

	// Perform API call
	axios.get(url)
	  .then(function (response) {

	    document.querySelector('#asn').innerHTML = response.data.asn;
	    document.querySelector('#city').innerHTML = response.data.city;
	    document.querySelector('#country').innerHTML = response.data.country;
	    document.querySelector('#country-name').innerHTML = response.data.country_name;
	    document.querySelector('#ip-address').innerHTML = response.data.ip;
	    document.querySelector('#latitude').innerHTML = response.data.latitude;
	    document.querySelector('#longitude').innerHTML = response.data.longitude;
	    document.querySelector('#org').innerHTML = response.data.org;
	    document.querySelector('#postal').innerHTML = response.data.postal;
	    document.querySelector('#region').innerHTML = response.data.region;
	    document.querySelector('#region-code').innerHTML = response.data.region_code;
	    document.querySelector('#timezone').innerHTML = response.data.timezone;
	  })
	  .catch(function (error) {
	    console.log(error);
	  });		
}