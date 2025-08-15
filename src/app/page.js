import * as React from "react";
import {
  Grid,
  Container,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Card,
  CardMedia,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
// import Image from "next/image";

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ minHeight: "100vh", padding: 0 }}>
      <TopBar />
      <LinkMenu />
      <FoodList />
    </Container>
  );
}

function TopBar() {
  return (
    <Card
      sx={{
        maxWidth: 1920,
        padding: 1,
        backgroundColor: "secondary.main",
        borderRadius: 2,
        marginBottom: 1,
      }}
    >
      <CardMedia sx={{ height: 300 }} image="/photo.jpeg" title="photoTopBar" />
    </Card>
  );
}

function LinkMenu() {
  return (
    <Container
      maxWidth={false}
      sx={{
        borderRadius: 2,
        backgroundColor: "primary.main",
        padding: 1,
        marginBottom: 1,
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid
          container
          spacing={1}
          direction={"row"}
          className="bg-gray-200 p-2 rounded-xl"
          size={4}
        >
          <AccountCircleOutlinedIcon
            fontSize="large"
            className="align-middle"
            color="secondary"
          />
          <div>
            <h3 className="text-l">Profile</h3>
            <h4 className="text-sm">All detailed about resturant</h4>
          </div>
        </Grid>

        <Grid
          container
          spacing={1}
          direction={"row"}
          className="bg-gray-200 p-2 rounded-xl"
          size={4}
        >
          <EventNoteOutlinedIcon
            fontSize="large"
            className="align-middle"
            color="secondary"
          />
          <div>
            <h3 className="text-l">Menu</h3>
            <h4 className="text-sm">Resturant menu items</h4>
          </div>
        </Grid>

        <Grid
          container
          spacing={1}
          direction={"row"}
          className="bg-gray-200 p-2 rounded-xl"
          size={4}
        >
          <VrpanoOutlinedIcon
            fontSize="large"
            className="align-middle"
            color="secondary"
          />
          <div>
            <h3 className="text-l">Banner</h3>
            <h4 className="text-sm">Banner requests resturant create them</h4>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

function FoodList() {
  return (
    <Grid container direction={"row"}>
      <ExclusiveDeals />
      <HappyHoursMenu />
    </Grid>
  );
}

function ExclusiveDeals() {
  return (
    <TableContainer className="rounded-2xl border-2">
      <TableHead>ExclusiveDeals</TableHead>
    </TableContainer>
  );
}

function HappyHoursMenu() {
  return (
    <TableContainer className="rounded-2xl border-2">
      <TableHead>HappyHoursMenu</TableHead>
    </TableContainer>
  );
}
