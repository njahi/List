import { Modal, Button } from "react-bootstrap";
import { useGetAsset } from "../hooks/useGetAsset";

export function PopUp1({ show, onClose, id }) {
  const { assets, loadingAssets, error } = useGetAsset();
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
        {assets && (
          <div key={id}>
            <div>
              <label>Asset Name: {assets.name}</label>
            </div>
            <div>
              <label>Asset Value: {assets.value}</label>
            </div>
            <div>
              <label>Year of purchase: {assets.year}</label>
            </div>
          </div>
        )}
        {/* {assets.map((asset) => (
          <div key={asset.id}>
            <div>
              <label>Asset Name: {asset.name}</label>
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
