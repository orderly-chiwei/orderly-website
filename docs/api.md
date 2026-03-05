# Orderly Network - API Reference

首頁數據 (TVL, 24h Trading Volume, Live Builders, Chains) 及 Newsletter 訂閱所使用的 API。

---

## 1. TVL (Total Value Locked)

```
GET https://api.orderly.org/v1/public/balance/stats
```

**Response**

```json
{
  "success": true,
  "data": {
    "total_holding": 21390000
  }
}
```

**取值**: `data.total_holding`

**顯示格式**: `$21.39M` / `$1.23B`（>= 1B 顯示 B，否則顯示 M，保留兩位小數）

---

## 2. 24h Trading Volume

```
GET https://api.orderly.org/v1/public/futures
```

**Response**

```json
{
  "success": true,
  "data": {
    "rows": [
      { "symbol": "PERP_BTC_USDC", "24h_amount": 12500000 },
      { "symbol": "PERP_ETH_USDC", "24h_amount": 8700000 }
    ]
  }
}
```

**取值**: 將 `data.rows` 中每筆的 `24h_amount` 加總

**顯示格式**: 同 TVL

---

## 3. Live Builders

```
GET https://api.orderly.org/v1/public/broker/name
```

**Response**

```json
{
  "success": true,
  "data": {
    "rows": [
      { "broker_name": "WOOFi Pro" },
      { "broker_name": "Raydium" }
    ]
  }
}
```

**取值**: `data.rows.length`（陣列長度 = builder 數量）

**顯示格式**: `261+`（整數 + `+` 後綴）

---

## 4. Chains

```
GET https://api.orderly.org/v1/public/chain_info
```

**Response**

```json
{
  "success": true,
  "data": {
    "rows": [
      { "chain_id": 42161, "chain_name": "Arbitrum" },
      { "chain_id": 10, "chain_name": "Optimism" }
    ]
  }
}
```

**取值**: `data.rows.length`（陣列長度 = 支援的 chain 數量）

**顯示格式**: `17+`（整數 + `+` 後綴）

---

## 5. Newsletter 訂閱

```
POST https://orderly.network/api/subscribe
Content-Type: application/json
```

**Request Body**

```json
{
  "email": "user@example.com"
}
```

**Response**: 未特別處理 response body，僅以 HTTP status 判斷成功與否。

**前端驗證**: email 非空且包含 `@`。

---

## Fallback 預設值

當任一 stats API 請求失敗時，使用以下預設值：

| 指標 | 預設值 |
|------|--------|
| TVL | $21,390,000 |
| 24h Trading Volume | $42,500,000 |
| Live Builders | 261 |
| Chains | 17 |
