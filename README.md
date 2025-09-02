# Weather Dashboard 🌤️

A **React-based Weather Dashboard** that lets users search and view live weather conditions for any city.  
Built with **React + Vite**, styled with **Tailwind CSS**, and powered by the **OpenWeatherMap API**.

---

## Features
- Search weather by city name  
- Display temperature, humidity, wind speed, and weather condition  
- Display city-related images roughly matching current weather conditions
- Displays the current time from the user’s device 
- 5-day forecast  
- Error handling for invalid city names or network issues  
- Responsive design for mobile and desktop  

---

## Tech Stack
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [OpenWeatherMap API](https://openweathermap.org/api)  

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)  
- An [OpenWeatherMap API Key](https://home.openweathermap.org/api_keys)  

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

# Install dependencies
npm install

# Create a .env file and add your API key
VITE_OPENWEATHER_API_KEY=your_api_key_here

# Start development server
npm run dev
