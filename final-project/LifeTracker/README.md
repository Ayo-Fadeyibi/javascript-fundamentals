# 📊 LifeTracker REST API

LifeTracker is a modular RESTful API built with **Node.js and Express** that manages tasks, transactions, and integrates real-time stock market data using the Alpha Vantage API.

This project was built to strengthen backend fundamentals including routing, external API integration, data transformation, and real-world debugging.

---

## 🚀 Overview

LifeTracker demonstrates:

- RESTful API design
- Modular routing architecture
- External API integration
- Data transformation & abstraction
- Proper HTTP status handling
- Structured JSON responses
- Real-world debugging & error handling

Stock data is powered by the Alpha Vantage API.

---

## 🛠 Tech Stack

- Node.js (v22+)
- Express.js
- Native Fetch API (built into Node)
- JavaScript (ES6+)
- Nodemon

No third-party HTTP clients were used — the project leverages Node’s built-in `fetch` to reduce dependencies.

---

## 📂 Project Structure

LifeTracker/
│
├── server.js          
├── routes/
│   ├── tasks.js       
│   ├── transactions.js 
│   └── stock.js        
│
├── data/
│   └── store.js       
│
└── public/             

---

## 📡 API Endpoints

### 📝 Tasks
`GET /tasks` - Retrieve all tasks  
`POST /tasks` - Create a new task

### 💰 Transactions
`GET /transactions` - Retrieve all transactions  
`POST /transactions` - Log a new transaction

### 📈 Stock Data
`GET /stock` - Get default market overview  
`GET /stock?symbol=AAPL` - Get specific stock data

---

## 🔮 Roadmap & Future Features

To evolve LifeTracker from a core API into a production-ready application, the following features are planned:

- [ ] **Database Persistence:** Migrate from in-memory `store.js` to **MongoDB** or **PostgreSQL** for permanent data storage.
- [ ] **User Authentication:** Implement **JWT (JSON Web Tokens)** and bcrypt for secure user registration and login.
- [ ] **Middleware Implementation:** Add request validation (using Joi or Zod) and centralized error-handling middleware.
- [ ] **Portfolio Analytics:** Create logic to calculate total net worth by combining transaction history with real-time stock prices.
- [ ] **Rate Limiting:** Protect the API from abuse and manage Alpha Vantage API tier limits using `express-rate-limit`.
- [ ] **Automated Testing:** Implement unit and integration tests using **Jest** and **Supertest**.
- [ ] **Interactive Dashboard:** Build out the `/public` directory with a React or Vue.js frontend to visualize the data.

---

## 📦 Example Stock Response

```json
{
  "symbol": "IBM",
  "lastRefreshed": "2026-02-25",
  "timeZone": "US/Eastern",
  "prices": [
    {
      "date": "2026-02-25",
      "open": 233.25,
      "high": 239.55,
      "low": 231.22,
      "close": 237.61,
      "volume": 8560068
    }
  ]
}
