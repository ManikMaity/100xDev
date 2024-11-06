import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProductCard = ({product = 1}) => {
  
  const {data, loading, isError, error} = useFetch(`https://fakestoreapi.com/products/${product}`);
  
    if (loading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={styles.card}>
      <div>
        <img
          src={data.image || "https://via.placeholder.com/300"}
          alt={data.title || "No title"}
          style={styles.image}
        />
        <div style={styles.content}>
          <h2 style={styles.title}>{data.title || "No title"}</h2>
          <p style={styles.category}>{data.category || "No category"}</p>
          <p style={styles.description}>
            {data.description || "No description"}
          </p>
          <p style={styles.price}>${data.price || "No price"}</p>
          <div style={styles.rating}>
            <span>Rating: {data.rating?.rate || "No rating"}</span>
            <span> ({data.rating?.count || "No reviews"} reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "16px",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "8px 0",
  },
  category: {
    fontSize: "14px",
    color: "#888",
    margin: "4px 0",
  },
  description: {
    fontSize: "14px",
    margin: "8px 0",
    color: "#555",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    fontSize: "14px",
    color: "#555",
    marginTop: "8px",
  },
};

export default ProductCard;
