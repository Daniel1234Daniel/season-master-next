"use server";


import { BASEURL } from "../api";


export const getHeroSection = async (
  page: number = 1,
  limit: number = 10,
): Promise<any> => {
  const url = `${BASEURL}/hero-section?populate=heroimage`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response, " response body");

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};
