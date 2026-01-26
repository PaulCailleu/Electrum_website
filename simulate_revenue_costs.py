#!/usr/bin/env python3
"""
Streamlit dashboard for quarterly revenue/cost simulations.
"""

from dataclasses import dataclass

import numpy as np
import plotly.graph_objects as go
import streamlit as st


@dataclass
class Assumptions:
    years: int
    aum_start: float
    aum_growth_q: float
    mgmt_fee_annual: float
    liquidity_spread_bps_q: float
    pool_spread_bps_q: float
    services_start_q: int
    services_bps_q: float
    fixed_cost_q: float
    variable_cost_bps_q: float


def simulate(a: Assumptions) -> dict:
    quarters = a.years * 4
    labels = [f"Q{q + 1}" for q in range(quarters)]

    aum = np.zeros(quarters)
    aum[0] = a.aum_start
    for i in range(1, quarters):
        aum[i] = aum[i - 1] * (1 + a.aum_growth_q)

    mgmt_fee_q = a.mgmt_fee_annual / 4.0
    revenue_mgmt = aum * mgmt_fee_q
    revenue_liquidity = aum * (a.liquidity_spread_bps_q / 10_000)
    revenue_pool = aum * (a.pool_spread_bps_q / 10_000)

    revenue_services = np.zeros(quarters)
    for i in range(quarters):
        if i >= a.services_start_q:
            revenue_services[i] = aum[i] * (a.services_bps_q / 10_000)

    costs_fixed = np.full(quarters, a.fixed_cost_q)
    costs_variable = aum * (a.variable_cost_bps_q / 10_000)

    total_revenue = revenue_mgmt + revenue_liquidity + revenue_pool + revenue_services
    total_costs = costs_fixed + costs_variable
    net = total_revenue - total_costs

    return {
        "labels": labels,
        "aum": aum,
        "revenue_mgmt": revenue_mgmt,
        "revenue_liquidity": revenue_liquidity,
        "revenue_pool": revenue_pool,
        "revenue_services": revenue_services,
        "costs_fixed": costs_fixed,
        "costs_variable": costs_variable,
        "net": net,
    }


def plot(results: dict) -> go.Figure:
    labels = results["labels"]

    rev_mgmt = results["revenue_mgmt"]
    rev_liq = results["revenue_liquidity"]
    rev_pool = results["revenue_pool"]
    rev_services = results["revenue_services"]
    cost_fixed = results["costs_fixed"]
    cost_var = results["costs_variable"]
    net = results["net"]

    fig = go.Figure()

    fig.add_trace(go.Bar(name="Mgmt fee", x=labels, y=rev_mgmt, marker_color="#d6a84e"))
    fig.add_trace(go.Bar(name="Liquidity window spread", x=labels, y=rev_liq, marker_color="#8fb7ff"))
    fig.add_trace(go.Bar(name="Pool spread", x=labels, y=rev_pool, marker_color="#c8c9cf"))
    fig.add_trace(go.Bar(name="Services", x=labels, y=rev_services, marker_color="#38d996"))

    fig.add_trace(go.Bar(name="Fixed costs", x=labels, y=-cost_fixed, marker_color="#1f2937"))
    fig.add_trace(go.Bar(name="Variable costs", x=labels, y=-cost_var, marker_color="#4b5563"))

    fig.add_trace(
        go.Scatter(
            name="Net",
            x=labels,
            y=net,
            mode="lines+markers",
            line=dict(color="#38d996", width=2),
        )
    )

    fig.update_layout(
        title="Quarterly Revenues vs Costs",
        barmode="relative",
        xaxis_title="Quarter",
        yaxis_title="USD",
        legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="left", x=0),
        template="plotly_white",
    )
    fig.update_yaxes(zeroline=True, zerolinecolor="rgba(0,0,0,0.2)")
    return fig



