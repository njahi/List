export async function getAssets() {
  try {
    const res = await fetch("http://localhost:5000/api/asset");

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error?.message);
  }
}
export async function createAset(newData) {
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
