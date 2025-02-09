const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Dummy car data
const cars = [
    { id: 1, name: "Toyota Corolla", price: "$15,000" },
    { id: 2, name: "Honda Civic", price: "$18,000" },
    { id: 3, name: "Suzuki Alto", price: "$7,000" },
    { id: 4, name: "Hyundai Elantra", price: "$20,000" },
    { id: 5, name: "Kia Sportage", price: "$25,000" }
];

// Search API Endpoint
app.get("/search", (req, res) => {
    const query = req.query.q?.toLowerCase();

    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }

    const results = cars.filter(car => car.name.toLowerCase().includes(query));
    res.json(results);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
