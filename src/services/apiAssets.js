export async function getAssets() {
  try {
    const res = await fetch("http://localhost:5000/api/asset");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("error encounterd");
  }
}
export async function getOrders() {
  try {
    const res = await fetch("http://localhost:5000/api/order");

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
export async function createOrder(data) {
  try {
    const response = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
export async function editAsset({ id, data }) {
  try {
    const response = await fetch(`http://localhost:5000/api/asset/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}
export async function addUser(data) {
  console.log(data);
  try {
    const response = await fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error(error);
  }
}
