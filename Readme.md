# 🌤️ AirLens — Real-Time Air Quality & Weather Insights  

AirLens is a modern web application that provides **real-time air quality (AQI)** and **weather data** for cities around the world.  
It uses the **WAQI (World Air Quality Index)** public API to display live environmental data with an intuitive Bootstrap-powered interface.  

---

##  Table of Contents  

1. Overview
2. Features
3. Tech Stack
4. Project Structure
5. Setup & Installation
6. API Configuration
7. How It Works 
8. Usage  
9. Future Enhancements
10. License

---

##  Overview  

**AirLens** is a responsive web app that allows users to:  
- Search for air quality and weather data by **city and country**.  
- **Compare AQI levels** between two cities side by side.  
- View the **main pollutant**, **temperature**, **humidity**, and **wind speed**.  
- Get a simple **health tip** based on air conditions.  
- Toggle between **light and dark modes** (via double-click on the footer).  

The app is built with **vanilla JavaScript**, **Bootstrap 5**, and the **WAQI API** for real-time data fetching.  

---

##  Features  

✅ **Real-time AQI & weather info** using the WAQI API.  
✅ **City comparison tool** for AQI visualization.  
✅ **Clean, responsive Bootstrap UI**.  
✅ **Automatic pollutant detection** (based on dominant pollutant).  
✅ **Error handling** for invalid or unavailable cities.  
✅ **Interactive animations and hover effects** on cards.  
✅ **Dark/light mode toggle** for better readability.  

---

##  Tech Stack  

| Category | Technology |
|-----------|-------------|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| Styling Framework | Bootstrap 5.3.8 |
| API | World Air Quality Index (WAQI) API |
| Fonts & Icons | Bootstrap Icons, Emoji |
| Build Tools | Native browser ES modules |

---

## Project Structure  


AirLens
│
├── index.html          # Main webpage structure (HTML)
├── style.css           # Custom styles and animations
├── index.js            # Core logic, event handling, API calls
├── config.js           # Contains your API token (not to be uploaded)
├── README.md           # Project documentation (this file)

## Creating the project
1. Created a directory called AirLens in the terminal through mkdir AirLens.
2. Opened the directory on visual studio code and initialized by running the command git init.
3. Created a new repository on github called AirLens.
4. Linked the remote repository to the local one and commited changes then pushed them to github.

##  Setup & Installation  

Follow these steps to run the project locally:

1. **Clone this repository:**
   bash
   git clone https://github.com/your-username/AirLens.git
   
2. **Navigate into the project folder:**
   ```bash
   cd AirLens
   ```
3. **Create a `config.js` file** in the root directory:
   ```javascript
   // config.js
   export const WAQI_TOKEN = 'YOUR_WAQI_API_TOKEN';
   ```
4. **Open `index.html`** in your browser directly, or serve it locally using VS Code Live Server.

   bash
   # Using Live Server extension or any static server


---

##  API Configuration  

AirLens uses the **WAQI API** for real-time air quality data.  

- **API Endpoint:**  
  ```
  https://api.waqi.info/feed/{city}/?token=YOUR_WAQI_API_TOKEN
  ```

- **Get your free token:**  
  Visit [https://aqicn.org/data-platform/token/](https://aqicn.org/data-platform/token/) and sign up for a **free API key**.

- **Example API call:**  
  ```bash
  https://api.waqi.info/feed/Nairobi/?token=your_token_here
  ```

---

## 🔍 How It Works  

### 1️⃣ Search Form  
Users can input a city and (optionally) a country or state.  
When submitted, the app:
- Fetches AQI and weather data from WAQI API.
- Updates the DOM with:
  - AQI value
  - Main pollutant
  - Temperature
  - Humidity
  - Wind speed
  - Last update time

### 2️⃣ Comparison Tool  
Allows comparing AQI between two cities:
- Fetches both cities’ data concurrently using `Promise.all()`.
- Displays two cards with AQI and pollutant data.

### 3️⃣ Dark Mode Toggle  
Double-clicking the footer toggles between light and dark modes by switching CSS classes dynamically.

### 4️⃣ UI Enhancements  
Hover effects, responsive layout, and animated transitions enhance user experience.

---

## 💻 Usage  

1. Open the app in your browser.  
2. Enter a **city name** (and optional region/country).  
3. Click **“Get Data”** to view real-time air quality and weather info.  
4. To compare, enter two city names in the “Compare Two Locations” section and click **“Compare AQI”**.  
5. Double-click the footer to toggle dark/light mode.

## 🚀 Future Enhancements  

- Add **interactive charts** for AQI trends using Chart.js or Recharts.  
- Integrate **geolocation** to auto-detect user’s city.  
- Include **health recommendations** based on AQI category.  
- Support for multiple **API providers** (e.g., OpenAQ, AirNow).  
- Deploy on **GitHub Pages** or **Vercel** for public access.  


##  License  

This project is licensed under the **MIT License** — free to use, modify, and distribute.  

---

## Author  

**Peter Wainaina**  
🌐 [GitHub](https://github.com/Wainaina-7)  
✉️ [Email](peterynaenah23@gmail.com)
