import React from "react";
import Link from "next/link";
import thumbnail from "../../assets/generic_thumbnail.jpg";

export interface ProductCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="card">
      <div
        className="w-full"
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url("${imageUrl ?? thumbnail.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>

        <Link href="/" className="button mt-3">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
