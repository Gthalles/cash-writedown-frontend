import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";


export const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};