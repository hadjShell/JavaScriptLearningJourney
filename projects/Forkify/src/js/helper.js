import { TIMEOUT_SEC } from "./config";

// Promisify timeout
export function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject(new Error(`Request took too long! Timeout after ${s} second`)),
      s * 1000
    );
  });
}

export async function AJAX(url = "") {
  const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  if (!response.ok) throw new Error(`${data.message} (${response.status})`);
  const data = await response.json();
  // Look at the json file to figure out why it is data.data
  return data.data;
}
