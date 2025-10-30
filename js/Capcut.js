// mock-subscription-server.js
// Chạy: node mock-subscription-server.js
// Mục đích: mock JSON subscription cho dev (CapCut-like hoặc RevenueCat-like)

const express = require('express');
const app = express();

app.use(express.json());

// Simple request logger (debug)
app.use((req, res, next) => {
  console.log(`[mock] ${req.method} ${req.originalUrl} Host:${req.headers.host}`);
  next();
});

// Allow CORS for easy testing from browser/tools (dev only)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.all('*', (req, res) => {
  try {
    const host = (req.headers.host || '').toLowerCase();
    const isCapCutLike = host.includes('capcut') || host.includes('capcutapi');

    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (isCapCutLike) {
      // CapCut-like response example
      return res.json({
        code: 0,
        message: "ok",
        data: {
          has_subscription: true,
          vip_expire_time: 4102444800, // 2100-01-01 unix timestamp
          product_id: "com.capcut.pro.yearly",
          store: "app_store"
        }
      });
    }

    // RevenueCat-like example
    return res.json({
      subscriber: {
        entitlements: {
          Pro: {
            expires_date: "2100-01-01T00:00:00Z",
            purchase_date: "2025-11-01T00:00:00Z",
            product_identifier: "com.example.pro"
          }
        },
        subscriptions: {
          "com.example.pro": {
            expires_date: "2100-01-01T00:00:00Z",
            original_purchase_date: "2025-11-01T00:00:00Z",
            purchase_date: "2025-11-01T00:00:00Z",
            store: "app_store"
          }
        }
      }
    });
  } catch (err) {
    console.error('[mock] ERROR', err);
    res.status(500).json({ error: 'internal mock server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Mock server listening on http://localhost:${port}`));