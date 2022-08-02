const API_URL = process.env.REACT_APP_API_URL;

export const fetchCampuses = async () => {
  return await (
    await fetch(`${API_URL}/campuses`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export const fetchMajorAreas = async () => {
  return await (
    await fetch(`${API_URL}/majorareas`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ).json();
};

export const postLecture = async (data) => {
  return await (
    await fetch(`${API_URL}/lectures`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
  ).json();
};

export const postMileage = async (data) => {
  return await (
    await fetch(`${API_URL}/lectures/mileage`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
  ).json();
};
