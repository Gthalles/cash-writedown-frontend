import React  from "react";
import { Route, Routes } from "react-router-dom";
import { Payments } from "../pages/Payments";


export const Router = () => {
	return (
		<Routes>
			<Route path="/payments-list" element={
				<Payments />
			} />
		</Routes>
	);
};