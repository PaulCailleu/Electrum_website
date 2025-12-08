# Electrum Pipeline — Technical Notes

This document explains the logic, dependencies, and structural flow represented in the `pipeline.mmd` Mermaid diagram.

---

## 1. Overview

The pipeline models the interactions between the core actors of the Electrum ecosystem:

- Brokers  
- Deposit / Custodian Bank  
- NAV Calculation Engine  
- Onboarding Platform  
- Pro Investors  
- CEXs (crypto exchanges)  
- Retail Investors  

The diagram highlights both off-chain and on-chain flows, as well as the movement of assets, stablecoins, tokens, and informational signals.

---

## 2. Core Flows

### **2.1 Brokers ↔ Deposit Bank**
- **Assets flow:** Brokers supply or route asset movements toward the deposit bank.  
- **Orders:** The deposit bank sends execution instructions back to brokers.  
This loop represents the core execution cycle of the fund.

---

### **2.2 NAV Calculation Engine**
Two inputs feed the NAV engine:
- **Exposure → from the Deposit Bank**  
- **Prices → from Brokers**  
These combine to compute the real-time or periodic NAV used for token minting/redemptions.

---

### **2.3 Onboarding Platform ↔ Deposit Bank**
- Stablecoins from the onboarding interface are converted or managed via the deposit bank.  
This represents the flow where investors indirectly fund the underlying assets.

---

## 3. Investor Flows

### **3.1 Pro Investors ↔ Onboarding Platform**
Pro investors interact directly:
- **Stablecoins** (in/out)
- **Tokens** (in/out)  
This shows the professional channel for acquiring or redeeming Electrum tokens.

---

### **3.2 CEX ↔ Onboarding Platform**
CEXs integrate Electrum tokens:
- **Stablecoins** and **Tokens** flow both ways.  
This is the B2B2C distribution layer powering scale.

---

### **3.3 Retail Investors ↔ CEX**
Retail investors access Electrum via CEXs:
- Stablecoins in exchange for tokens  
- Tokens redeemed back into stablecoins  

This reflects the mass-market retail route.

---

### **3.4 Pro Investors ↔ CEX**
Pro investors may also use CEXs as an access route:
- Stablecoins and tokens flow in both directions.  

This redundancy ensures liquidity and market depth.

---

## 4. Structural Logic

- The **deposit bank** is the operational core on the traditional finance side.  
- The **NAV engine** is central for valuation and token lifecycle.  
- The **onboarding platform** is the bridge between the real-world assets and the blockchain system.  
- **CEXs** extend distribution to a global user base.  
- **Investors** (retail + professional) interact through different channels but ultimately access the same tokenized fund.

---

## 5. Recommended Use

- Use this diagram in your pitch deck for a high-level technical overview.  
- Use it in internal documentation to define API boundaries and dataflows.  
- Export it as SVG for polished design work.  
- Keep `pipeline.mmd` as the editable source of truth.

---

## 6. Future Extensions

Potential expansions of the pipeline:
- Oracle layer (NAV on-chain publishing)
- Smart contract architecture (Growth / Yield)
- Compliance / KYC integration
- Risk engine flows
- Token mint/burn pipeline

This document and diagram are designed to evolve naturally along with the architecture.

