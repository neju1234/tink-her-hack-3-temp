const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS to allow frontend to communicate with backend
app.use(cors());
app.use(express.json());

// Dummy product data (replace this with a real database)
const items = [
    { id: 1, name: "iPhone 13", category: "Mobile Phones" },
    { id: 2, name: "Toyota Corolla", category: "Cars" },
    { id: 3, name: "Dell Laptop", category: "Computers" },
    { id: 4, name: "Samsung TV", category: "TV-Audio-Video" },
    { id: 5, name: "Honda Motorcycle", category: "Motorcycles" },
    { id: 6, name: "Karachi Apartment", category: "Houses" }
];

// Search API Endpoint
app.get("/search", (req, res) => {
    const query = req.query.q?.toLowerCase();

    if (!query) {
        return res.status(400).json({ message: "Search query is required" });
    }

    // Filter items based on search term
    const results = items.filter(item =>
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
    );

    res.json(results);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
