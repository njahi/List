import React from "react";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container
      style={{
        paddingTop: "rem(80px",
        paddingBottom: "rem(80px)",
      }}>
      <div
        style={{
          textAlign: "center",
          fontWeight: "900",
          fontSize: "rem(38px)",
          lineHeight: "1",
          marginBottom: "calc(1.5 * var(--mantine-spacing-xl))",
          color: "var(--mantine-color-gray-2)",
        }}>
        404
      </div>
      <Title
        style={{
          fontFamily: "Greycliff CF, var(--mantine-font-family)",
          textAlign: "center",
          fontWeight: "900",
          fontSize: "rem(38px)",
        }}>
        You have found a secret place.
      </Title>
      <Text
        c='dimmed'
        size='lg'
        ta='center'
        style={{
          maxWidth: "rem(500px)",
          margin: "auto",
          marginTop: " var(--mantine-spacing-xl)",
          marginBottom: "calc(1.5 * var(--mantine-spacing-xl))",
        }}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify='center'>
        <Link to='/home'>
          <Button
            variant='subtle'
            size='md'
            type='primary'>
            Take me back to the Home Page
          </Button>
        </Link>
        {/* <Button
          variant='subtle'
          size='md'>
          Take me back to home page
        </Button> */}
      </Group>
    </Container>
  );
}
