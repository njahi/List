import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import format from "date-fns/format";

export function formatDateTime(timestamp) {
  const fileDate = new Date(timestamp);
  return format(fileDate, "dd MMM yyyy, HH:mm:ss");
}

function DataDisplay() {
  const [assets, setAssets] = useState([]);

  // Function to fetch assets from the server
  const fetchAssets = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/asset");
      const data = await response.json();
      setAssets(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Profit</th>
          <th>Loss</th>
          <th>Year</th>
          <th>dateCreated</th>
          <th>dateUpdated</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td>{asset.name}</td>
            <td>{asset.value}</td>
            <td>{asset.profit}</td>
            <td>{asset.loss}</td>
            <td>{asset.year}</td>
            <td>{formatDateTime(asset.dateCreated)}</td>
            <td>{formatDateTime(asset.dateUpdated)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default DataDisplay;
