import { useEffect, useState } from "react";
import {
  useGetProductsByCategoriesMutation,
  useLazyGetProductsQuery,
} from "../../store/api/productApi";
import { Button, Card, Col, Row, message } from "antd";
import Meta from "antd/es/card/Meta";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addItemToCart } from "../../store/features/cartSlice";
import uuid from "react-uuid";
import { selectUser } from "../../store/api/userApi";
import ProductAddToCart from "./productAddToCart";

export enum Categories {
  stage,
  genareter,
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
  const dispatch = useAppDispatch();
  const [msg, msgContext] = message.useMessage();
  const user = useAppSelector(selectUser);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<undefined | ItemType>();

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

  const addToCart = (item: ItemType) => {
    setShowAddToCart(true);
    setSelectedItem(item);
  };

  const addImageFallback = (event: any) => {
    event.currentTarget.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
  };

  const onAddToCart = (from: Date, to: Date) => {
    if (selectedItem) {
      dispatch(
        addItemToCart({
          ...selectedItem,
          id: uuid(),
          order_from_date: from,
          order_to_date: to,
        })
      );
      msg.success("Item Added to Cart");
      setShowAddToCart(false);
    }
  };

  return (
    <Row gutter={10}>
      {msgContext}
      <ProductAddToCart
        isModalOpen={showAddToCart}
        setShowModal={setShowAddToCart}
        onOk={onAddToCart}
        item={selectedItem}
      />
      {filteredProducts.map((item) => (
        <Col key={item._id}>
          <Card
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
            actions={[
              user != null && (
                <Button
                  type="default"
                  className="bg-blue-600 w-10/12 text-white"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </Button>
              ),
            ]}
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
