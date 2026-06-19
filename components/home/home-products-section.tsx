import ProductSection from "../products/product-section";
import { productCatalog } from "../products/product-catalog";

const HomeProductsSection = () => (
  <ProductSection
    id="home-products-heading"
    badge="6 Product Categories"
    theme="dark"
    title={
      <>
        Our <span className="steel-text">Stainless Steel</span>
        <br />
        Products
      </>
    }
    description="Semi-manufactured stainless steel in every form your operation requires - prime, ex-prime and 2nd choice quality, globally delivered."
    products={productCatalog}
    cardCtaLabel="View Details"
    cta={{
      href: "/products",
      label: "View Full Catalog",
      ariaLabel: "View all stainless steel products",
    }}
  />
);

export default HomeProductsSection;