def plot_vs_aum(a: Assumptions) -> go.Figure:
    aum_values = np.linspace(a.aum_start * 0.5, a.aum_start * 3.0, 40)
    mgmt_fee_q = a.mgmt_fee_annual / 4.0

    revenue_mgmt = aum_values * mgmt_fee_q
    revenue_liquidity = aum_values * (a.liquidity_spread_bps_q / 10_000)
    revenue_pool = aum_values * (a.pool_spread_bps_q / 10_000)
    revenue_services = aum_values * (a.services_bps_q / 10_000)

    costs_fixed = np.full_like(aum_values, a.fixed_cost_q)
    costs_variable = aum_values * (a.variable_cost_bps_q / 10_000)

    total_revenue = revenue_mgmt + revenue_liquidity + revenue_pool + revenue_services
    total_costs = costs_fixed + costs_variable
    net = total_revenue - total_costs

    fig = go.Figure()
    fig.add_trace(go.Scatter(name="Total revenue", x=aum_values, y=total_revenue, mode="lines", line=dict(color="#d6a84e", width=2)))
    fig.add_trace(go.Scatter(name="Total costs", x=aum_values, y=total_costs, mode="lines", line=dict(color="#4b5563", width=2)))
    fig.add_trace(go.Scatter(name="Net", x=aum_values, y=net, mode="lines", line=dict(color="#38d996", width=2)))

    fig.update_layout(
        title="Quarterly P&L vs AUM",
        xaxis_title="AUM (USD)",
        yaxis_title="USD per quarter",
        legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="left", x=0),
        template="plotly_white",
    )
    fig.update_yaxes(zeroline=True, zerolinecolor="rgba(0,0,0,0.2)")
    return fig


def main() -> None:
    st.set_page_config(page_title="Electrum Fund — Revenue & Cost Simulator", layout="wide")
    st.title("Revenue & Cost Simulator")
    st.caption("Quarterly model based on site assumptions.")

    with st.sidebar:
        st.header("Assumptions")
        years = st.slider("Years", min_value=1, max_value=10, value=5, step=1)
        aum_start = st.number_input("AUM start (USD)", min_value=1_000_000, value=50_000_000, step=1_000_000)
        aum_growth_q = st.slider("AUM growth per quarter", 0.0, 0.25, 0.06, 0.001, format="%.3f")

        st.subheader("Revenues")
        mgmt_fee_annual = st.slider("Management fee (annual)", 0.005, 0.03, 0.018, 0.001, format="%.3f")
        liquidity_spread_bps_q = st.slider("Liquidity window spread (bps / quarter)", 0.0, 30.0, 8.0, 0.1, format="%.1f")
        pool_spread_bps_q = st.slider("Pool spread (bps / quarter)", 0.0, 30.0, 5.0, 0.1, format="%.1f")

        st.subheader("Services")
        services_start_q = st.slider("Services start (quarter index)", 0, years * 4 - 1, 9, 1)
        services_bps_q = st.slider("Services revenue (bps / quarter)", 0.0, 10.0, 2.0, 0.1, format="%.1f")

        st.subheader("Costs")
        fixed_cost_q = st.number_input("Fixed cost per quarter (USD)", min_value=0, value=350_000, step=25_000)
        variable_cost_bps_q = st.slider("Variable cost (bps / quarter)", 0.0, 20.0, 6.0, 0.1, format="%.1f")

    assumptions = Assumptions(
        years=years,
        aum_start=aum_start,
        aum_growth_q=aum_growth_q,
        mgmt_fee_annual=mgmt_fee_annual,
        liquidity_spread_bps_q=liquidity_spread_bps_q,
        pool_spread_bps_q=pool_spread_bps_q,
        services_start_q=services_start_q,
        services_bps_q=services_bps_q,
        fixed_cost_q=fixed_cost_q,
        variable_cost_bps_q=variable_cost_bps_q,
    )

    results = simulate(assumptions)

    st.plotly_chart(plot(results), width='stretch')
    st.plotly_chart(plot_vs_aum(assumptions), width='stretch')


if __name__ == "__main__":
    main()
