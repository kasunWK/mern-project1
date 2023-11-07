import { useEffect, useState } from "react";
import {
  useGetProductsByCategoriesMutation,
  useLazyGetProductsQuery,
} from "../../store/api/productApi";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router";

export enum Categories {
  genareter,
  screen,
  lights,
  sounds,
}

type Props = {
  category?: Categories;
  search?: string;
};

const Products = ({ category, search }: Props) => {
  const [fetchProducts, { data: products }] = useLazyGetProductsQuery();
  const [fetchProductsByCategories, { data: productsByCategories }] =
    useGetProductsByCategoriesMutation();
  const [filteredProducts, setFilteredProducts] = useState<ItemType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterProductsBySearch = (item: ItemType) => {
      if (search) {
        return item.name.toUpperCase().includes(search.toUpperCase());
      }
      return true;
    };

    setFilteredProducts(
      (category
        ? productsByCategories?.filter((e) => filterProductsBySearch(e))
        : products?.filter((e) => filterProductsBySearch(e))) ?? []
    );
  }, [products, productsByCategories, search, category]);

  useEffect(() => {
    if (category) {
      fetchProductsByCategories({ category });
    } else {
      fetchProducts({});
    }
  }, [category]);

  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  return (
    <Row gutter={10}>
      {filteredProducts.map((item) => (
        <Col key={item._id}>
          <Card
            onClick={() => navigate("/products/" + item._id)}
            hoverable
            bodyStyle={{ paddingBottom: "5px" }}
            style={{ width: 240, margin: "5px" }}
            cover={
              <img
                alt={item.name}
                placeholder=""
                src={`http://localhost:3001/uploads/${item.image}`}
                onError={addImageFallback}
                style={{ height: "200px", width: "100%" }}
              />
            }
          >
            <Meta title={item.name} description={item.description} />
            <div className="mt-5 font-bold">{"Rs : " + item.price}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Products;
