import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/dashboard-products-page";

export const meta: Route.MetaFunction = ({ params }) => [
  { title: `Product ${params.productsId} | wemake` }
];

export default function DashboardProductsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Product Details" subtitle="View and manage your product." />
      <div className="grid grid-cols-2 gap-10">
        {/* Product details will be rendered here */}
      </div>
    </div>
  );
} 