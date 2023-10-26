import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export function PopUp1({ show, onClose, id }) {
  const [assets, setAssets] = useState([]);
  const fetchAssets = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/asset/${id}`);

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
    <Modal
      show={show}
      onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {assets && (
          <div>
            <div>
              <label>Asset Name: {assets.name}</label>
            </div>
            <div>
              <label>Asset Value: {assets.value}</label>
            </div>
            <div>
              <label>Year of purchase: {assets.year}</label>
            </div>
            <div>
              <label>Status: </label>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='secondary'
          onClick={onClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
