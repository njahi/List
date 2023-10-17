export async function getAssets() {
  try {
    const res = await fetch("http://localhost:5000/api/asset");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("error encounterd");
  }
}
export async function createAsset(newData) {
  try {
    const response = await fetch("http://localhost:5000/api/asset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error(error);
  }
}
export async function deleteAsset(id) {
  try {
    const response = await fetch(`http://localhost:5000/api/asset/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error(error);
  }
}
