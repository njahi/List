import React from "react";
import { Text, Progress, Card } from "@mantine/core";
import "./ProgressBar.css";
export default function ProgressBar() {
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
        className='text'>
        Monthly goal
      </Text>
      <Text
        fz='lg'
        fw={500}
        className='stats'>
        $5.431 / $10.000
      </Text>
      <Progress
        value={}
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
