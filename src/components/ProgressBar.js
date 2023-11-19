import React from "react";
import { Text, Progress, Card } from "@mantine/core";
import { useOrders } from "../hooks/useOrders";
import classes from "./ProgressBar.module.css";
export default function ProgressBar() {
  const { orders, loadingOrders, error } = useOrders();
  if (loadingOrders) {
    return <h2>Loading</h2>;
  }
  if (error) {
    console.log("error fetching data");
  }

  return (
    <Card
      withBorder
      radius='md'
      p='xl'
      className={classes.card}>
      <Text
        fz='xs'
        tt='uppercase'
        fw={700}
        className={classes.tittle}>
        Order
      </Text>
      <Text
        fz='lg'
        fw={500}
        className={classes.stats}>
        {orders.map((order) => (
          <div key={order.id}>{order.name}</div>
        ))}
      </Text>
      <Progress
        value={orders.map((order) => (
          <div key={order.id}>{order.amount}</div>
        ))}
        mt='md'
        size='lg'
        radius='xl'
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
    </Card>
  );
}
