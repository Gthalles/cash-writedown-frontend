import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import { Box, Toolbar, Drawer, CssBaseline, AppBar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const drawerWidth = 240;

export const App = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				style={{ backgroundColor: "#1976d2"}}
				sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Core Write Down
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
				<Toolbar style={{ backgroundColor: "#1976d26f"}} />

				<Divider />

				<List>
					<ListItem button key="Dashboard" >
						<ListItemIcon >
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>

					<ListItem button key="Atividades">
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Atividades" />
					</ListItem>

					<ListItem button key="Finanças" >
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Finanças" />
					</ListItem>

					<ListItem button key="Econômia">
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Econômia" />
					</ListItem>
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