"use server";


import { BASEURL } from "../api";


export const getWhyWeChoose = async (
  page: number = 1,
  limit: number = 10,
): Promise<any> => {
const url = `${BASEURL}/why-choose?populate[coverImage][fields][0]=url&populate[whyChooseComponent][populate][whyChoose][populate]=*`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};


export const getTrusted = async (
  page: number = 1,
  limit: number = 10,
): Promise<any> => {
const url = `${BASEURL}/trusted-by?populate[coverImage][fields][0]=url&populate[logoLists][populate]=*`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};

export const getShopping = async (
  page: number = 1,
  limit: number = 10,
): Promise<any> => {
const url = `${BASEURL}/shopping?populate[ShoppingCardGrid][populate]=*`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};

export const getAreaWeService = async (
  page: number = 1,
  limit: number = 10,
): Promise<any> => {
  const url = `${BASEURL}/area-we-service?populate=imageOfLocation`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });



  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};

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


  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};

export const getFeatureHighlights = async (): Promise<any> => {
  const url = `${BASEURL}/main-landing?populate[CardGirdFeatures][populate][FeatureCards][populate]=icon`;
const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};


export const getWindowRange = async (): Promise<any> => {
  const url = `${BASEURL}/window-range?populate[WindowRangeGrid][populate][WindowRangeGrid][populate]=cover`;
const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return await response.json();
};