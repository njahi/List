import React from "react";
import { Text, Progress, Card } from "@mantine/core";
import { useOrders } from "../hooks/useOrders";
import "./ProgressBar.css";
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
      className='card'>
      <Text
        fz='xs'
        tt='uppercase'
        fw={700}
        className='tittle'>
        Monthly goal
      </Text>
      <Text
        fz='lg'
        fw={500}
        className='stats'>
        $5.431 / $10.000
      </Text>
      <Progress
        value={orders.amount}
        mt='md'
        size='lg'
        radius='xl'
        classNames={{
          root: "progressTrack",
          section: " progressSection",
        }}
      />
    </Card>
  );
}
