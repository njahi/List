import { Table } from "react-bootstrap";
import format from "date-fns/format";
import { useAssets } from "../hooks/useAssets";

export function formatDateTime(timestamp) {
  const fileDate = new Date(timestamp);
  return format(fileDate, "dd MMM yyyy, HH:mm:ss");
}

function DataDisplay() {
  const { assets, loadingAssets, error } = useAssets();

  if (loadingAssets) {
    return <h2>Loading</h2>;
  }
  if (error) {
    console.log("error fetching data");
  }

  return (
    <Table
      striped
      bordered
      hover
      variant='dark'>
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
