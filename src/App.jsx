import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { Today, TrendingUp, AccountBalance, AttachMoney } from "@mui/icons-material";

import { Box, Toolbar, Drawer, CssBaseline, AppBar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Link,  } from "@mui/material";

const drawerWidth = 240;

export const App = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						U Write Down
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar>
					<h4>LOGO</h4>
				</Toolbar>
				<Divider />
				<List>
					<Link href="/dashboard">
						<ListItem button key="Dashboard" >
							<ListItemIcon >
								<AccountBalance />
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>
					</Link>

					<Link  href="activities">
						<ListItem button key="Activities">
							<ListItemIcon>
								<Today />
							</ListItemIcon>
							<ListItemText primary="Activities" />
						</ListItem>
					</Link>


					<Link href="/list/transactions">
						<ListItem button key="Finances">
							<ListItemIcon>
								<AttachMoney />
							</ListItemIcon>
							<ListItemText primary="Finances" />
						</ListItem>
					</Link>

					<Link href="/economy">
						<ListItem button key="Economy">
							<ListItemIcon>
								<TrendingUp />
							</ListItemIcon>
							<ListItemText primary="Economy" />
						</ListItem>
					</Link>
				</List>
				<Divider />
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 5 }}
			>
				<Toolbar />
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Box>
		</Box>
	);
};