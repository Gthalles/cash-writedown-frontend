import React  from "react";
import { Route, Routes } from "react-router-dom";
import { Payments } from "../pages/Payments";
import { ListTransactions } from "../pages/Transactions/ListTransactions";


export const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={
					<ListTransactions />
				} />
				
				<Route path="/payments-list" element={
					<Payments />
				} />
			</Routes>

			<Routes>
				<Route path="/list/transactions" element={
					<ListTransactions />
				} />
			</Routes>
		</>
	);
};