import { Modal, Button } from "react-bootstrap";
import { useAssets } from "../hooks/useAssets";

// const assignees = [
//   {
//     id: "1",
//     name: "John Saga",
//     age: "27",
//   },
//   {
//     id: "2",
//     name: "Lynn Njeri",
//     age: "30",
//   },
//   {
//     id: "3",
//     name: "HUmphrey wanjau",
//     age: "37",
//   },
// ];

export function PopUp1({ show, onClose, id }) {
  const { assets, loadingAssets, error } = useAssets();

  const asset = assets?.find((asset) => asset?.id === id);
  console.log(asset);

  if (loadingAssets) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.log("error fetching data");
  }
  return (
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {asset && (
          <div key={id}>
            <div>
              <label>Asset Name: {asset.name}</label>
            </div>
            <div>
              <label>Asset Value: {asset.value}</label>
            </div>
            <div>
              <label>Year of purchase: {asset.year}</label>
            </div>
          </div>
        )}
        {/* {asset.map((a) => (
          <div key={id}>
            <div>
              <label key={id}>Asset Name: {a.name}</label>
            </div>
          </div>
        ))} */}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
