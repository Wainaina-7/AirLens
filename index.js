// index.js
// ========== Constants & Utility Functions ==========
// Using the public WAQI API (World Air Quality Index)
const BASE_URL = 'https://api.waqi.info/feed';
import { WAQI_TOKEN } from './config.js'; 

// Utility: Fetch air quality data for a city
async function fetchCityData(city, country) {
    // WAQI API uses city name, optionally with country for disambiguation
    const url = `${BASE_URL}/${encodeURIComponent(city)}/?token=${WAQI_TOKEN}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('City not found');
    const data = await res.json();
    if (data.status !== 'ok' || !data.data) throw new Error('City not found');
    return data.data;
}

// Utility: Update main results section
function updateResults(data) {
    document.getElementById('city-name').textContent = `${data.city.name}`;
    document.getElementById('last-update').textContent = `Last updated: ${data.time.s || '--'}`;
    document.getElementById('aqi').textContent = data.aqi ?? '--';
    document.getElementById('main-pollutant').textContent = `Main Pollutant: ${getMainPollutant(data.iaqi)}`;
    document.getElementById('temperature').textContent = data.iaqi.t?.v ?? '--';
    document.getElementById('humidity').textContent = data.iaqi.h?.v ?? '--';
    document.getElementById('wind').textContent = data.iaqi.w?.v ?? '--';
    document.getElementById('health-tip').textContent = 'See AQI and pollutant levels below.';
}

// Utility: Get main pollutant based on highest value
function getMainPollutant(iaqi) {
    if (!iaqi) return '--';
    // Find the pollutant with the highest value (excluding t/h/w)
    const pollutants = Object.entries(iaqi)
        .filter(([key]) => !['t', 'h', 'w'].includes(key))
        .map(([key, val]) => ({ key, value: val.v }));
    if (pollutants.length === 0) return '--';
    const main = pollutants.reduce((max, curr) => curr.value > max.value ? curr : max, pollutants[0]);
    return `${main.key.toUpperCase()} (${main.value})`;
}

// Utility: Clear main results section
function clearResults() {
    document.getElementById('city-name').textContent = '--';
    document.getElementById('last-update').textContent = 'Last updated: --';
    document.getElementById('aqi').textContent = '--';
    document.getElementById('main-pollutant').textContent = 'Main Pollutant: --';
    document.getElementById('temperature').textContent = '--';
    document.getElementById('humidity').textContent = '--';
    document.getElementById('wind').textContent = '--';
    document.getElementById('health-tip').textContent = '--';
}

// ========== 1. Search Form Submit Event ==========
document.getElementById('location-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const city = document.getElementById('city-input').value.trim();
    clearResults();
    try {
        const data = await fetchCityData(city);
        updateResults(data);
    } catch (err) {
        document.getElementById('city-name').textContent = 'City not found!';
    }
});

// ========== 2. Compare Form Submit Event ==========
document.getElementById('compare-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const city1 = document.getElementById('city1').value.trim();
    const city2 = document.getElementById('city2').value.trim();

    try {
        const [data1, data2] = await Promise.all([
            fetchCityData(city1),
            fetchCityData(city2)
        ]);
        displayComparison([data1, data2]);
    } catch (err) {
        document.getElementById('compare-results').innerHTML = `<div class="col-6"><div class="alert alert-danger">One or both cities not found!</div></div>`;
    }
});

// Array iteration: Display comparison cards for both cities
function displayComparison(dataArr) {
    const html = dataArr.map(data => `
        <div class="col-md-4 mb-3">
            <div class="card shadow-sm text-center border-0">
                <div class="card-body">
                    <h5 class="card-title">${data.city.name}</h5>
                    <p class="display-6 fw-bold text-primary">AQI: ${data.aqi ?? '--'}</p>
                    <p class="text-muted">Main Pollutant: ${getMainPollutant(data.iaqi)}</p>
                    <p>Last Updated: ${data.time.s || '--'}</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('compare-results').innerHTML = html;
}

// ========== 3. Dark/Light Mode Toggle Event ==========
const footer = document.querySelector('footer');
footer.addEventListener('dblclick', function () {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
    document.body.classList.toggle('bg-light');
    document.body.classList.toggle('text-dark');
});

// ========== 4. Input Focus Event (Extra Example) ==========
document.getElementById('city-input').addEventListener('focus', function () {
    this.classList.add('border-primary', 'shadow');
});
document.getElementById('city-input').addEventListener('blur', function () {
    this.classList.remove('border-primary', 'shadow');
});

// ========== Initialization ==========
clearResults();
document.getElementById('compare-results').innerHTML = '';
